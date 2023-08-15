import { useEffect, useState } from 'react';
import { ImStarFull } from "react-icons/im";
import './Star.css';


const Star = (props) => {

  const count = [0, 1, 2, 3, 4]
  const [clicked, setClicked] = useState([false, false, false, false, false])

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
      console.log(clicked)
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
  };


  return (
  
    count.map((data, i) => (  
      <ImStarFull key={i} onClick={() => handleStarClick(data)}
        className={clicked[data] && 'yellowStar'}
        size='100'
        />))
       

  )
}

export default Star;