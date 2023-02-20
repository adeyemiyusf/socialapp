import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login'
import CreatePost from './pages/create-post/createPost';
import Navbar from './component/Navbar';
import { Main } from './pages/main/main';
function App() {
  return (
    <div className="App">
     <Router>
          <Navbar/>
      <Routes>
        <Route path = '/'  element = {<Main/>} />
        <Route path = '/login'  element = {<Login/>} />
        <Route path = '/createpost'  element = {<CreatePost/>} />
        
      </Routes>
      
     </Router>
    </div>
  );
}

export default App;
