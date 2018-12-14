import React from 'react';
import { getHighlightText, cleanOptions } from './utils';
import './index.scss';

class ReactPagingSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      page: 1,
      keyword: '',
      options: [],
      mouseOvering: false,
      cursor: -1,
    }
    this.handleOnScroll = this.handleOnScroll.bind(this);
    this.onKeywordChange = this.onKeywordChange.bind(this);
    this.onSelectOption = this.onSelectOption.bind(this);
  }

  toggleResultDropDown(value) {
    this.setState({focus: value})
  }

  async getOptions(keyword, curPage) {
    let triedTimes = 0;
    while (triedTimes < 3) {
      let { options, page, success } = await this.props.getOptions(keyword, curPage);
      if (!success) {
        triedTimes = triedTimes + 1;
        continue;
      }
      let newPage = page;
      if (!options) {
        options = [];
      }
      if (options.length > 0) {
        newPage = newPage + 1;
      }
      let newOptions = (page > 1) ? [...this.state.options, ...options] : [...options];
      var newCursor = this.state.cursor;
      if (page == 1) { //reset cursor
        newCursor = -1;
        this.cursorRef = null;
      }
      this.setState({
        keyword: keyword,
        page: newPage,
        options: cleanOptions(newOptions),
        cursor: newCursor,
      })
      break;
    }
  }
  
  async changeKeyword(keyword) {
    if (this.debouceSearchTimeout) {
      clearTimeout(this.debouceSearchTimeout);
    }
    this.debouceSearchTimeout = setTimeout(async () => {
      await this.getOptions(keyword, 1);
      this.resultUlContainerRef.scrollTop = 0;
    }, 200)
  }

  async onKeywordChange(e) {
    e.persist()
    await this.changeKeyword(e.target.value);
  }

	async handleOnScroll(e) {
    if (this.loading) {
      return
    }
		let offset = e.target.scrollTop + this.resultUlContainerRef.clientHeight;
		if (Math.abs(offset - this.resultUlRef.clientHeight) <= 10) {
      this.loading = true;
      await this.getOptions(this.state.keyword, this.state.page);
      this.loading = false
    }
  }
  
  handleKeyDown(e) {
    const { cursor, options } = this.state;
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) { // key Up
      this.setState({ cursor: this.state.cursor - 1 })
      this.changedCursor = true;
    } else if (e.keyCode === 40 && cursor < options.length - 1) { // key Down
      this.setState({ cursor: this.state.cursor + 1 })
      this.changedCursor = true;
    } else if (e.keyCode === 13 && 0 <= cursor && cursor < options.length) { // key Enter
      this.onSelectOption(options[cursor]);
    }
  }

  onSelectOption(option) {
    if (this.props.onSelectOption) {
      this.props.onSelectOption(option);
    }
    this.onMouseOver(false);
  }

  onMouseOver(value, cursor) {
    var newState = {}
    if (value != this.state.mouseOvering) {
      newState.mouseOvering = value;
    }
    if (value) {
      if (cursor != this.state.cursor) {
        newState.cursor = cursor;
      }
    }
    this.setState(newState);
  }

  async onClickClearIcon() {
    await this.changeKeyword('');
    this.inputRef.value = '';
  }

  render() {
    return (
      <span className={'react-paging-search full-parent' + (this.state.focus || this.state.mouseOvering ? ' open' : ' close')}>
        { this.renderInput() }
        { this.renderResult() }
      </span>
    );
  }

  renderInput() {
    return (
      <span className={'input-container full-parent flex' + (this.state.focus ? ' focus' : '')}>
        { this.renderLeftIcon(this.state) }
        <input className='full-parent'
          ref={ ref => this.inputRef = ref }
          onKeyDown={ e => this.handleKeyDown(e) }
          onChange={this.onKeywordChange}
          onFocus={ _ => this.toggleResultDropDown(true) }
          onBlur={ _ => this.toggleResultDropDown(false) }
          placeholder={this.props.placeholder} />
        { this.renderClearIcon(this.state) }
        { this.renderRightIcon(this.state) }
      </span>
    )
  }

  renderLeftIcon(state) {
    return <span className='svg-container'>{this.props.renderLeftIcon ? this.props.renderLeftIcon(state) : null }</span>
  }

  renderClearIcon(state) {
    return (
      <span className='svg-container'>
        <svg version="1.1" viewBox="0 0 357 357" className='close' onClick={_ => this.onClickClearIcon() }>
          <g><g><polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5" fill='rgba(161, 180, 205, 1)'/></g></g>
        </svg>
      </span>
    )
  }

  renderRightIcon(state) {
    return <span className='svg-container'>{this.props.renderRightIcon ? this.props.renderRightIcon(state) : null }</span>
  }

  renderResult() {
    return (
      <span className='result-ul-container'
        onScroll={this.handleOnScroll} ref={ref => this.resultUlContainerRef = ref}>
        <ul className='result-ul' ref={ref => this.resultUlRef = ref}>
          { this.state.options.map((option, idx) => this.renderOption(option, idx)) }
        </ul>
      </span>
    )
  }

  renderOption(option, idx) {
    return (
      <li key={option.value}
        className={ this.state.cursor == idx ? ' hover' : '' }
        ref={ref => { if (this.state.cursor == idx) { this.cursorRef = ref }}}
        onClick={_ => this.onSelectOption(option)} 
        onMouseOver={_ => this.onMouseOver(true, idx)}
        onMouseLeave={_ => this.onMouseOver(false)}>
        { this.renderOptionContent(option, idx) }
      </li>
    )
  }

  renderOptionContent(option, idx) {
    return getHighlightText(option.label, this.state.keyword, this.props.ignoreCase);
  }

  componentDidUpdate() {
    if (this.cursorRef && this.changedCursor) {
      let offset = this.resultUlContainerRef.scrollTop + this.resultUlContainerRef.clientHeight;
      let targetOffset = this.cursorRef.offsetTop + this.cursorRef.clientHeight;
      // if target [this.cursorRef.offsetTop, targetOffset] is out of the 
      //  viewing window [this.resultUlContainerRef.scrollTop, offset]
      let c1 = this.cursorRef.offsetTop < this.resultUlContainerRef.scrollTop;
      let c2 = offset < targetOffset;
      if ((c1 || c2) && !(c1 && c2)) {
        this.cursorRef.scrollIntoView({behavior: 'smooth'});
      }
      this.changedCursor = false;
    }
  }
}

export default ReactPagingSearch;
