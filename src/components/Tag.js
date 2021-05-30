/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

import React from 'react'

const Tag = ({ tag, handleFilter }) => {
    return (
        <button 
            onClick={e => handleFilter(e, tag)}
            css={TagStyle}
        >#{ tag }</button>
    )
}

const TagStyle = css`
    margin-right: 15px;
    border: 1px solid red; 
    color: inherit;
`

export default Tag
