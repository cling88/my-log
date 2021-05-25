/** @jsxImportSource @emotion/react */
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { navList } from '../../config/navList'

const Nav = () => {
    let url = useParams();

    useEffect(() => {
        console.log("url is", url)
    }, [])

    return (
        <ul className="navWrap">
            {
                navList.map(nav => (
                    <li className="navItem" key={nav.id}>
                        <Link to={nav.url}>{nav.value}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Nav
