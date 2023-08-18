import './App.css';
import './components/Button.css'
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Write from './pages/Write';
import Star from './pages/Star';
import Editor from './pages/Editor';
import { useState } from 'react';
// import { createContext } from 'react';

// export const infoContext = createContext();

// 임시 데이터
const mockData = [
  {
    id : 1,
    name : '장독대 김치찌개',
    location : '청담동장독대 김치찌개',
    review : '맛있어서 또 가고 싶다 (가본적 없음)',
    star : 4
  },
  {
    id : 2,
    name : '임시 데이터 2',
    location : '임시 주소 2',
    review : '임시 메모 2',
    star : 5

  },
  {
    id : 3,
    name : '고든램지버거',
    location : '고든램지버거 롯데월드 몰',
    review : '먹어보진 않았지만 맛있다, 가격이 비싸서 누가 사줄때만 먹겠다',
    star : 4

  },
  {
    id : 4,
    name : '고트델리',
    location : '고트델리 문래',
    review : '맛있네',
    star : 5

  },
  {
    id : 5,
    name : '발리인망원',
    location : '발리인망원',
    review : '서울에서 발리를 느낄 수 있는 "발리인망원"',
    star : 3
  }
]



function App(props) {
  const textBar = '';


  const [data, setData] = useState(mockData);

  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/Write' element={<Write data={data} setData={setData} />} />
        <Route path='/detail/:selectedId' element={<Detail data={data} />} />
        <Route path='/' element={<Star data={data} setData={setData}/>} />
        <Route path='/editor/:selectedId' element={<Editor data={data} setData={setData}/> } />

      </Routes>
      <div>
        {textBar}
      </div>

    </div>
  );
}

export default App;