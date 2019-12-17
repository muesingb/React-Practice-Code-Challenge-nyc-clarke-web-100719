import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    renderSushi: [],
    eatenSushi: [],
    sushiStart: 0,
    sushiEnd: 4,
    moneyLeft: 100
  }

  componentDidMount = () => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          sushi: data
        })
      })
  }

  sushiToRender = () => {
    let originalSushi = this.state.sushi
    let renderSushi = [...originalSushi]
    //to add key to originalSushi, map over it and {...sushi, eaten:false}
    return (renderSushi.slice(this.state.sushiStart, this.state.sushiEnd))
  }

  handleNextSushi = () => {
    // let newEnd = this.state.sushiStart + 4
    // if (newEnd > this.state.sushi.length) {
    //   this.setState({
    //     sushiStart: 0,
    //     sushiEnd: 4
    //   })
    // } else {
    this.setState({
      sushiStart: this.state.sushiStart + 4,
      sushiEnd: this.state.sushiEnd + 4
    })
  // }
  }

  ateSushi = (sushi) => {
    let newEatenSushi = [...this.state.eatenSushi, sushi]
    this.setState({
      eatenSushi: newEatenSushi
    })
    this.adjustMoney(sushi.price)
  }

  adjustMoney = (costOfSushi) => {
    if (costOfSushi < this.state.moneyLeft) {
    let newMoneyLeft = this.state.moneyLeft - costOfSushi
      this.setState({
        moneyLeft: newMoneyLeft
      })
    }
  }

  addMoney = () => {
    this.setState({
      moneyLeft: this.state.moneyLeft + 100
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.sushiToRender()} ateSushi={this.ateSushi} moneyLeft={this.state.moneyLeft} handleNextSushi={this.handleNextSushi}/>
        <Table addMoney={this.addMoney} moneyLeft={this.state.moneyLeft} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;