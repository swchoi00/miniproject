import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import 도시락 from '../img/도시락.png'
import 김치찌개 from '../img/김치찌개.jpg'
import './Detail.css';
import { useEffect } from "react";

const { kakao } = window;

const Detail = ({ data }) => {


  useEffect(() => {

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
  }, [])



  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <Header title={<img src={도시락} style={{ width: '100%', height: '50%' }} alt="도시락.png"></img>} />

      <div className="Button_section">
        {/* <Button className='left_button' text={'< 뒤로가기'} clickHandler={goBack} /> */}
      </div>

      <div className="place_name">
        <h3>가게이름 + ★★★★</h3>
      </div>

      <br />
      <section className="info_section">
        <div className="detail_img_section">
          <img className="img_file" src={김치찌개} alt="음식이미지"></img>
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
              <td>맛있습니다맛있습니다맛있습니다맛있습니다맛있습니다맛있습니다맛있습니다맛있습니다맛있습니다맛있습니다맛있습니다맛있습니다</td>
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