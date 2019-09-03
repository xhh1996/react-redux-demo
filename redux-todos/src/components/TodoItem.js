import React from 'react'

const TodoItem= ({ text, completed ,fn ,show}) => {
  var showLi = true;
  if(show==="all"){    
    showLi = true;
  }else if(show==="active"){
    showLi = completed ? false : true ;
  }else{
    showLi = completed ? true : false ;
  }
  return (
    <li style={{
      textDecoration: completed ? 'line-through' : 'none' ,
      display : showLi ? 'block' : 'none'
    }} onClick={fn}>{text}</li>
  )
}
export default TodoItem