import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import "./css/footer.css";

function Footer() {
    return (
            <Container fluid className="footer">

                <div>
                    <Link to="/">
                        <img src="https://phimchill.tv/dev/images/logo.png" alt="logo" />
                    </Link>
                </div>
                <ul>
                    <li><Link to="/theloai/phimmoi">Phim mới</Link></li>
                    <li><Link to="/theloai/phimmoi">Phim hay</Link></li>
                    <li><Link to="/theloai/phimmoi">Phim chiếu rạp</Link></li>
                    <li><Link to="/theloai/phimmoi">Phim hành động</Link></li>
                    <li><Link to="/theloai/phimmoi">Phim lẻ</Link></li>
                    <li><Link to="/theloai/phimmoi">Phim bộ</Link></li>
                </ul>
            </Container>
    )
}

export default Footer






