import './App.css';
import './components/Button.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Write from './pages/Write';
import List from './pages/List';
import { useState } from 'react';
import Star from './pages/Star';
// import { createContext } from 'react';

// export const infoContext = createContext();

function App(props) {
  const textBar = '';
  const [data, setData] = useState({
    name: '',
    location: '',
    file: '',
    review: '',
    star: ''
  });

  console.log(data);

  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/' element={<Star data={data} setData={setData} />} />

        {/* <Route path='/Write' element={<Write num={num} setNum={setNum}/>} /> */}
        <Route path='/Write' element={<Write data={data} setData={setData} />} />

        <Route path='/detail' element={<Detail />} />

        {/* <Route path='/list' element={<List num={num} />} /> */}
        <Route path='/list' element={<List />} />

      </Routes>
      <div>
        {textBar}
      </div>

    </div>
  );
}

export default App;