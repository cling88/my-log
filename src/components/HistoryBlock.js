/* eslint-disable react/jsx-no-target-blank */
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// config 
import { setColor } from '../styles/commonStyle'
import Definition from './Definition';
// component
import Figment from './Figment'

const HistoryBlock = ({ data, mouseOverHandle }) => {

    const [Active, setActive] = useState(false);

    const { themeType } = useSelector(({ theme }) => ({
        themeType: theme.themeType
    }));

    const handleMouseOver = e => {
        const wrap = document.querySelector('.containerWrap');
        wrap.style.overflowY  = 'hidden';
    }

    const handleMouseLeave = () => {
        const wrap = document.querySelector('.containerWrap');
        wrap.style.overflowY  = 'auto';
    }
    
    useEffect(() => {
        console.log("data: ", data)
    }, []);



    return (
        <div 
            className='historyBlock'
            css={HistoryBlockStyle(themeType)}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
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
                            data.skills && data.skills.map((s, i) => <Figment key={'figType2_' + i} type="skills" text={s} />)
                        }
                    </div>
                </div>
                <button className="btnMore">MORE</button>
            </div>
            <div className={Active ? 'historyMore active': 'historyMore'}>
                <div className="historyMoreInner">
                    <div className="moreContent">
                        { data.detail() }
                    </div>
                    <div className="moreEtc">
                        {
                            data.url &&
                            <Definition
                                dt={"URL: "}
                                dd={(<a href={data.url} target="_blank">{data.title} 바로가기</a>)}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const HistoryBlockStyle = themeType => css`
    // width: 600px;
    cursor: pointer;
    height: 200px;
    margin-right: 15px;
    padding: 15px;
    background: #fff;
    border-radius: 0 10px 10px 10px;
    border: 1px solid ${setColor(themeType).pointColor02};
    display: flex; 
    flex-wrap: wrap;
    overflow: hidden;
    .historySection {
        position: relative; 
        width: 300px;
        border: 1px solid transparent; 
        min-height: 140px;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        .datePrj {
            font-size: 12px;
            margin-bottom: 7px;
            opacity: 0.4;
        }
        h3 {
            font-size: 18px;
            margin-bottom: 10px;
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
            .figment {
                float: left;
                margin-right: 4px;
                margin-bottom: 4px;
            }
        }
        .btnMore {
            position: absolute; 
            top: 0; 
            right: 0; 
            font-size: 12px; 
            font-family: 'GODO M';
            text-decoration: underline; 
            border: 0 none; 
            outline: 0 none; 
            background: transparent;
        }
    }
    .historyMore {
        position: relative; 
        height: 100%; 
        white-space: normal;
        line-height: 1.3;
        font-size: 14px;
        overflow: hidden; 
        width: 0;
        transition: .2s ease-in; 
        &.active {
            width: 280px;
        }
        .moreEtc {
            font-size: 14px;
            
        }
        .historyMoreInner {
            width: 280px;
            display: flex; 
            flex-direction: column;
            justify-content: space-between; 
            position: absolute; 
            top: 0; 
            right: 0;
            z-index: 1;  
            width: 100%; 
            height: 100%; 
            padding: 0 15px; 
            .moreContent {
                word-break: keep-all;
                .workList {
                    border-bottom: 1px solid #eee;
                    padding-bottom: 10px; 
                    margin-bottom: 10px;
                }
            }
            a {
                text-decoration: underline; 
                color: ${setColor(themeType).pointColor}; 
                opacity: 0.7;
                transition: .1s; 
                &:hover {
                    opacity: 1; 
                }
            }
        }
    }
    
`

export default HistoryBlock
