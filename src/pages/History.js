/** @jsxImportSource @emotion/react */
import { useEffect } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { setTheme } from '../redux/theme'

// component
import Layout from '../components//Layout'
import Search from '../container/Search'
import HistoryStyle from '../styles/HistoryStyle';
import HistoryContainer from '../container/HistoryContainer';


const History = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTheme('history'))
    }, [dispatch])

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
