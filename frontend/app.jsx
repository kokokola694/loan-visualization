import React from 'react';
import Chart from './chart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loans: [],
      year: "ALL"
    }
  }

  componentDidMount () {
    $.ajax({
      method: "GET",
      url: "api/loans"
    }).then(loans => {
      let loansByMonth = {
        // Sum, count, month #
        // Keep track of month to keep sorted
        1: {2009: [0,0,1], 2010: [0,0,1], 2011: [0,0,1]},
        2: {2009: [0,0,2], 2010: [0,0,2], 2011: [0,0,2]},
        3: {2009: [0,0,3], 2010: [0,0,3], 2011: [0,0,3]},
        4: {2009: [0,0,4], 2010: [0,0,4], 2011: [0,0,4]},
        5: {2009: [0,0,5], 2010: [0,0,5], 2011: [0,0,5]},
        6: {2009: [0,0,6], 2010: [0,0,6], 2011: [0,0,6]},
        7: {2009: [0,0,7], 2010: [0,0,7], 2011: [0,0,7]},
        8: {2009: [0,0,8], 2010: [0,0,8], 2011: [0,0,8]},
        9: {2009: [0,0,9], 2010: [0,0,9], 2011: [0,0,9]},
        10: {2009: [0,0,10], 2010: [0,0,10], 2011: [0,0,10]},
        11: {2009: [0,0,11], 2010: [0,0,11], 2011: [0,0,11]},
        12: {2009: [0,0,12], 2010: [0,0,12], 2011: [0,0,12]},
      }

      Object.values(loans).forEach( loan => {
        let newSum = loansByMonth[loan.month][loan.year][0] + loan.int_rate;
        let newCount = loansByMonth[loan.month][loan.year][1] + 1;
        const month = loansByMonth[loan.month][loan.year][2];
        loansByMonth[loan.month][loan.year] = [newSum, newCount, month];
      });

      this.setState({loans: Object.values(loansByMonth) })
    })
  }

  changeYear (year) {
    return (e) => {
      this.setState({ year });
    }
  }

  render () {
    const { loans, year } = this.state;
    return (
      <div className="chart-container">
        <h1>Loan Interest Rate by Month</h1>
        <h2>Year: {year}</h2>
        <Chart data={loans} year={year}/>

        <div className="year-buttons">
          <button onClick={this.changeYear(2009)}>2009</button>
          <button onClick={this.changeYear(2010)}>2010</button>
          <button onClick={this.changeYear(2011)}>2011</button>
          <button onClick={this.changeYear("ALL")}>ALL</button>
        </div>
      </div>
    )
  }
}

export default App;
