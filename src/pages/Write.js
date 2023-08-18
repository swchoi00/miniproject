
import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
import Header from "../components/Header";
import React, { useState } from "react";
import './Write.css';
import 로고 from '../img/로고.png';
import Star from "../pages/Star"
import MapContainer from "./MapContainer";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { TextareaAutosize } from "@mui/material";
import styled from "styled-components";


const ariaLabel = { 'aria-label': 'description' };


const Write = ({ data, setData }) => {
  
  const navigate = useNavigate();

  // 추가되는 가게들을 식별하기 위해 id값 설정 -> 가게가 추가될 때마다 다음 숫자의 id를 부여
  const setId = data.length + 1;

  // saveInfo : 입력된 정보를 저장
  const [saveInfo, setInfo] = useState({
    id: setId,
    name: '',
    location: '',
    file: null,
    review: '',
    star: '',
  });


  // 카카오맵 위치설정
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
    setInfo({ ...saveInfo, location: e.target.value })

  }


  // 등록하기 버튼을 눌렀을 때 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");

    // state 객체를 전달하여 선택한 가게의 id를 넘겨줌 
    // navigate('/detail', { state: { selectedName: setId } });

  }

  // 등록하기 버튼을 눌렀을 때 실행
  // 입력된 정보는 saveInfo에 저장되고 App에서 만들어놓은 setData를 사용해 기존 data 배열에 추가
  const submitInfoHandler = () => {
    if (window.confirm('등록하시겠습니까?')) {
      setData(prevData => [...prevData, saveInfo]);
      navigate(-1);
    }
  };

  // 취소 버튼 누를 시 이전 페이지로 이동
  const goBack = () => {
    if (window.confirm('정말 취소하시겠습니까?')) {
      navigate(-1);
    }
  };

  // <tbody>
  // <tr>
  //     <th>이름</th>
  //     <td>{item.name}</td>
  //     <td>{item.star}</td>
  // </tr>
  return (
    <>
      <Header title={<img src={로고} style={{ width: '100%', height: '50%' }} alt="로고.png" />} />
   
      
          <h2>맛집 이름</h2>

          <div>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1 },
              }}
              noValidate
              autoComplete="off"
              >
            </Box>
            <Input placeholder="" inputProps={ariaLabel} onChange={(e) => setInfo({ ...saveInfo, name: e.target.value })} />
            {/* <input className="restName" type="text" placeholder="맛집의 이름을 알려주세요" onChange={(e) => setInfo({ ...saveInfo, name: e.target.value })} /> */}
          </div>
   

      {/* <div>
        <h2>지역 선택</h2>
        <select onChange={(e) => setInfo({ ...saveInfo, location: e.target.value })} value={saveInfo.location}>
          <option value="지역선택" disabled>지역선택</option>
          <option value="강서구">강서구</option>
          <option value="강동구">강동구</option>
          <option value="강남구">강남구</option>
          <option value="강북구">강북구</option>
        </select>
      </div> */}

      <div>
        
        <form className="inputForm" onSubmit={handleSubmit}>
          {/* <input placeholder="위치를 입력하세요" onChange={onChange} value={inputText} /> */}
          <h2>위치</h2>
          <Input placeholder="위치를 입력하세요" inputProps={ariaLabel} onChange={onChange} value={inputText} />
          {/* <button type="submit">검색</button>           */}
          <Button variant="contained" style={{ background: 'salmon', width: '50px', height: '30px' }}>검색</Button>

        </form>
        <br />
        <MapContainer searchPlace={place} />

      </div>

      <div>
        <h2>사진 첨부</h2>
        <input type="file" onChange={(e) => setInfo({ ...saveInfo, file: e.target.value })} />

      </div>

      <div>
        <h2>메모 작성</h2>
        <textarea className="reviewArea" placeholder="메모를 작성해주세요" onChange={(e) => setInfo({ ...saveInfo, review: e.target.value })}></textarea>
      </div>

      <br />

      <div className="Rate">
        <Star saveInfo={saveInfo} setInfo={setInfo}/>
        
      </div>

      <br />

      <p>
        {/* <div className="Button_section"> */}
        <Stack direction="row" spacing={43}>
          <Button variant="contained" style={{ backgroundColor: 'salmon', fontSize: '15px' }} onClick={goBack} startIcon={<DeleteIcon style={{color:'white'}}/>}>
            취소하기
          </Button>
          <Button variant="contained" style={{ backgroundColor: 'orange', fontSize: '15px' }} onClick={submitInfoHandler} endIcon={<SendIcon style={{color:'white'}} />}>
            작성하기
          </Button>
        </Stack>
        {/* <Button className='left_button' text={'취소하기'} type='negative' clickHandler={goBack} />
          <Button className='right_button' text={'등록하기'} type='positive' clickHandler={submitInfoHandler} /> */}
        {/* </div> */}

      </p>
    </>
    
  );
}

export default Write;
