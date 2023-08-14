import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



const App: React.FC = () =>  {


  return (
    <Router>
      <div className='container mx-auto'>
       <Switch>
        <Route path='/' exact Component={Home}/>
       </Switch>
      </div>
    </Router>
  )
}

export default App
