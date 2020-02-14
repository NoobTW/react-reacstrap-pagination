import React from 'react';
import PaginationComponent from '../src/PaginationComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSelected = option => {
    console.log('selected', option);
  };

  render() {
    return (
      <div>
        <h1>Boilerplate</h1>
        <PaginationComponent
          size="lg"
          totalItems={30}
          pageSize={1}
          onSelect={this.handleSelected}
          maxPaginationNumbers={10}
          defaultActivePage={11}
        />
      </div>
    );
  }
}

export default App;
