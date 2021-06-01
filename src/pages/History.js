/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/theme'

// component
import Layout from '../components//Layout'
import Search from '../container/Search'

const test = [
    { title: 'apple' },
    { title: 'apple banana' },
    { title: 'orange' },
    { title: 'avocado' },
    { title: 'tuna' },
]

const History = () => {

    const dispatch = useDispatch();
    
    // const handleTest = () => {
    //     let keyword = 'apple'; 
    //     let newList = test.filter(t => t.title === keyword);
    //     console.log(newList)
    //     return newList
    // }

    useEffect(() => {
        dispatch(setTheme('history'))
        // handleTest()
    }, [])



    return (
        <Layout>
            <div className="historyWrap">
                <Search/>
                <div className="historyContent">
                historyContent
                </div>
            </div>
        </Layout>
    )
}

export default History
