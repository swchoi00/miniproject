import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import 도시락 from '../img/도시락.png'
import './Home.css';
import 김치찌개 from '../img/김치찌개.jpg'

const Home = ({ data }) => {
    const navigate = useNavigate();

    const goWrite = () => {
        navigate('/Write');
    }

    const onClickhandler = (selectedId) => {
        navigate(`/detail/${selectedId}`);
    }

    const [ScrollY, setScrollY] = useState(0);
    const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

    const handleFollow = () => {
        setScrollY(window.pageYOffset);
        if (ScrollY > 100) {
            // 100 이상이면 버튼이 보이게
            setBtnStatus(true);
        } else {
            // 100 이하면 버튼이 사라지게
            setBtnStatus(false);
        }
    }

    const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setScrollY(0);  // ScrollY 의 값을 초기화
        setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow)
        }
        watch();
        return () => {
            window.removeEventListener('scroll', handleFollow)
        }
    })


    return (
        <div style={{ backgroundImage: '/도시락.png' }}>
            <button style={{fontFamily : 'sans-serif'}}
                className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
                onClick={handleTop}  // 버튼 클릭시 함수 호출
            >^</button>
            <Header title={<img src={도시락} style={{ width: '100%', height: '50%' }} alt="도시락.png"></img>}
            />
            <Button className="write_button" type={'write_button'} text={'글 작성'} clickHandler={goWrite} />


            {data.map((item, index) => (

                <div className="img_section" key={index}>
                    <img
                        style={{ width: '150px', height: '150px' }}
                        src="http://via.placeholder.com/150x150"
                        alt="맛집 이미지"
                        onClick={() => onClickhandler(item.id)}
                    />
                    <ul>
                        <tbody>
                            <tr>
                                <th>이름</th>
                                <td>{item.name}</td>
                                <td>{item.star}</td>
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