import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {count1: false, count2: false}

  firstName = () => {
    this.setState(prevState => ({count1: !prevState.count1}))
  }

  lastName = () => {
    this.setState(prevState => ({count2: !prevState.count2}))
  }

  render() {
    const {count1} = this.state
    const {count2} = this.state
    const authClass1 = count1 === true ? 'firstCard' : null
    const authClass2 = count2 === true ? 'lastCard' : null
    const authHead1 = count1 === true ? 'Joe' : null
    const authHead2 = count2 === true ? 'Jonas' : null
    return (
      <div className="bgContainer">
        <h1 className="heading">Show / Hide</h1>
        <div className="buttonClass">
          <div className="insideButton">
            <div>
              <button className="button" type="button" onClick={this.firstName}>
                Show/Hide Firstname
              </button>
            </div>
            <div className={`${authClass1}`}>
              <p className="head">{authHead1}</p>
            </div>
          </div>
          <div className="insideButton">
            <div>
              <button className="button" type="button" onClick={this.lastName}>
                Show/Hide Lastname
              </button>
            </div>
            <div className={`${authClass2}`}>
              <p className="head">{authHead2}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
