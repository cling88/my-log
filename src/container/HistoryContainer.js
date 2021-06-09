/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// data 
import { historyData } from '../config/historyData'
// component
import HistoryBlock from '../components/HistoryBlock'
// style
import { HistoryContainerStyle } from '../styles/HistoryStyle'
// redux 
import { setList } from '../redux/history'

const HistoryContainer = () => {
    const dispatch = useDispatch();
    const { dateList, list } = useSelector(({ history }) => ({
        dateList: history.dateList,
        list: history.list
    }));

    useEffect(() => {
        if(list) {
            console.log("list: ", list)
        } else {
            console.log('no List')
        }
    }, [list, dateList])

    useEffect(() => {
        dispatch(setList(historyData))
    }, [dispatch])


    return (
        <div className="historyContainer" css={HistoryContainerStyle}>
            {
                list ?
                dateList &&
                dateList.map(date => {
                    return <div className="yearBlock" key={date}>
                    <div className="dateBlock"><span className="date">{ date }</span></div>
                        <div className="historyList scrollX">
                            <div className="historyListInner " style={{ height: '100%', width: (list[date].length) * 415 +'px' }}>
                                {
                                    list[date].map(data => (
                                        <HistoryBlock key={data.id} data={data} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }) : <div>Loading</div>
            } 
        </div>
    )
}

export const HistoryBlockList = list => {
    if(list !== undefined) {
        list.map(data => {
            return <HistoryBlock key={data.id} data={data}  />
        })
    }
    
}

export default HistoryContainer
