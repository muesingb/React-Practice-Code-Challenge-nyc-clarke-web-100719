import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    sushiEaten: false
  }

  handleSushiClick = (sushi) => {
    if (!this.state.sushiEaten && sushi.price <= this.props.moneyLeft) {
      this.setState({
        sushiEaten: true
      })
      // callback function that adds sushi clicked to array in state of app & sends that to table to render
      this.props.ateSushi(sushi)
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
           onClick={() => this.handleSushiClick(this.props)}>
          { this.state.sushiEaten ? null : <img src={this.props.img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }
}

export default Sushi