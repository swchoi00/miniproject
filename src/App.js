
import './App.css';
import './components/Button.css'
import Button from './components/Button';
import Header from './components/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import write from './pages/write';




function App() {
  const headerTitle = '맛집리스트'
  const textBar = '맛있는 음식 공유하기';
  const navigate = useNavigate();

  return (
    <div className="App">

      <Header title={headerTitle}>
      <Routes>
        <Route path='/' element={<write />} />
        <Route path='/write' element={<write />} />
      </Routes>
      </Header>
      <div>
        {textBar}
      </div>

    </div>
  );
}

export default App;
