/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { navList } from '../config/navList'
import { setColor } from '../styles/commonStyle'


const Nav = ({type}) => {

    useEffect(() => {
        
        console.log(type)
        if(type) console.log(setColor(type))
    }, [])

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
            </ul>
        </div>
    )
}

const NavStyle = type => css`
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 160px; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    background: ${setColor(type).pointColor};
    .navList {
        text-align: center;
        .navItem {
            position: relative;
            margin-bottom: 25px;
            color: #fff;
            display: inline-block;
            &:hover {
                &:after {
                    width: 100%;
                }
            }
            &.active {
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
`

export default Nav
