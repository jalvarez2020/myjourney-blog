import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';



const App: React.FC = () =>  {


  return (
    <Router>
      <div className='container mx-auto'>
       <Routes>
        <Route path='/Home' Component={Home} />
       </Routes>
      </div>
    </Router>
  )
}

export default App
