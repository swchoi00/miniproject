import './App.css';
import './components/Button.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Write from './pages/Write';
import List from './pages/List';
import { useState } from 'react';
// import { createContext } from 'react';

// export const infoContext = createContext();

function App(props) {
  const textBar = '';
  const [data, setData] = useState({
    name : '',
    location : '',
    file : '',
    review : ''
  });
  console.log(data);
  const [num, setNum] = useState(0)

  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Home />} />

        {/* <Route path='/Write' element={<Write num={num} setNum={setNum}/>} /> */}
        <Route path='/Write' element={<Write data={data} setData={setData}/>} />
        
        <Route path='/detail' element={<Detail />} />

        {/* <Route path='/list' element={<List num={num} />} /> */}
        <Route path='/list' element={<List data={data} />} />

      </Routes>
      <div>
        {textBar}
      </div>

    </div>
  );
}

export default App;