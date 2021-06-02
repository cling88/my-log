/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect } from 'react'


// redux
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/theme'

// component
import Layout from '../components//Layout'
import Search from '../container/Search'
import HistoryStyle from '../styles/HistoryStyle';
import HistoryContainer from '../container/HistoryContainer';

// const test = [
//     { title: 'apple' },
//     { title: 'apple banana' },
//     { title: 'orange' },
//     { title: 'avocado' },
//     { title: 'tuna' },
// ]

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
            <div className="historyWrap" css={HistoryStyle}>
                <Search/>
                <div className="historyContent">
                    <HistoryContainer/>
                </div>
            </div>
        </Layout>
    )
}

export default History
