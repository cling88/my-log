/** @jsxImportSource @emotion/react */
import { useEffect } from 'react'
import { gsap } from 'gsap'

// style
import AboutStyle from '../styles/AboutStyle'

// component
import Layout from '../components//Layout'
import TextBox from '../components/TextBox'

// data
import { aboutmeData } from '../config/aboutMeData'
import { useRef } from 'react/cjs/react.development';

function About() {

    const aboutmeListRef = useRef(null);
    console.log(aboutmeData);
    
    const handleInit = () => {
        gsap.to(aboutmeListRef.current, 1, {top: "0", opacity: 1, ease: 'ease-out', delay: 0})
    }

    useEffect(() => {
        handleInit();
    }, [])

    return (
        <Layout>
            <div className="aboutmePageWrap" css={AboutStyle}>
                <ul className="aboutmeList" ref={aboutmeListRef}>
                {
                    aboutmeData.map((data, index) => (
                        <li className="textBoxItem">
                            <TextBox
                                key={'textBox_' + index}
                                title={data.title}
                                content={data.content}
                            />
                        </li>
                    ))
                }
                </ul>
            </div>
        </Layout>
    )
}

export default About
