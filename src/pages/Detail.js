import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import 로고 from '../img/로고.png'
import './Detail.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img0 from '../img/img0.jpg'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import Share from "../components/Share";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import React from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';


const { kakao } = window


const Detail = ({ data }) => {

  const { selectedId } = useParams();

  const imgs = [img0, img1, img2, img3, img4]

  // 별점 체크 스테이트
  const [value, setValue] = useState(2);

  // data 배열에서 선택된 가게 정보 찾기
  const selectedStore = data.find(item => item.id === parseInt(selectedId));


  // 카카오 지도 api 사용
  useEffect(() => {

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);

    // 장소 검색 객체 생성
    const ps = new kakao.maps.services.Places();

    // 키워드로 장소 검색
    ps.keywordSearch(selectedStore.location, placeSearchCB);

    function placeSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {

        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x)
      });
    }

  }, []);



  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  const goEdit = () => {
    navigate(`/editor/${selectedId}`);
  }


  return (
      
      <div>
        <Header title={<img src={로고} style={{ width: '100%', height: '50%' }} alt="로고.png" onClick={goBack}></img>} />
        <div className="Button_section">
          {/* <Button className='left_button' text={'< 뒤로가기'} clickHandler={goBack} /> */}

        </div>


        {/* 선택한 가게 정보가 존재할 때 가게이름을 출력 */}
        {selectedStore && (
          <div className="place_name">
            <tr>
              <th>
                <h3 style={{ fontWeight: '200', width: '200px' }}>{selectedStore.name}</h3>
              </th>
              <td className="td_rate">
                <Typography component="legend"></Typography>
                <Rating name="read-only" value={selectedStore.star}  readOnly />
              </td>
              <td className="edit_text">
                   {/* <button className="edit_text" onClick={goEdit}>수정하기</button> */}
                   <Button variant="contained" style={{ backgroundColor: 'red', fontSize: '15px' }} onClick={goEdit} endIcon={<SendIcon style={{color:'white'}} />}>
            수정하기
          </Button>
              </td>
            </tr>

          </div>
        )}

        {/* <img src="http://via.placeholder.com/640x480" alt=""></img> */}

        <br />

        <section className="info_section">
          <div className="detail_img_section">
            {/* 배열 방에 부여한 Id 5까지 임시데이터용 이미지 사용 */}
            {selectedId <= 5 && (
              <img className="img_file" src={imgs[selectedId - 1]} style={{ width: '250px', height: '250px' }} alt="임시데이터용 이미지" />
            )}
            {/* id 5 이후 부터는 임시이미지 사용 */}
            {selectedId > 5 && (
              <img className="img_file" src="http://via.placeholder.com/250x250" alt="음식이미지" ></img>
            )}

            <br />
            <br />

            <tbody>
              <tr>
                <th>주소</th>
                <td style={{ backgroundColor: 'orange', color: 'white', borderRadius: '15px' }}>{selectedStore.location}</td>
                <br />
                <td><div className="map" id='map' ></div></td>

              </tr>

              <tr>
                <th>메모</th>
                <td style={{ backgroundColor: 'salmon', color: 'white', borderRadius: '15px' }}>{selectedStore.review}</td>
              </tr>
            </tbody>
            <br />
          </div>

          <br />
        </section>


        <div className="location_section">
          <Share />
        </div>
              
      </div >



      )
}


      export default Detail;
