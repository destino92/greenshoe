import React, { Component } from 'react';
import loanData from '../data.js';
import classNames from 'classnames';
import './App.css';

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
    const {list} = this.props;
    return(
      <div className="table">
        <div className="table-header">
          <span style={{ width: '40%' }}>
            Name
          </span>
          <span style={{ width: '30%' }}>
            ID
          </span>
          <span style={{ width: '15%' }}>
            Phone Number
          </span>
          <span style={{ width: '15%' }}>
            Loan Balance
          </span>
        </div>
        {list.map(item =>
          <div
            key={item.object_id}
            className="table-row"
          >
            <span style={{ width: '40%' }}>
              <a href="#">{item.full_name}</a>
            </span>
            <span style={{ width: '30%' }}>
              {item.national_id}
            </span>
            <span style={{ width: '15%' }}>
              {item.mobile_number}
            </span>
            <span style={{ width: '15%' }}>
              {item.loan_balance}
            </span>
          </div>
        )}
      </div>
    )
  }
}

export default App;
