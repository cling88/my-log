/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { setColor } from '../styles/commonStyle'


const Tag = ({ tag, handleFilter, active }) => {
    return (
        <button 
            className={active ? "tag active" : "tag"}
            onClick={e => handleFilter(e, tag)}
            css={TagStyle}
        >#{ tag }</button>
    )
}

const TagStyle = () => css`
    margin-right: 15px;
    background: transparent;
    border: 0 none;
    outline: 0 none;
    color: ${setColor('history').pointColor02};
    &.active {
        color: #7b6127;
    }
    &:hover {
        color: #7b6127;
    }
`
export default Tag
