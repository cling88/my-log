/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { Link } from 'react-router-dom'

import { navList } from '../config/navList'
import { setColor } from '../styles/commonStyle'

const Nav = ({type}) => {
    return (
        <div className="navWrap" css={NavStyle(type)}>
            <ul className="navList">
                {
                    navList.map(nav => (
                        <li className={nav.id === type ? "navItem active": "navItem"} key={nav.id}>
                            <Link to={nav.url}>{nav.value}</Link>
                        </li>
                    ))
                }
                <li className="navBlog">
                    <a href="https://wazacs.tistory.com/" rel="noreferrer" target="_blank">BLOG</a>
                </li>
            </ul>
        </div>
    )
}

const NavStyle = type => css`
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 240px; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    background: ${setColor(type).pointColor};
    .navList {
        display: flex; 
        flex-direction: column;
        text-align: center;
        .navItem {
            margin-bottom: 25px;
            color: #fff;
            display: inline-block;
            &.active {
                a {
                    &:after {
                        width: 100%;
                    }
                }
            }
            a {
                position: relative;
                display: inlie-block; 
                &:hover {
                    &:after {
                        width: 100%;
                    }
                }
                &:after {
                    content: '';
                    display: inline-block; 
                    position: absolute; 
                    bottom: -7px;
                    left: 0;
                    z-index: 1;
                    background: ${setColor(type).pointColor03};
                    width: 0;
                    height: 10px;
                    opacity: 0.5;
                    transition: .2s ease-in;
                }
            }
        }
        .navBlog {
            a {
                display: flex;
                justify-content: center; 
                align-items: center; 
                width: 60px; 
                height: 60px;
                background: ${setColor(type).bgColor};
                color: ${setColor(type).pointColor};
                border-radius: 100%; 
                margin: 0 auto;
                font-size: 16px;
                font-weight: bold;
                transition: .2s ease-in; 
                &:hover {
                    background: ${setColor(type).pointColor02};
                }
            }
        }
    }
`

export default Nav
