import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/common/Header'
import List from './components/list/list.js'

const App = ()=>{
return (
    <div>
        <Header/>
        <List/>
    </div>
)
}

ReactDOM.render(<App/>,document.getElementById('root'))

