import React from "react"
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Write from "./Write";
import 도시락 from '../img/도시락.png'
import './Home.css';
import List from "./List";

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

            <Header title={<img src={도시락} style={{width:'100%', height:'50%'}} alt="도시락.png"></img>}
            />
            <Button className='write_text' text={'글 작성'} clickHandler={goWrite} />
            {/* <Write.Rate.se/> */}
            
            <div>
            <List />
            </div>
            
         
        
            
        </div>
    );
}

export default Home;