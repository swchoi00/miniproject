import { useEffect, useState } from "react";
import Write from "./Write";
import { useNavigate, useParams } from "react-router-dom";
// import Button from "../components/Button";
import Header from "../components/Header";
import './Write.css';
import 로고 from '../img/로고.png';
import Star from "../pages/Star"
import MapContainer from "./MapContainer";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { DataObject } from "@mui/icons-material";
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';

const ariaLabel = { 'aria-label': 'description' };

const Editor = ({ data, setData }) => {
  const navigate = useNavigate();

  const { selectedId } = useParams();
  const selectedStore = data.find(item => item.id === parseInt(selectedId));
  const IndexNum = data.indexOf(selectedStore)
  
  
  const [state, setState] = useState();
  const [info, setInfo] = useState({
    id : '',
    name :'',
    location : '',
    file : null,
    review : '',
    star : '',
  })
  
  console.log(info)
  
  useEffect(() => {
    setState(selectedStore);
  }, []);


  // 카카오맵 위치설정
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  // const onChange = (e) => {
  //   setInputText(e.target.value);
  //   setState({ ...state, location: e.target.value })

  // }

  const goBack = () => {
    if(window.confirm('취소하시겠습니까?'))
    navigate(-1);
  }


  const onRemove = () => {
    let copy_ = data
    if(window.confirm('정말로 삭제하시겠습니까?'))
    copy_.splice(IndexNum, IndexNum+1)
    setState(copy_);
    navigate('/')
  }

  // 위치 검색 버튼을 눌렀을 때 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");

  }

  // 이름 변경하기
  const handleNameChange = (e) => {
    setState((prevState => ({
      ...prevState,
      name: e.target.value,
    })))
  };

  // 위치 변경하기
  const handleLocationChange = (e) => {
    setInputText(e.target.value)
    setState((prevState => ({
      ...prevState,
      location : e.target.value,
    })))
  }

  const handleReviewChange = (e) => {
    setState((prevState => ({
      ...prevState,
      review : e.target.value,
    })))
    // (e) => setState({...state, review : e.target.value})
  }


  // 수정하기 버튼 눌렀을 때 실행
  // copy안에 data를 넣어주고 copy[인덱스번호]에 바뀐 값들을 넣어줌
  const editInfoHandler = () => {
    if (window.confirm('정말로 수정하시겠습니까?')) {
      let copy = data
      copy[IndexNum] = state;
      setData(copy);
      alert('수정 완료');
      navigate('/');
    }
  }


  return (
    <>
      <Header title={<img src={로고} style={{ width: '100%', height: '50%' }} alt="로고.png" />} />


      <h2>맛집 이름</h2>

      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
        </Box>
        <Input inputProps={ariaLabel} onChange={handleNameChange} defaultValue={selectedStore.name} />
        {/* <input className="restName" type="text" placeholder="맛집의 이름을 알려주세요" onChange={(e) => setInfo({ ...saveInfo, name: e.target.value })} /> */}
      </div>

      <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <h2>위치</h2>
        <Input placeholder="위치를 입력하세요" inputProps={ariaLabel} onChange={handleLocationChange} defaultValue={selectedStore.location} />
        <Button variant="container" style={{background : 'salmon', color : 'white' ,width : '50px', height : '30px'}}>검색</Button>
      </form>
      <br />
      <MapContainer searchPlace={place} />
      </div>

      <div>
        <h2>사진 첨부</h2>
        <input type="file" onChange={(e) => setState({...state, file : e.target.value})} />
      </div>

      <div>
        <h2>메모 작성</h2>
        <textarea className="reviewArea" defaultValue={selectedStore.review} onChange={handleReviewChange}></textarea>
      </div>

      <br />
      <br />

      <div className="Rate">
        <Star info={info} setInfo={setState}/>
      </div>

      <br />
      <br />

      <div>
      <Stack direction="row" spacing={16}>
          <Button variant="contained" style={{backgroundColor : 'salmon', fontSize : '15px'}} onClick={goBack} startIcon={<DeleteIcon style={{color:'white'}}/>}>
            취소하기
          </Button>
          <Button variant="contained" style={{backgroundColor : 'red', fontSize : '15px'}} onClick={onRemove} >
            삭제하기
          </Button>
          <Button variant="contained" style={{ backgroundColor: 'orange', fontSize: '15px' }} onClick={editInfoHandler} endIcon={<SendIcon style={{color:'white'}} />}>
            수정하기
          </Button>
          </Stack>
      </div>
    
      <br />

    
    
    
    </>
  )
}

export default Editor;