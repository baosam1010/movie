import { Link } from 'react-router-dom';
import './css/header.css';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
            <Container fluid className="wrapper" >
                <div>
                    <Link to="/">
                        <img src="https://phimchill.tv/dev/images/logo.png" alt="logo" />
                    </Link>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/category/phimbo">Phim Bộ</Link>
                        </li>
                        <li>
                            <Link to="/category/phimle">Phim Lẻ</Link>
                        </li>
                        <li>
                            <Link to="/category/phimchieurap">Phim chiếu rạp</Link>
                        </li>
                        <li>
                            <Link to="/category/phimhoathinh">Phim Hoạt Hình</Link>
                        </li>
                        <li>
                            <Link to="/category/phimhanhdong"> Phim Hành Động</Link>
                            
                        </li>
                        <li>
                            <Link to="/category/phimtinhcam"> Phim Tình Cảm</Link>
                            {/* <ul className="submenu">
                                <li>
                                    <Link to="/category/2015">Năm 2015</Link>
                                </li>
                                <li>
                                    <Link to="/category/2016">Năm 2016</Link>
                                </li>
                                <li>
                                    <Link to="/category/2017">Năm 2017</Link>
                                </li>
                                <li>
                                    <Link to="/category/2018">Năm 2018</Link>
                                </li>
                                <li>
                                    <Link to="/category/2019">Năm 2019</Link>
                                </li>
                                <li>
                                    <Link to="/category/2020">Năm 2020</Link>
                                </li>
                                <li>
                                    <Link to="/category/2021">Năm 2021</Link>
                                </li>
                            </ul> */}
                        </li>
                    </ul>
                    <div>
                        <input type="text" placeholder="Bạn muốn tìm gì..." />
                        <button><i className="btn-search fas fa-search"></i></button>
                    </div>
                </div>
            </Container>
    )
}


export default Header;
