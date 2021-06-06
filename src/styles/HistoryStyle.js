import {css} from '@emotion/react';
import { setColor } from './commonStyle';

const HistoryStyle = css`
`

export const HistoryContainerStyle = css`
    width: calc(100% - 50px);
    margin-left: 50px;
    .yearBlock {
        position: relative; 
        padding-left: 100px;
        border: 1px solid transparent;
        margin-bottom: 30px;
        &:last-of-type {
            .dateBlock {
                &:after {
                    display: none;
                }
            }
        }
        .dateBlock {
            position: absolute; 
            top: 0; 
            left: 0; 
            z-index: 1; 
            width: 100px;
            height: 100%;
            color: ${setColor('history').pointColor};
            &:before {
                content: '';
                width: 15px; 
                height: 15px; 
                background: ${setColor('history').pointColor}; 
                display: inline-block; 
                border-radius: 100%; 
            }
            &:after {
                content: '';
                width: 1px; 
                height: calc(100% + 33px);
                display: inline-block;
                position: absolute; 
                top: 0; 
                left: 7px;
                z-index: 1; 
                background: ${setColor('history').pointColor};
            }
            .date {
                line-height: 1.1;
                vertical-align: top;
                margin-left: 6px;
                font-size: 14px;
                letter-spacing: -0.08em;
            }
        }
        .historyList {
            
        }

        // lib custom
        .menu-item-wrapper {
            margin-right: 10px;
        }
    }
`

export default HistoryStyle