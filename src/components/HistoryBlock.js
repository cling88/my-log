/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

// config 
import { setColor } from '../styles/commonStyle'
// component
import Figment from './Figment'

const HistoryBlock = ({ data, mouseOverHandle }) => {

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
    

    return (
        <div 
            className="historyBlock" 
            css={HistoryBlockStyle(themeType)}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <div className="historySection">
                <div className="header">
                    <p className="datePrj">2020.3.6</p>
                    <h3>{data.title}</h3>
                </div>
                <div className="info">
                    <div className="infoDevice">
                        {
                            data.type.map(t => <Figment type="device" text={t} />)
                        }
                    </div>
                    <div className="infoSkills">
                        {
                            data.skills.map(s => <Figment type="skills" text={s} />)
                        }
                        <Figment type="skills" text="React" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

const HistoryBlockStyle = themeType => css`
    width: 300px;
    max-width: 600px;
    
    margin-right: 15px;
    padding: 20px;
    background: #fff;
    border-radius: 0 10px 10px 10px;
    border: 1px solid ${setColor(themeType).pointColor02};
    overflow: hidden;
    .historySection {
        min-height: 140px;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        .datePrj {
            font-size: 13px;
            margin-bottom: 5px;
        }
        h3 {
            font-size: 18px;
            margin-bottom: 10px;
        }
        .info {
            width: 100%; 
            overflow: hidden;
            .figment {
                float: left;
                margin-right: 5px;
                margin-bottom: 5px;
            }
        }
    }
    
    
`

export default HistoryBlock
