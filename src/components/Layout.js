/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useLocation  } from 'react-router-dom'

// style
import { setColor } from '../styles/commonStyle'
// component
import Nav from './Nav'

const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <div className="wrap" css={LayoutStyle(location.pathname.replace('/', ''))}>
            <div className="header">
                <Nav type={location.pathname.replace('/', '')}/>
            </div>
            <div className="containerWrap scroll">
                { children }
            </div>
        </div>
    )
}

const LayoutStyle = type => css`
    position: relative;
    width: 100%;
    height: 100%; 
    padding-left: 240px;
    background: ${setColor(type).bgColor};
    border: 8px solid ${setColor(type).pointColor};
    border-left: 0;
    .containerWrap{
        width: 100%;
        height: 100%; 
        overflow:auto;
    }
`

export default Layout
