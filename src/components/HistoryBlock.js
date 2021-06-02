/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React from 'react'
import { useSelector } from 'react-redux'

// config 
import { setColor } from '../styles/commonStyle'
// component
import Figment from './Figment'

const HistoryBlock = ({ data }) => {

    const { themeType } = useSelector(({ theme }) => ({
        themeType: theme.themeType
    }))

    return (
        <div className="historyBlock" css={HistoryBlockStyle(themeType)}>
            <div className="historySection">
                <p className="datePrj">2020.3.6</p>
                <h3>{data.title}</h3>
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
    width: 100%;
    max-width: 600px;
    min-height: 100px;
    margin-bottom: 20px;
    padding: 20px;
    background: #fff;
    border-radius: 0 10px 10px 10px;
    border: 1px solid ${setColor(themeType).pointColor02};
    .datePrj {
        font-size: 13px;
        margin-bottom: 5px;
    }
    h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .info {
        display: flex; 
        align-items: center;
        .figment {
            margin-right: 5px;
        }
    }
    
`

export default HistoryBlock
