/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/theme'

// style
import AboutStyle from '../styles/AboutStyle'

// component
import Layout from '../components//Layout'
import TextBox from '../components/TextBox'

// data
import { aboutmeData } from '../config/aboutMeData'

function About() {
    const dispatch = useDispatch();
    const aboutmeListRef = useRef(null);
    
    const handleInit = () => {
        gsap.to(aboutmeListRef.current, 1, {top: "0", opacity: 1, ease: 'ease-out', delay: 0})
    }

    useEffect(() => {
        dispatch(setTheme('about'))
        handleInit();
    }, [])

    return (
        <Layout>
            <div className="aboutmePageWrap" css={AboutStyle}>
                <ul className="aboutmeList" ref={aboutmeListRef}>
                {
                    aboutmeData.map((data, index) => (
                        <li className="textBoxItem" key={"textBoxItem_" + index}>
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
