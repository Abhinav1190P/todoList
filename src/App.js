import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Todo from './components/todo'

const App = () =>{
  return (
    <div>
<BrowserRouter>
<Switch>

<Route path = '/' component = {Todo}/>

</Switch>
</BrowserRouter>
    </div>
  );
}

export default App;
