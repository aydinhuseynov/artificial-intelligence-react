import '../header/header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <header>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><a href=""></a>Contact</li>
        </ul>
    </header>
    </>
  );
};

export default Header;
