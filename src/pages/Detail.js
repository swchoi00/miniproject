import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import 도시락 from '../img/도시락.png'
import 김치찌개 from '../img/김치찌개.jpg'
import './Detail.css';
import { useEffect } from "react";
import MapContainer from "./MapContainer";
import { useParams } from "react-router-dom";

const { kakao } = window


const Detail = ({ data }) => {

<<<<<<< HEAD
    const { selectedId } = useParams();
=======
  const { selectedId } = useParams();
>>>>>>> a831eb9f6de8ed5cb36b6d488e2a4d1be0c502f3


  // data 배열에서 선택된 가게 정보 찾기
  const selectedStore = data.find(item => item.id === parseInt(selectedId));


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
    ps.keywordSearch(data.location, placeSearchCB);

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


  return (

    <div>
      <Header title={<img src={도시락} style={{ width: '100%', height: '50%' }} alt="도시락.png" onClick={goBack}></img>} />

      <div className="Button_section">
        {/* <Button className='left_button' text={'< 뒤로가기'} clickHandler={goBack} /> */}
      </div>


      {/* 선택한 가게 정보가 존재할 때 가게이름을 출력 */}
      {selectedStore && (
        <div className="place_name">
          <h3>{selectedStore.name}</h3>
        </div>
      )}

      <br />
      <section className="info_section">
        <div className="detail_img_section">
          <img className="img_file" src={김치찌개} alt="음식이미지" ></img>
          <br />
          <br />

          <tbody>
            <tr>
              <th>주소</th>
              <td>화곡역 1번출구 어딘가</td>
              <br />
              <td><div className="map" id='map' ></div></td>

            </tr>

            <tr>
              <th>메모</th>
              <td></td>
            </tr>
          </tbody>

        </div>


        <br />
      </section>


      <div className="location_section">

      </div>






    </div>


  )
}


export default Detail;
