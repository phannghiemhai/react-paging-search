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
  let res = []
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
    }
    this.handleOnScroll = this.handleOnScroll.bind(this);
    this.onKeywordChange = this.onKeywordChange.bind(this);
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
      let newOptions = (page > 1) ? [...this.state.options, ...options] : [...options];
      this.setState({
        keyword: keyword,
        page: page + 1,
        options: cleanOptions(newOptions),
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

  render() {
    return (
      <span className={'react-paging-search full-parent' + (this.state.focus ? ' open' : ' close')}>
        <span className='input-container full-parent flex'>
          <input className='full-parent'
            onChange={this.onKeywordChange}
            onFocus={ _ => this.toggleResultDropDown(true) }
            onBlur={ _ => this.toggleResultDropDown(false) } />
          <span className='svg-container'><SearchIcon/></span>
        </span>
        <span className='result-ul-container' onScroll={this.handleOnScroll} ref={ref => this.resultUlContainerRef = ref}>
          <ul className='result-ul' ref={ref => this.resultUlRef = ref}>
            { this.state.options.map(option => (
              <li key={option.value}>{option.label}</li>
            ))}
          </ul>
        </span>
      </span>
    );
  }
}
export default ReactPagingSearch;
