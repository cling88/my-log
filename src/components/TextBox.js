/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { setColor } from '../styles/commonStyle'

const TextBox = ({ title, content }) => {

    return (
        <div className="textBoxWrap" css={TextBoxStyle}>
            <div className="textBoxTitle">{ title }</div>
            <div className="textBoxCont">
                { content() }
            </div>
        </div>
    )
}

const TextBoxStyle = css`
    display: flex;
    width: 96%;
    margin-left: 2%; 
    padding: 50px 0;
    color: #333;
    border-bottom: 1px solid ${setColor('about').pointColor};
    &:last-of-type {
        border-bottom: 0 none;
    }
    .textBoxTitle {
        width: 28%;
        padding: 50px 50px 0 50px;
        text-align: center;
        font-size: 25px;
        letter-spacing: -0.04em;
        color: ${setColor('about').pointColor02};
    }
    .textBoxCont {
        line-height: 1.4;
    }
    
`

export default TextBox
