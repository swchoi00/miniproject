import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import 로고 from '../img/로고.png'
import 로고2 from '../img/로고2.png'
import './Home.css';
import img0 from '../img/img0.jpg'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'


const Home = ({ data }) => {
    const navigate = useNavigate();

    // 임시 데이터의 이미지들 배열에 저장
    const imgs = [img0, img1, img2, img3, img4]


    // 글 작성 버튼 클릭 시 글 작성하는 페이지로 이동할 수 있게함
    const goWrite = () => {
        navigate('/Write');
    }



    // 사진을 누르면 지정한 사진의 정보가 있는 detail 페이지로 이동
    const onClickhandler = (selectedId) => {
        navigate(`/detail/${selectedId}`);
    }

    // 여기서부터 스크롤 맨 위로가는 버튼 구현
    const [ScrollY, setScrollY] = useState(0); // 현재 스크롤의 위치를 저장하는 state
    const [BtnStatus, setBtnStatus] = useState(false); // 위로가는 버튼의 상태를 저장하는 state (초기값 false로 처음에 안보이게 설정)

    const handleFollow = () => {
        setScrollY(window.pageYOffset); // pageYOffSet : 최상단으로부터 현재 스크롤까지의 거리를 나타냄
        if (ScrollY > 100) {
            // 100 이상이면 버튼이 보이게 true
            setBtnStatus(true);
        } else {
            // 100 이하면 버튼이 사라지게 false
            setBtnStatus(false);
        }
    }

    const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
        window.scrollTo({ // scrollTo 함수는 스크롤을 변경해줌, behavior : "smooth" : 부드럽게
            top: 0,
            behavior: "smooth"
        });
        setScrollY(0);  // ScrollY 의 값을 초기화
        setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
    }


    // 컴포넌트가 렌더링 될 때 스크롤 이벤트를 감지, 이벤트 발생 시 handleFollow 함수 호출
    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow)
        }
        // 컴포넌트 언마운트, 업데이트 시 불필요한 리스너 제거
        watch();
        return () => {
            window.removeEventListener('scroll', handleFollow)
        }
    })


    return (

        <div style={{ backgroundImage: '/로고.png' }}>
            <button style={{ fontFamily: 'sans-serif' }}
                className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
                onClick={handleTop}  // 버튼 클릭시 함수 호출
            >^</button>
            {/* Header 컴포넌트 렌더링, 화면 상단에 로고 이미지 출력 */}
            <Header title={<img src={로고} style={{ width: '590px', height: '300px' }} alt="로고.png"></img>}
            />
            {/* Button 컴포넌트 렌더링, 글 작성 페이지로 이동 */}
            <Button className="write_button" type={'write_button'} text={'글 작성'} clickHandler={goWrite} />



            {/* map을 통해 data에 있는 모든 정보들 출력 */}
            {data.map((item, index) => (

                <div className="img_section" key={index}>

                    {/* {require(`../images/${imageName}.png`).default} */}

                    {/* 배열 방 4번까지 저장해둔 임시데이터 이미지 */}
                    {index <= 4 && (
                        <img src={imgs[index]} style={{ width: '150px', height: '150px' }} alt="mockdata 이미지" onClick={() => onClickhandler(item.id)} />
                    )}
                    {/* 추가되는 글 들은 임시이미지로 사용 */}
                    {index > 4 && (
                        <img
                            style={{ width: '150px', height: '150px' }}
                            src="http://via.placeholder.com/150x150"
                            alt="맛집 이미지"
                            onClick={() => onClickhandler(item.id)}
                        />
                    )}
                    <ul>
                        <tbody>
                            <tr>
                                <th>등록번호</th>
                                <td>{item.id}</td>
                            </tr>
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