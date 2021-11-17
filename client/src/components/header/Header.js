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
                            <Link to="/category/phimmoi">Phim mới</Link>
                        </li>
                        <li>
                            <Link to="/category/phimhay">Phim hay</Link>
                        </li>
                        <li>
                            <Link to="/category/phimchieurap">Phim chiếu rạp</Link>
                        </li>
                        <li>
                            <Link to="/category/phimhanhdong">Phim hành động</Link>
                        </li>
                        <li>
                            Phim bộ
                            <ul className="submenu">
                                <li>
                                    <Link to="/category/hanquoc">Hàn Quốc</Link>
                                </li>
                                <li>
                                    <Link to="/category/trungquoc">Trung Quốc</Link>
                                </li>
                                <li>
                                    <Link to="/category/my">Mỹ</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Phim lẻ
                            <ul className="submenu">
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
                            </ul>
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
