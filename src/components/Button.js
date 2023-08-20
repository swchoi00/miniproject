import './Button.css';

// 텍스트, 버튼타입, 클릭이벤트를 받음
// positive (등록하기 버튼), negative (취소하기 버튼), write_button (글 작성 버튼)
// type이 존재한다면 type 적용 아니라면 default 값 

const Button = ({text, type, clickHandler}) => {
  const btnType = ['positive', 'negative', 'write_button'].includes(type) ? type : "default";
  return (
    <button className={`Button Button_${btnType}`} onClick={clickHandler}>
      {text}
    </button>
    
  )
  
}
Button.defaultProps = { 
  type : 'default'
}

export default Button;