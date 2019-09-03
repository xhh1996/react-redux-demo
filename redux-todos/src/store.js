import { createStore } from 'redux'

// 定义应用的 state 结构
const initialState = {
  todos: [
    { text: 'Learning HTML', completed: true },
    { text: 'Learning CSS', completed: false }
  ],
  filter: 'all'
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, { text: payload, completed: false }] }
    case 'MODIFY_TODO':
        console.log('modify');
        let newTodos = [];
        let todos = [...state.todos]
        for(let i of todos){        
          if(i.text === payload){
            newTodos.push({...i,completed:!i.completed})
          }else newTodos.push(i)
        }      
      return { todos:newTodos , filter:state.filter } 
    case 'FILTER':
      if(payload === "All"){       
        return {...state , filter:"all"}
      }else if(payload === "Active"){            
        return {...state , filter:"active"}
      }else{   
        return {...state , filter:"completed"}
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
