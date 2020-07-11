import React from 'react';
import './style/Converter.css';

class JarakInput extends React.Component {
    _handleChange = (e) => {
      this.props.onChangeJarak(e.target.value);
    }
  
  render() {
    const { jarakLabel, jarak } = this.props
  
    return(
      <div>
        <label>
          <p>{jarakLabel}</p>
          <input type="number" value={jarak} onChange={this._handleChange} />
        </label>
      </div>
      );
    }
  }
  
class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      km: 0,
      m: 0,
      mm: 0
    }
  }

// ketika submit akan memunculkan alert persamaannya
onSubmit = (e) => {
  e.preventDefault();
  alert(`${this.state.km} km = ${this.state.m} m = ${this.state.mm} mm`)
}

// Ketika Km diisi akan sync dgn yg lain
onChangeKm = (km) => {
  let m = (parseFloat(km) * 1000).toString();
  let mm = (parseFloat(km) * 1000000).toString();

  this.setState({ km, m, mm });
}
  
// Ketika M diisi akan sync dgn yg lain
onChangeM = (m) => {
  let km = (parseFloat(m) / 1000).toString();
  let mm = (parseFloat(m) / 1000000).toString();

  this.setState({ km, m, mm });
}

// Ketika Mm diisi akan sync dgn yg lain
onChangeMm = (mm) => {
  let m = (parseFloat(mm) / 1000).toString();
  let km = (parseFloat(mm) / 1000000).toString();

  this.setState({ mm, m, km });
}

render() {
  const { km, m, mm } = this.state;
    return(
      <>
          <form onSubmit={this.onSubmit} className="convert-cont">
            <h1>Converter Km / M / Mm</h1>
            <JarakInput jarakLabel='Kilometer' jarak={km} onChangeJarak={this.onChangeKm} />
            <JarakInput jarakLabel='Meter' jarak={m} onChangeJarak={this.onChangeM} />
            <JarakInput jarakLabel='Milimeter' jarak={mm} onChangeJarak={this.onChangeMm} />
          <button className='btn' type="submit">Convert</button>
          </form>
      </>
    );
  }
}

export default Converter;