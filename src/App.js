import React, { Component } from 'react';
import { SelectField } from 'react-md';
import './App.css';

class App extends Component {
  state = {
    year: new Date().getFullYear()
  }
  year = () => {
    let years = []
    for (let startYear = new Date().getFullYear(); startYear >= 1800; startYear--) {
      years.push(startYear)
    }
    return years
  }
  render() {
    return (
      <div className="App">
        <h1>Test 1 : Komutel </h1>
        <strong>FRIOUI Meher</strong>
        <br />
        <SelectField
          id="select-field-1"
          label="Chose Year"
          placeholder="Placeholder"
          className="md-cell"
          menuItems={this.year()}
          onChange={(year) => this.setState({
            year
          })}
          value={this.state.year}
        />
        <div>Result :{new Date().getFullYear() - this.state.year} year old</div>
      </div>
    );
  }
}

export default App;
