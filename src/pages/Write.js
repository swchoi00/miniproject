import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Header from "../components/Header"
import React, { useEffect, useState } from "react"
import { FaStar } from 'react-icons/fa';
import Star from "./Star";
import Form from 'react-bootstrap/Form';
import './Write.css';
import 도시락 from '../img/도시락.png'


const Write = (props) => {
  console.log(props);
  const navigate = useNavigate();

  const [chooseLocation, setLocation] = useState();

  // const [info, setInfo] = useState({
  //   name: '',
  //   location: '',
  //   file: '',
  //   review: '',
    
  // });

    const {data, setData} = props;

 


 // const [info, setInfo] = useState('자식테스트')

  // 수정중
  const submitInfoHandler = (e) => {

    if (window.confirm('등록하시겠습니까?'))
    navigate(-1);
      
  }


  const onChangeNameHandler = (e) => {
    setData((saveInfo) => ({
      ...saveInfo,
      name: e.target.value,
      
    }));
  };

  const onChangeLocationHandler = (e) => {
    setData((saveInfo) => ({
      ...saveInfo,
      location: e.target.value,
    }));
  };

  const onChangeFileHandler = (e) => {
    setData((saveInfo) => ({
      ...saveInfo,
      file: e.target.value,
    }));
  };

  const onChangeReviewHandler = (e) => {
    setData((saveInfo) => ({
      ...saveInfo,
      review: e.target.value,
    }));
  };

  const onChangeStarHandler = (e) => {
    setData((saveInfo) => ({
      ...saveInfo,
      star : e.target.value
    }));
  };


  const location = [
    { value: '지역선택', name: '지역선택' },
    { value: '강서구', name: '강서구' },
    { value: '강동구', name: '강동구' },
    { value: '강남구', name: '강남구' },
    { value: '강북구', name: '강북구' },
  ]

  // const [chooseLocation, setChooseLocation] = useState('gangseo');

  const goBack = () => {
    if (window.confirm('정말 취소하시겠습니까?'))
      navigate(-1);

  }

  return (
    <>
      <Header title={<img src={도시락} style={{ width: '100%', height: '50%' }} alt="도시락.png"></img>}

      // leftChild={<Button className="whiteBack" text={'◀'} clickHandler={goBack}  />}
      />
      <div>
        <h3>맛집 이름</h3>
        <input className="restName" type="text" style={{}} placeholder="맛집의 이름을 알려주세요" onChange={onChangeNameHandler}></input>
      </div>


      <div>
        <h3>지역 선택</h3>
        <select onChange={onChangeLocationHandler}>          
         {
            location.map((data, i) => {
              return (
                <option key={i} value={data.value} selected={data.value === 'default'} disabled={data.value === 'default'} >
                  {data.name}
                </option>
              );
            })
          }
        </select>

        <div>
          <h3>사진 첨부</h3>
          <input type="file" onChange={onChangeFileHandler}></input>
        </div>

        <div>
          <h3>리뷰 작성</h3>
          <textarea className="reviewArea" placeholder="리뷰를 작성해주세요" onChange={onChangeReviewHandler}></textarea>
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


      </div>
    </>


  )

}


export default Write;
