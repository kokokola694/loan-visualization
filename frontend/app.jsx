import React from 'react';
import Chart from './chart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loans: []
    }
  }

  componentDidMount () {
    $.ajax({
      method: "GET",
      url: "api/loans"
    }).then(loans => {
      let loansByMonth = {
        // Sum, count, month #
        1: [0,0,1],
        2: [0,0,2],
        3: [0,0,3],
        4: [0,0,4],
        5: [0,0,5],
        6: [0,0,6],
        7: [0,0,7],
        8: [0,0,8],
        9: [0,0,9],
        10: [0,0,10],
        11: [0,0,11],
        12: [0,0,12]
      }

      Object.values(loans).forEach( loan => {
        let newSum = loansByMonth[loan.month][0] + loan.int_rate;
        let newCount = loansByMonth[loan.month][1] + 1;
        const month = loansByMonth[loan.month][2];
        loansByMonth[loan.month] = [newSum, newCount, month];
      });

      this.setState({loans: Object.values(loansByMonth) })
    })
  }

  render () {
    const { loans } = this.state;
    return (
      <div className="chart-container">
        <h1>Loan Visualization</h1>
        <Chart data={loans}/>
      </div>
    )
  }
}

export default App;
