// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="rangeDescription">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.onGenerate}
            className="generateButton"
            type="button"
          >
            Generate
          </button>
          <p className="displayNumber">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
