/** @jsxImportSource @emotion/react */
import { useRef, useEffect } from 'react'

// style
import MainStyle from '../styles/MainStyle'
// lib
import { gsap } from 'gsap'
import { Link } from 'react-router-dom';

function Main() {

    const textBoxRef = useRef(null);
    const topWordRef = useRef(null);
    const bottomWordRef = useRef(null);

    const handleInit = () => {
        gsap.fromTo(textBoxRef.current, 3, {opacity: 0}, {opacity: 1, ease: 'ease-out'})
        gsap.to(topWordRef.current, 1.5, {top: "-50px", opacity: 0, ease: 'ease-out', delay: 1})
        gsap.to(bottomWordRef.current, 1.5, {bottom: "-50px", opacity: 0, ease: 'ease-out', delay: 1})
    }

    useEffect(() => {
        handleInit();
    }, [])

    return (
        <div css={MainStyle}>
            <div className="textBox" ref={textBoxRef}>
                <p className="text topWord" ref={topWordRef}>Ouroboros</p>
                <p className="text bottomWord" ref={bottomWordRef}>Ouroboros</p>
                <ul className="navList">
                    <li className="navItem"><Link to="/about">aaaaaaaa</Link></li>
                    <li className="navItem"><Link to="/history">bbbbbbbbb</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Main
