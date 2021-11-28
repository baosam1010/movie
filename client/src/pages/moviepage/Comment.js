import classNames from 'classnames';
import { useEffect } from 'react';
import { connect } from 'react-redux';


function Comment(props) {

    const { posts, text, } = props;
    console.log('comment:', posts);

    const showPosts = posts => {
        let html = null;
        if (posts) {
            html = posts.map((item, index) => {
                return (
                    <li
                        className="d-flex  align-items-center text-center mb-3"
                        key={index}
                    >
                        <img className="me-2 d-block" src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt={item.name} />
                        <p className="d-block fw-bold fs-3 me-4 text-yellow">{item.name}:</p>
                        <p className="fs-4 d-block ">{item.textarea}</p>
                    </li>
                )
            })
        }
        return html;
    };
    useEffect(() => {
        
        return () => {
            
        }
    }, [posts, text]);

    return (
        <>
            <div className={classNames(posts.length > 0 ? "d-block" : "d-none", "moviepage-post rounded ")}>
                <ul className="bg-white p-4 rounded">
                    {showPosts(posts)}
                </ul>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.PostReducer
    }
};


export default connect(mapStateToProps, null)(Comment);
