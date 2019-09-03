import React from 'react'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'

//这里的todos是通过connect挂载进来的
const TodoList = (props) => (
  <ul>
    {props.todos.map(todo => (
      <TodoItem key={todo.text} text={todo.text} completed={todo.completed} fn={()=>props.modifyTodo(todo.text)} show={props.filter}/>
    ))}
  </ul>
)

//返回一个对象，是挂载在props上的对象
const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter:state.filter
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    modifyTodo : input =>{ dispatch({type:"MODIFY_TODO",payload:input}) }   
  }
}

//connect(mapStateToProps,mapDispatchToProps),其中是将state和Todolist中的props做一个映射
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)