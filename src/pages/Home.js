import React from "react"
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import 도시락 from '../img/도시락.png'
import './Home.css';
import 김치찌개 from '../img/김치찌개.jpg'
import Star from "./Star";

const Home = ( {data} ) => {
    const navigate = useNavigate();

    const goWrite = () => {
        navigate('/Write');
    }

    const onClickhandler = () => {
        navigate('/detail');
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
                        onClick={onClickhandler}
                    />
                    <ul>
                        <li>이름: {item.name}</li>
                        <li>지역: {item.location}</li>
                        <li>리뷰: {item.review}</li>
                        <li>별점: {item.star}</li>
                    </ul>
                </div>

            ))}

        </div>
    );
}
export default Home;