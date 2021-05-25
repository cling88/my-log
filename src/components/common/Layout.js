/** @jsxImportSource @emotion/react */

// component
import Nav from './Nav'
const Layout = ({ props }) => {
    return (
        <div className="wrap">
            <div className="header">
                <Nav/>
            </div>
            <div className="containerWrap">
                { props }
            </div>
        </div>
    )
}

export default Layout
