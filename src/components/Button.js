import './Button.css';

const Button = ({text, type, clickHandler}) => {
  const btnType = ['positive', 'negative'].includes(type) ? type : "default";
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