import React from 'react'
import { connect } from 'react-redux'
const Filter = (props) => (
  <div>
    <span>Show:</span>
    <button style={{ marginLeft: 4 }} onClick={()=>props.filterContent("All")}>All</button>
    <button style={{ marginLeft: 4 }} onClick={()=>props.filterContent("Active")}>Active</button>
    <button style={{ marginLeft: 4 }} onClick={()=>props.filterContent("Completed")}>Completed</button>
  </div>
)
const mapDispatchToProps = dispatch=>{
  return {
    filterContent : input => {dispatch({type:"FILTER",payload:input})}
  }
}

export default connect(null,mapDispatchToProps)(Filter)
