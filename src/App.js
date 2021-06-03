import React from 'react'
import './App.css';

import AppRouter from './Router';
const user = sessionStorage.getItem('user')

function App() {
  return (
    <div className="App">
        
        <AppRouter user={user}/>
   
    </div>
  );
}

export default App;
