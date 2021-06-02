/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { setColor } from '../styles/commonStyle'


const Tag = ({ tag, handleFilter }) => {

    return (
        <button 
            className="tag"
            onClick={e => handleFilter(e, tag)}
            css={TagStyle}
        >#{ tag }</button>
    )
}

const TagStyle = themeType => {
    return css`
        margin-right: 15px;
        background: transparent;
        border: 0 none;
        outline: 0 none;
        color: ${setColor('history').pointColor02};
    `
}

export default Tag
