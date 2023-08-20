import './App.css';
import './components/Button.css'
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Write from './pages/Write';
import Star from './pages/Star';
import Editor from './pages/Editor';
import { useState } from 'react';


// App.js 라우팅 관리, 페이지 컴포넌트 렌더링


// 임시 데이터
const mockData = [
  {
    id: 1,
    name: '장독대 김치찌개',
    location: '청담동장독대 김치찌개',
    review: '맛있어서 또 가고 싶다 (가본적 없음)',
    star: 4
  },
  {
    id: 2,
    name: '임시 데이터 2',
    location: '임시 주소 2',
    review: '임시 메모 2',
    star: 5

  },
  {
    id: 3,
    name: '고든램지버거',
    location: '고든램지버거 롯데월드 몰',
    review: '가격이 비싸서 누가 사주면 먹음',
    star: 4

  },
  {
    id: 4,
    name: '고트델리',
    location: '고트델리 문래',
    review: '맛있네',
    star: 5

  },
  {
    id: 5,
    name: '발리인망원',
    location: '발리인망원',
    review: '서울에서 발리를 느낄 수 있는 "발리인망원"',
    star: 3
  }
]



function App() {

  // 정보 저장하는 state
  // 임시데이터를 초기값 안에 넣어둠
  const [data, setData] = useState(mockData);



  return (
    <div className="App">


      {/*
    1. ('/') 첫 화면에 Home 화면을 렌더링 
    2. Write.js : 글 작성 페이지 ->  /Write 경로에 Write 컴포넌트를 렌더링, data와 setData를 보내서 값 읽기 + 수정이 가능하게함
    3. detail.js : 글 자세히 보는 페이지 -> /detail:selectedId 경로에는 Detail 컴포넌트 렌더링, 값 수정은 없기 때문에 data만 전송
    4. Star.js : 별점(리뷰) 선택하는 페이지 -> data, setData 전송
    5. Editor.js : 글 수정 페이지 -> 원래 값을 불러와서 수정하기 때문에 data, setData 전송
     */}


      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/Write' element={<Write data={data} setData={setData} />} />
        <Route path='/detail/:selectedId' element={<Detail data={data} />} />
        <Route path='/' element={<Star data={data} setData={setData} />} />
        <Route path='/editor/:selectedId' element={<Editor data={data} setData={setData} />} />

      </Routes>

    </div>
  );
}

export default App;