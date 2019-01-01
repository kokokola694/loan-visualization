import React from 'react';
import Chart from './chart';
import { ScaleLoader } from 'react-spinners';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loans: [],
      2009: false,
      2010: false,
      2011: false,
      loading: true
    }
  }

  componentDidMount () {
    $.ajax({
      method: "GET",
      url: "api/loans"
    }).then(loans => {
      let loansByMonth = {
        // Keep track of [Avg, count] for each year
        1: {2009: [0,0], 2010: [0,0], 2011: [0,0], "month": 1},
        2: {2009: [0,0], 2010: [0,0], 2011: [0,0], "month": 2},
        3: {2009: [0,0], 2010: [0,0], 2011: [0,0], "month": 3},
        4: {2009: [0,0], 2010: [0,0], 2011: [0,0], "month": 4},
        5: {2009: [0,0], 2010: [0,0], 2011: [0,0], "month": 5},
        6: {2009: [0,0], 2010: [0,0], 2011: [0,0], "month": 6},
        7: {2009: [0,0], 2010: [0,0], 2011: [0,0], "month": 7},
        8: {2009: [0,0], 2010: [0,0], 2011: [0,0], "month": 8},
        9: {2009: [0,0], 2010: [0,0], 2011: [0,0], "month": 9},
        10: {2009: [0,0], 2010: [0,0], 2011: [0,0], "month": 10},
        11: {2009: [0,0], 2010: [0,0], 2011: [0,0], "month": 11},
        12: {2009: [0,0], 2010: [0,0], 2011: [0,0], "month": 12},
      }

      Object.values(loans).forEach( loan => {
        const oldSum = loansByMonth[loan.month][loan.year][0] *
          loansByMonth[loan.month][loan.year][1]
        const newSum = oldSum + loan.int_rate;
        const newCount = loansByMonth[loan.month][loan.year][1] + 1;
        const newAvg = newSum / newCount;
        loansByMonth[loan.month][loan.year] = [newAvg, newCount];
      });

      this.setState({ loans: Object.values(loansByMonth), loading: false });
    })
  }

  changeYear (year) {
    return (e) => {
      const colors = { 2009: 'brown', 2010: 'yellow', 2011: 'salmon' }
      const btn = document.getElementById(`${year}`);
      btn.classList.toggle(`${colors[year]}`)
      btn.style.color = !this.state[year] ? 'black' : 'white';
      this.setState({
        [year]: !this.state[year]
      });
    }
  }

  render () {
    if (this.state.loading) {
      return (
        <div className='sweet-loading'>
        <ScaleLoader
          sizeUnit={"px"}
          height={150}
          width={7}
          size={150}
          color={'violet'}
          loading={this.state.loading}
          />
        </div>
      )
    }

    const { loans } = this.state;
    const years = [this.state[2009], this.state[2010], this.state[2011]];
    return (
      <div className="chart-container">
        <h1>Loan Interest Rate by Month</h1>
        <h2>Data by Lending Club Statistics</h2>
        <Chart data={loans} years={years}/>

        <div id="btns" className="year-buttons">
          <button id="2009" onClick={this.changeYear(2009)}>2009</button>
          <button id="2010" onClick={this.changeYear(2010)}>2010</button>
          <button id="2011" onClick={this.changeYear(2011)}>2011</button>
          <button id="all-btn">All</button>
        </div>
      </div>
    )
  }
}

export default App;
