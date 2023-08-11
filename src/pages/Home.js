import React from "react"
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Write from "./Write";


const Home = ( {history} ) => {
const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goWrite = () => {
        navigate('/Write');
    }

    return (
        <div style={{backgroundImage:'/도시락.png'}}>

            <Header title={'맛집리스트'} 
            leftChild={<Button text={'뒤로가기'} clickHandler={goBack} /> }
            rightChild={<Button text={'글 작성'} clickHandler={goWrite} />} 
            />
        </div>
    );
}

export default Home;