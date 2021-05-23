import {css} from '@emotion/react';
import {setColor} from '../assets/style/common'


const MainStyle = type => css`
    position: relative; 
    width: 100%; 
    height: 100%; 
    .textBox {
        position: absolute; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%);
        font-size: 90px;
        font-weight: bold; 
        width: 483px;
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
                    position: relative; 
                    z-index: 3; 
                    font-size: 18px;
                    margin: 0 50px;
                    width: 120px; 
                    height: 120px;
                    letter-spacing: -0.06rem;
                }
            }
        }
    }
    transition: .3s ease-in;
    .activeRound {
        transition: .3s ease-in;
    }
    &.aboutme {
        background: ${setColor('aboutme').subColor};
        .activeRound {
            position: absolute;
            top: -8px; 
            left: 52px; 
            width: 120px; 
            height: 120px; 
            border-radius: 100%; 
            background: ${setColor('aboutme').mainColor}; 
        }
        .navItem:nth-child(1) {
            color: #fff;
        }
        .navItem:nth-child(2) {
            color: ${setColor('aboutme').subColor02}; 
        }
    }
    &.history {
        background: ${setColor('history').subColor};
        .activeRound {
            position: absolute;
            top: -8px; 
            left: 282px; 
            width: 120px; 
            height: 120px; 
            border-radius: 100%; 
            background: ${setColor('history').mainColor}; 
        }
        .navItem:nth-child(1) {
            color: ${setColor('history').subColor02};
        }
        .navItem:nth-child(2) {
            color: #fff;
        }
    }
`

export default MainStyle