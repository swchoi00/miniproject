import { useEffect, useState } from 'react';
import { ImStarFull } from "react-icons/im";
import './Star.css';


const Star = () => {

  const count = [0, 1, 2, 3, 4]
  const [clicked, setClicked] = useState([false, false, false, false, false]) 

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
    clickStates[i] = i <= index ? true : false;
    }
  setClicked(clickStates);
  };

  // useEffect(() => {
  //   sendReview();
  // }, [clicked])



return (
  count.map((data) => (
    <ImStarFull key={data} onClick={() => handleStarClick(data)}
      className= { clicked[data] && 'yellowStar' }
      size= '100'
  />))
  
  )
}

export default Star;