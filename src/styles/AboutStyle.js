import {css} from '@emotion/react';

const AboutStyle = css`
    padding-top: 50px;
    .aboutmeList {
        position: relative; 
        top: 100px;
        opacity: 0; 
        padding-left: 5%;
    }
    .imgWrap {
        position: absolute; 
        bottom: 30px; 
        right: 30px; 
        opacity: 0;
        img {
            width: 300px;
        }
    }
`

export default AboutStyle;