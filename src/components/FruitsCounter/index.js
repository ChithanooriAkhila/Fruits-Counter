// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  EatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  EatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">
            Bob ate <span className="fruit">{mangoes} </span>mangoes{' '}
            <span className="fruit">{bananas} </span>bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img-fruit"
              />
              <button type="button" onClick={this.EatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img-fruit"
              />
              <button type="button" onClick={this.EatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
