import {css} from '@emotion/react';
import {setColor} from '../styles/commonStyle'


const MainStyle = type => css`
    position: relative; 
    width: 100%; 
    height: 100%; 
    background: ${setColor(type).bgColor};
    .textBox {
        position: absolute; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%);
        font-size: 120px;
        font-weight: bold; 
        width: 650px;
        height: 106px;
        opacity: 0;
        .text {
            position: absolute; 
            height: 53px;
            overflow: hidden;
            &.topWord {
                top: 0; 
                line-height: 0;
                display: flex;
                align-items: flex-end;
            }
            &.bottomWord {
                bottom: 0; 
                line-height: 0; 
                display: flex;
                align-items: flex-start;
            }
        }
        .navWrap {
            position: relative;
            width: 100%;
            display: none;
            opacity: 0;
            .navList {
                width: 100%; 
                display: flex;
                align-items: center;
                justify-content: center;
                width: inherit;
                height: 106px;
                .navItem {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative; 
                    z-index: 3; 
                    font-size: 30px;
                    margin: 0 50px;
                    width: 180px; 
                    height: 120px;
                    letter-spacing: -0.06rem;
                }
            }
        }
    }
    transition: .3s ease-in;
    .activeRound {
        position: absolute;
        top: -61px;
        transition: .3s ease-in;
        width: 220px;
        height: 220px;
        border-radius: 100%; 
        opacity: 0;
        background: ${setColor(type).pointColor}; 
    }
    &.about {
        .activeRound {
            left: 74px; 
            opacity: 1;
        }
        .navItem:nth-of-type(1) {
            color: #fff;
        }
        .navItem:nth-of-type(2) {
            color: ${setColor(type).pointColor02}; 
        }
    }
    &.history {
        .activeRound {
            left: 354px; 
            opacity: 1;
        }
        .navItem:nth-of-type(1) {
            color: ${setColor(type).pointColor02};
        }
        .navItem:nth-of-type(2) {
            color: #fff;
        }
    }
    .footer {
        position: absolute; 
        left: 50%; 
        bottom: 100px; 
        text-align: center;
        transform: translateX(-50%);
        color: ${setColor(type).pointColor02};
    }
`


export default MainStyle