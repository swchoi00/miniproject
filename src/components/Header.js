import './Header.css';
import 로고 from '../img/로고.png'

// title : 상단에 표시될 로고를 사용하기 위함

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <div className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_title">{title}</div>
      <div className="header_right">{rightChild}</div>
    </div>
  );
}

export default Header;