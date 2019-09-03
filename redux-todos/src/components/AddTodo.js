import React, { useState } from 'react'
import { connect } from 'react-redux'

const AddTodo = (props) => {
  const [input, setInput] = useState('')
  return (
    <div>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={() => props.addTodo(input)}>add</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: input => dispatch({ type: 'ADD_TODO', payload: input })
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)

// class state
// React hooks 核心解决的就是在 函数式组件中使用状态
