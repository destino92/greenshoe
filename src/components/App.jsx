import React, { Component } from 'react';
import { sortBy } from 'lodash';
import classNames from 'classnames';

import loanData from '../data.js';
import './App.css';

const SORTS = {
  NONE: list => list,
  NAME: list => sortBy(list, 'full_name'),
  ID: list => sortBy(list, 'national_id'),
  MOBILE_NUMBER: list => sortBy(list, 'mobile_number'),
  LOAN_BALANCE: list => sortBy(list, 'loan_balance')
};

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
  constructor(props) {
    super(props);

    this.state = {
      sortKey: 'NONE',
      isSortReverse: false
    };

    this.onSort = this.onSort.bind(this);
  }

  onSort(sortKey) {
    const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;

    this.setState({ sortKey, isSortReverse });
  }

  render() {
    const {list} = this.props;

    const { sortKey, isSortReverse } = this.state;

    const sortedList = SORTS[sortKey](list);
    const reverseSortedList = isSortReverse
      ? sortedList.reverse()
      : sortedList;

    return(
      <div className="table">
        <div className="table-header">
          <span style={{ width: '40%' }}>
            <Sort
              sortKey={'NAME'}
              onSort={this.onSort}
              activeSortKey={sortKey}
            >
              Name
            </Sort>
          </span>
          <span style={{ width: '30%' }}>
            <Sort
              sortKey={'ID'}
              onSort={this.onSort}
              activeSortKey={sortKey}
            >
              ID
            </Sort>
          </span>
          <span style={{ width: '15%' }}>
            <Sort
              sortKey={'MOBILE_NUMBER'}
              onSort={this.onSort}
              activeSortKey={sortKey}
            >
              Phone Number
            </Sort>
          </span>
          <span style={{ width: '15%' }}>
            <Sort
              sortKey={'LOAN_BALANCE'}
              onSort={this.onSort}
              activeSortKey={sortKey}
            >
              Loan Balance
            </Sort>
          </span>
        </div>
        { reverseSortedList.map(item =>
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

const Sort = ({ sortKey, activeSortKey, onSort, children }) => {
  const sortClass = classNames(
    'button-inline',
    { 'button-active': sortKey === activeSortKey }
  );

  return (
    <Button
      onClick={() => onSort(sortKey)}
      className={sortClass}>
      {children}
    </Button>
  );
}

const Button = ({onClick, className = '', children}) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

export default App;
