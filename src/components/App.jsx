import React, { Component } from 'react';
import loanData from '../data.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loans: loanData,
    }
  };

  render() {
    const {loans} = this.state;
    return(
      <div className="page">
        <Table
          list={loans}
        />
      </div>
    );
  }
}

class Table extends Component {
  render() {
    return(
      <div>This is suppose to be a table</div>
    )
  }
}

export default App;
