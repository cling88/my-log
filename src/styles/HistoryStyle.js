import {css} from '@emotion/react';

const HistoryStyle = css`
    border: 1px solid red;
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
            &:before {
                content: '';
                width: 15px; 
                height: 15px; 
                background: black; 
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
                background: black;
            }
            
            .date {
                line-height: 1.3;
                vertical-align: top;
                margin-left: 6px;
                font-size: 12px;
            }
        }
    }
`

export default HistoryStyle