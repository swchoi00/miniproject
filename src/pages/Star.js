import { useEffect, useState } from 'react';
import { ImStarFull } from "react-icons/im";
import './Star.css';


const Star = ({data, setData, saveInfo, setInfo}) => {

  const count = [0, 1, 2, 3, 4]
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

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    
    
    // setInfo(prevInfo => ({
    //   ...prevInfo,
    //   star : score,
  
    // }))

    setInfo((prevInfo => ({
      ...prevInfo,
      star : score,
  
    })))
    

    
  // const handleReviewChange = (e) => {
  //   setState((prevState => ({
  //     ...prevState,
  //     review : e.target.value,
  //   })))
  //   // (e) => setState({...state, review : e.target.value})



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