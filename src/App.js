import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './component/Signin';
import Login from './component/Login';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />}></Route>
          <Route path='/signup' element={<Signin />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
