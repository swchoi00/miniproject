
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import React, { useState } from "react";
import './Write.css';
import 도시락 from '../img/도시락.png';
import Star from "../pages/Star"
import MapContainer from "./MapContainer";


const Write = ({ data, setData }) => {
  const navigate = useNavigate();

  // 추가되는 가게들을 식별하기 위해 id값 설정 -> 가게가 추가될 때마다 다음 숫자의 id를 부여
  const setId = data.length + 1;

  // saveInfo : 입력된 정보를 저장
  const [saveInfo, setInfo] = useState({
    id : setId,
    name: '',
    location: '',
    file: null,
    review: '',
    star: 0,
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
    navigate('/detail', { state: { selectedName: setId } });
    
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

  return (
    <>
      <Header title={<img src={도시락} style={{ width: '100%', height: '50%' }} alt="도시락.png" />} />
      <div>
        <h3>맛집 이름</h3>
        <input className="restName" type="text" placeholder="맛집의 이름을 알려주세요" onChange={(e) => setInfo({ ...saveInfo, name: e.target.value })} />
      </div>

      {/* <div>
        <h3>지역 선택</h3>
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
        <input placeholder="위치를 입력하세요" onChange={onChange} value={inputText}/>
        <button type="submit">검색</button>
      </form>
      <MapContainer searchPlace={place} />

    </div>

      <div>
        <h3>사진 첨부</h3>
        <input type="file" onChange={(e) => setInfo({ ...saveInfo, file: e.target.value })} />
      </div>

      <div>
        <h3>메모 작성</h3>
        <textarea className="reviewArea" placeholder="리뷰를 작성해주세요" onChange={(e) => setInfo({ ...saveInfo, review: e.target.value })}></textarea>
      </div>

      <div className="Rate">
        <Star />
      </div>

      <p>
        <div className="Button_section">
          <Button className='left_button' text={'취소하기'} type='negative' clickHandler={goBack} />
          <Button className='right_button' text={'등록하기'} type='positive' clickHandler={submitInfoHandler} />
        </div>
      </p>
    </>
  );
}

export default Write;
