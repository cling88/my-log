/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

import { setColor } from '../styles/commonStyle'
import { useSelector } from 'react-redux'



const Tag = ({ tag, handleFilter }) => {
    
    const { themeType } = useSelector(({ history }) => ({
        themeType: history.themeType
    }))

    

    return (
        <button 
            onClick={e => handleFilter(e, tag)}
            css={() => TagStyle(themeType)}
        >#{ tag }</button>
    )
}

const TagStyle = themeType => {

    console.log("TagStyle", themeType)

    return css`
        margin-right: 15px;
        background: transparent;
        border: 0 none;
        outline: 0 none;
        color: ${setColor(themeType).pointColor03};
    `
}

export default Tag
