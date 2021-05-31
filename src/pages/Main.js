/** @jsxImportSource @emotion/react */
import { useRef, useEffect,  } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/theme'
// style
import MainStyle from '../styles/MainStyle'
// lib
import { gsap } from 'gsap'
import { Link } from 'react-router-dom';

function Main() {
    const dispatch = useDispatch();
    const { themeType } = useSelector(({theme}) => ({
        themeType: theme.themeType
    }))

    const textBoxRef = useRef(null);
    const topWordRef = useRef(null);
    const bottomWordRef = useRef(null);
    const navRef = useRef(null);

    const handleInit = () => {
        gsap.fromTo(textBoxRef.current, 3, {opacity: 0}, {opacity: 1, ease: 'ease-out'})
            // gsap.to(topWordRef.current, 1.5, {top: "-50px", opacity: 1, ease: 'ease-out', delay: 1})
            // gsap.to(bottomWordRef.current, 1.5, {bottom: "-50px", opacity: 1, ease: 'ease-out', delay: 1})
        gsap.to(topWordRef.current, 1.5, {top: "-50px", opacity: 0, ease: 'ease-out', delay: 1})
        gsap.to(bottomWordRef.current, 1.5, {bottom: "-50px", opacity: 0, ease: 'ease-out', delay: 1})
        gsap.to(navRef.current, 2, {display:'block', opacity: 1, ease: 'ease-in', delay: 2.5})
    }

    const handleMouseOver = type => {
        dispatch(setTheme(type))
    }

    useEffect(() => {
        dispatch(setTheme(null))
        handleInit();
    }, [])
 
    return (
        <div css={() => MainStyle(themeType)} className={themeType ? themeType : ''}>
            <div className="textBox" ref={textBoxRef}>
                <p className="text topWord" ref={topWordRef}><span>FRONTEND</span></p>
                <p className="text bottomWord" ref={bottomWordRef}><span>FRONTEND</span></p>
                <div className="navWrap" ref={navRef}>
                    <div className="activeRound"></div>
                    <ul className="navList">
                        <li className="navItem" onMouseOver={() => handleMouseOver('about')}><Link to="/about">about me</Link></li>
                        <li className="navItem" onMouseOver={() => handleMouseOver('history')}><Link to="/history">work history</Link></li>
                    </ul>
                </div>
            </div>
            <footer className="footer">copyright by cling88</footer>
        </div>
    )
}

export default Main
