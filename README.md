# React-Paging-Search

> A simple React component supports paging search
> (Scroll bottom to load next page)

## Installation

```shell
$ npm install react-paging-search
```

## Usage

```javascript
import ReactPagingSearch from 'react-paging-search';

/*
* getOptions can be a Promise or Async function
* getOptions return {
*    options: list of option, each option { value: <unique value>, label: <display value> } (can contains others info as well)
*    page: current page
*    success: result in boolean. ReactPagingSearch will retry 3 times if not success
* }
*/
function getOptions(keyword, page) {
    return new Promise(function(resolve, reject) {
      let options = [];
      let itemPerPage = 50;
      for (let i = (page - 1) * itemPerPage; i < page * itemPerPage; i++) {
        options.push({
          value: i,
          label: keyword + ' ' + i,
        })
      }
      resolve({
        options: options,
        page: page,
        success: true
      })
    });
}

/* ReactPagingSearch
* getOptions: function(keyword, page) return { options, page, success }
* onSelectOption: function(option), call when select an option
* placeholder: search input placeholder
* renderLeftIcon/renderRightIcon: to render left/right icon, input the component state (which use to get loading status) to render the icon
*/
<ReactPagingSearch
    getOptions={getOptions}
    onSelectOption={(option) => window.open('/candidate/' + option.value)}
    placeholder={"Search by candidate name, email or mobile number"}
    renderLeftIcon={(state) => <img src={ICON_SEARCH} />}
/>
```