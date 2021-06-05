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
    width: 96%;
    padding: 50px 0;
    color: #333;
    border-bottom: 1px solid ${setColor('about').pointColor};
    &:last-of-type {
        border-bottom: 0 none;
    }
    .textBoxTitle {
        margin-bottom: 20px;
        font-size: 24px;
        letter-spacing: -0.04em;
        color: ${setColor('about').pointColor02};
    }
    .textBoxCont {
        font-size: 20px;
        line-height: 1.4;
    }
    
`

export default TextBox
