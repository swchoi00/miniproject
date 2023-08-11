import './App.css';
import './components/Button.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Write from './pages/Write';


function App() {
  const textBar = '';

  return (
    <div className="App">
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Write' element={<Write />} />
        <Route path='/detail' element={<Detail />} />

      </Routes>
      <div>
        {textBar}
      </div>

    </div>
  );
}

export default App;