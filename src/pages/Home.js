import React from "react"
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import 도시락 from '../img/도시락.png'
import './Home.css';
import 김치찌개 from '../img/김치찌개.jpg'

const Home = ( {data} ) => {
    const navigate = useNavigate();

    const goWrite = () => {
        navigate('/Write');
    }

    const onClickhandler = (selectedId) => {
        navigate(`/detail/${selectedId}`);
      }


    return (
        <div style={{ backgroundImage: '/도시락.png' }}>

            <Header title={<img src={도시락} style={{ width: '100%', height: '50%' }} alt="도시락.png"></img>}
            />
            <Button className="write_button" type={'write_button'} text={'글 작성'} clickHandler={goWrite} />



            {data.map((item, index) => (

                <div className="img_section" key={index}>
                    <img
                        style={{ width: '150px', height: '150px' }}
                        src={김치찌개}
                        alt="맛집 이미지"
                        onClick={() => onClickhandler(item.id)}
                    />
                    <ul>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>{item.name}</td>
                        </tr>
                        <tr>
                            <th>위치</th>
                            <td>{item.location}</td>
                        </tr>
                        <tr>
                            <th>메모</th>
                            <td>{item.review}</td>
                        </tr>
                    </tbody>
                    </ul>
                </div>

            ))}

        </div>
    );
}
export default Home;