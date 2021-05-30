/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect } from 'react'

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

    const handleTest = () => {
        let keyword = 'apple'; 
        let newList = test.filter(t => t.title === keyword);
        console.log(newList)
        return newList
    }

    useEffect(() => {
        handleTest()
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
