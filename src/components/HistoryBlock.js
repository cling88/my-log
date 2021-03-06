/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

import { useState } from 'react'
import { useSelector } from 'react-redux'
// config 
import { setColor } from '../styles/commonStyle'
import Definition from './Definition';
// component
import Figment from './Figment'

const HistoryBlock = ({ data }) => {

    const [Active, setActive] = useState(false);
    const { themeType } = useSelector(({ theme }) => ({
        themeType: theme.themeType
    }));

    return (
        <div 
            className='historyBlock'
            css={HistoryBlockStyle(themeType)}
            onClick={() => setActive(!Active)}
        >
            <div className="historySection">
                <div className="header">
                    <p className="datePrj">{ data.terminate }</p>
                    <h3>{data.title}</h3>
                </div>
                <div className="explain">
                    { data.content() }
                </div>
                <div className="info">
                    <div className="infoDevice">
                        {
                            data.type && data.type.map((t, i) => <Figment key={'figType1_' + i} type="device" text={t} />)
                        }
                    </div>
                    <div className="infoSkills">
                        {
                            data.skills && 
                            data.skills.map((s, i) => (
                                <Figment key={'figType2_' + i} type="skills" text={s} />
                            ))
                        }
                    </div>
                </div>
                <button className="btnMore">MORE</button>
            </div>
            <div className={Active ? 'historyMore active': 'historyMore '}>
                <div className="historyMoreLayer"></div>
                <div className="historyMoreInner">
                    <div className="moreContent">
                        { data.detail() }
                    </div>
                    <div className="moreEtc">
                        {
                            data.url &&
                            <Definition
                                dt={"URL: "}
                                dd={(<a href={data.url} rel="noreferrer" target="_blank">{data.title} ????????????</a>)}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const HistoryBlockStyle = themeType => css`
    position: relative;
    width: 355px;
    height: calc(100% - 10px);
    float: left;
    margin-right: 15px;
    cursor: pointer;
    padding: 15px;
    background: #fff;
    border-radius: 0 10px 10px 10px;
    border: 1px solid ${setColor(themeType).pointColor02};
    overflow: hidden;
    .historySection {
        position: relative; 
        border: 1px solid transparent; 
        height: 100%;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        .datePrj {
            font-size: 13px;
            margin-bottom: 10px;
            opacity: 0.4;
        }
        h3 {
            font-size: 29px;
            margin-bottom: 20px;
            letter-spacing: -0.07em;
        }
        .explain {
            flex: 1;
            white-space: normal;
            font-size: 13px;
            color: #888;
            line-height: 1.2;
        }
        .info {
            width: 100%; 
            overflow: hidden;
            .infoDevice {
                // width: 100%; 
                // overflow: hidden;
            }
            .figment {
                float: left;
                margin-right: 4px;
                margin-bottom: 4px;
                font-size: 16px;
            } 
            
        }
        .content {
            font-size: 17px;
            line-height: 1.3;
        }
        .btnMore {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 14px;
            font-family: inherit;
            text-decoration: underline;
            border: 0 none;
            outline: 0 none;
            background: transparent;
            opacity: 0.6;
        }
    }
    .historyMore {
        position: absolute; 
        top: 0;
        right: -100%; 
        z-index: 3; 
        width: 100%;
        height: 100%; 
        display: flex; 
        justify-content: flex-end;
        transition: .2s ease-in;
        // display: none;
        &.active {
            right: 0;
        }
        .historyMoreLayer {
            position: absolute; 
            top: 0; 
            left: 0; 
            z-index: 1; 
            width: 100%;
            height: 100%; 
        }
        .historyMoreInner {
            position: relative;
            z-index: 3;
            background: rgba(40, 40, 203, .95);
            width: 80%;
            display: flex; 
            flex-direction: column;
            justify-content: space-between; 
            height: 100%; 
            padding: 30px 15px; 
            color: #fff;
            .moreContent {
                word-break: keep-all;
                .workList {
                    border-bottom: 1px solid #eee;
                    padding-bottom: 10px; 
                    margin-bottom: 10px;
                    li {
                        margin-bottom: 5px;
                    }
                }
                .content {
                    line-height: 1.3;
                    max-height: 100px;
                    overflow: hidden;
                    overflow-y: auto;
                }
            }
            a {
                text-decoration: underline; 
                color: #ffd400; 
                opacity: 1; 
            }
        }
    }
`

export default HistoryBlock
