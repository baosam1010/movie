import { Link } from 'react-router-dom';
import './css/header.css';
import Container from 'react-bootstrap/Container';
// import { useState } from 'react';
import { FastField, Formik, Form } from 'formik';
import { connect } from 'react-redux';
import { addSearch } from '../../actions/Search';


function Header(props) {

    // const [search, setSearch] = useState('')
    const {onSearch} = props;

    return (
        <Container fluid className="wrapper" >
            <div className="wrapper-nav">
                <div className="wrapper-nav-logo">
                    <Link to="/">
                        <img src="https://phimchill.tv/dev/images/logo.png" alt="logo" />
                    </Link>
                </div>
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
                    </li>
                </ul>
                <div className="">
                    <Link to="/login">Login</Link>
                    <span>/</span>
                    <Link to="/register">Register</Link>
                </div>
            </div>
            <div className="search">
                <Formik
                    initialValues={{ search: '', }}

                    onSubmit={(values)=>{
                        console.log(values);
                        if(values){
                            onSearch(values)   
                        }
                    }}
                >
                    {props => (
                        <Form>
                            <FastField type="text" name='search' value={props.values.search} placeholder="Bạn muốn tìm gì..." />
                            {/* {props.values.search !==''?(<Link to={`/lists/${props.values.search.trim().replace(/ /g, '-')}`}><i className="btn-search fas fa-search"></i></Link>):(
                            <button type="submit"><i className="btn-search fas fa-search"></i></button>
                            )} */}
                            
                            <Link  to={props.values.search.trim() !==''? `/lists/${props.values.search.trim().replace(/ /g, '-')}`:'#'}><i className="btn-search fas fa-search"></i></Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    )
}

const mapDispatchToProps= (dispatch)=>{
    return {
        onSearch:(search)=>{
            dispatch(addSearch(search))
        }
    }
}
export default connect(null, mapDispatchToProps) (Header);
