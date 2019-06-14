import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/common/Header'
import List from './components/list/list.js'
import NotFound from './components/notfound/NotFound'
import {BrowserRouter,Switch,Route} from 'react-router-dom'


const App = ()=>{
return (
    <BrowserRouter>
   
    <div>
        <Header/>
        
        <Switch>
            <Route path='/' component={List} exact/>
            <Route  component={NotFound} />

        </Switch>

    </div>

    </BrowserRouter>

    
)
}

ReactDOM.render(<App/>,document.getElementById('root'))

