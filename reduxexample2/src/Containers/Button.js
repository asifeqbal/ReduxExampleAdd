import React from 'react'
import { connect } from 'react-redux'
import { sayHello,addItem,sayHI } from '../Action/Action'

let Button = ({ whatsUp, stateObject, saySomething,add }) => (
  <div >
    {/* <button onClick={saySomething}>PRESS TO DISPATCH FIRST ACTION</button>
    <h2>{whatsUp}</h2> */}
    <button onClick={add}>Click to Go</button>
    {/* <h1>{stateObject.Count}</h1> */}
  </div>
)
//Method to Update maping between
const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})
//method to dispatch
const mapDispatchToProps = (dispatch) => ({
  saySomething: () => { dispatch(sayHello())},
  add: () => { dispatch(addItem())}
})
//method of button
Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;