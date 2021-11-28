import './css/loadingItem.css'

function LoadingItem() {
    return (
        <div className="loading position-fixed top-0 end-0 start-0 bottom-0 bg-secondary bg-opacity-75 d-flex justify-content-center align-items-center">
            <div className="loading-wrapper">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default LoadingItem
