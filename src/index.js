import React from 'react';
import './index.scss';

const SearchIcon = () => (
  <svg focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path> \
  </svg>
)

function cleanOptions(options) {
  let optionsDict = {}
  for (let idx in options) {
    let option = options[idx];
    optionsDict[option.value] = option;
  }
  let res = [];
  for (let key in optionsDict) {
    res.push(optionsDict[key]);
  }
  return res
}

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
    this.onClickOption = this.onClickOption.bind(this);
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
  
  async onKeywordChange(e) {
    e.persist()
    if (this.debouceSearchTimeout) {
      clearTimeout(this.debouceSearchTimeout);
    }
    this.debouceSearchTimeout = setTimeout(async () => {
      await this.getOptions(e.target.value, 1);
      this.resultUlContainerRef.scrollTop = 0;
    }, 200)
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
    if (e.keyCode === 38 && cursor > 0) { // key up
      this.setState({ cursor: this.state.cursor - 1 })
      this.changedCursor = true;
    } else if (e.keyCode === 40 && cursor < options.length - 1) { // key down
      this.setState({ cursor: this.state.cursor + 1 })
      this.changedCursor = true;
    } else if (e.keyCode === 13 && 0 <= cursor && cursor < options.length) {
      this.onClickOption(options[cursor]);
    }
  }

  onClickOption(option) {
    if (this.props.onClickOption) {
      this.props.onClickOption(option);
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
      <span className='input-container full-parent flex'>
        <input className='full-parent'
          onKeyDown={ e => this.handleKeyDown(e) }
          onChange={this.onKeywordChange}
          onFocus={ _ => this.toggleResultDropDown(true) }
          onBlur={ _ => this.toggleResultDropDown(false) } />
        { this.renderIcon() }
      </span>
    )
  }

  renderIcon() {
    return <span className='svg-container'><SearchIcon/></span>
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
        onClick={_ => this.onClickOption(option)} 
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


function getHighlightText(text, keyword, ignoreCase=true) {
  let i, k;
	if (!ignoreCase) {
    k = keyword;
    i = text.search(k);
	} else {
    k = keyword.toLowerCase();
    i = text.toLowerCase().search(k);
  }
  if (!k) {
    return (<p>{text}</p>);
  }
  if (i < 0) {
    return (<p>{text}</p>);
  }
  let prev = text.substr(0, i);
  let key = text.substr(i, k.length);
  let post = text.substr(i + k.length, text.length - k.length);
  return (
      <p>{prev}<mark className='text_highlight'>{key}</mark>{post}</p>
  );
}