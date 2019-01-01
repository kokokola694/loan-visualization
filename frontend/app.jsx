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
    }).then(({ counts, averages }) => {

      const data = {2009: [], 2010: [], 2011: [], "all": []};

      for (let m = 1; m <= 12; m++) {
        let sum = 0;
        let count = 0;
        for (let y = 2009; y <= 2011; y++) {
          const avg = averages[`[${y}, ${m}]`];
          data[y].push({x: parseFloat(m), y: parseFloat(avg)});
          sum += avg * counts[`[${y}, ${m}]`];
          count += counts[`[${y}, ${m}]`];
        }
        data["all"].push({x: parseFloat(m), y: parseFloat(sum/count)})
      }
      this.setState({ loans: Object.values(data), loading: false });
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
