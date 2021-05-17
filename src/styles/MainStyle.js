import {css} from '@emotion/react';

const MainStyle = css`
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
        width: 433px;
        height: 106px;
        opacity: 0;
        .text {
            position: absolute; 
            height: 53px;
            overflow: hidden;
            &.topWord {
                top: 0; 
                line-height: 1.2;
            }
            &.bottomWord {
                bottom: 0; 
                line-height: 0; 
            }
        }
        .navList {
            width: 100%; 
            display: flex: 
            border: 1px solid red; 
            .navItem {
                font-size: 15px;
                
            }
        }
    }
`

export default MainStyle