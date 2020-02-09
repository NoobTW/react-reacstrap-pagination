# React Reactstrap Pagination

Pagination component made using Reactstrap PaginationItem and PaginationLink components.

## Demo

[Live demo](https://codesandbox.io/s/2z5jw7mnkp)

## Props

```js
PaginationComponent.propTypes = {
  // Total number of items
  totalItems: PropTypes.number.isRequired,
  // Number of items displayed each page
  pageSize: PropTypes.number.isRequired,
  // Function to receive the event when a page is selected
  onSelect: PropTypes.func.isRequired,
  // Number of pages being displayed, by default 5
  maxPaginationNumbers: PropTypes.number,
  // Page where the pagination starts, by default 1
  activePage: PropTypes.number
  // Change text of "First" button
  firstPageText: PropTypes.string
  // Change text of "Previous" button
  previousPageText: PropTypes.string
  // Change text of "Next" button
  nextPageText: PropTypes.string
  // Change text of "Last" button
  lastPageText: PropTypes.string
  // Changes the size of the component. Values: "sm" and "lg"
  size: PropTypes.string
}
```

## Usage

```js
<PaginationComponent totalItems={50} pageSize={5} onSelect={this.handleSelected} />
```

## Update

Now if the props change the component will update. (Thanks JaydeeSale!)

Added prop activePage to have a different start page. (Thanks JalalAlbasri!)
