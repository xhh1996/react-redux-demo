import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import store from './store'

// 1. 创建一个 store.js 处理 store 逻辑
// 2. 在应用的入口位置通过 Provider 包裹 App 组件, 通过 store 指定全局的 store
// 3. 在需要用到 store 的组件上使用 connect 方法包装组件

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

// Provider
// connect
