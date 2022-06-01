import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authpage from './pages/Authpage/AuthPage.comp';
import Upload from './pages/Upload/upload';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Authpage />}/>
    <Route path='/upload' element={<Upload />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
