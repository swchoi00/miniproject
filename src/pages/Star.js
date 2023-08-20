import { useEffect, useState } from 'react';
import { ImStarFull } from "react-icons/im";
import './Star.css';


const Star = ({ data, setData, saveInfo, setInfo }) => {

  const count = [0, 1, 2, 3, 4]

  // 누르지 않았을 때 별은 false
  const [clicked, setClicked] = useState([false, false, false, false, false])

  const [state, setState] = useState();


  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  console.log(clicked)

  // clicked 배열 값이 변경될 때만 실행, sendReview 함수 호출 별 클릭할 때마다 clicked 배열 변경
  useEffect(() => {
    sendReview();
  }, [clicked]);


  const sendReview = () => {

    // true인 별점만 계산해서 길이를 보냄
    let score = clicked.filter(Boolean).length;


    // Info에 별점 길이 저장 후 Detail 페이지에서 별점 길이를 가지고 출력
    setInfo((prevInfo => ({
      ...prevInfo,
      star: score,

    })))

    console.log(score)

  };



  return (

    count.map((data, i) => (
      <ImStarFull key={i} onClick={() => handleStarClick(data)}
        className={clicked[data] && 'yellowStar'}
        size='50'
      />))


  )
}

export default Star;