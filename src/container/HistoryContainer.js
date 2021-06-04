/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react'


// data 
import { historyData } from '../config/historyData'
// component
import HistoryBlock from '../components/HistoryBlock'
// style
import { HistoryContainerStyle } from '../styles/HistoryStyle'

import ScrollMenu from 'react-horizontal-scrolling-menu'


const HistoryContainer = () => {

    const [DataList, setDataList] = useState(null);
    const [DateList, setDateList] = useState(null);
    

    

    // 날짜별 오름차순/내림차순
    const handleSetOrder = status => {
        // let list; 
        // if(status) {
        //     // 오름차순
        //     list = [...historyData].sort((a, b) => a.date - b.date);
        // } else {
        //     // 내림차순
        //     list = [...historyData].sort((a, b) => a.date - b.date).reverse();
        // }
        // setDataList(list);
    }

    // Data 날짜별 목록
    const handleSetData = dateList => {
        if(dateList) HistoryBlockList(historyData[dateList])
    }

    // 날짜 배열에 설정 
    const handleSetDate = () => {
        let dateList = [];
        let newList = []; 
        dateList = Object.keys(historyData);
        newList = dateList.filter((item, index, self) => {
            return self.indexOf(item) === index;
        })
        setDateList(newList);
        handleSetData(newList);
    }

    useEffect(() => {
        // setDataList(historyData);
        // handleSetOrder();
        handleSetDate();
    }, [])


    return (
        <div className="historyContainer" css={HistoryContainerStyle}>
            {/* <button onClick={() => handleSetOrder(true)}>order1</button>
            <button onClick={() => handleSetOrder(false)}>order2</button> */}
            {
                DateList &&
                DateList.map(date => (
                    <div className="yearBlock" key={date}>
                       <div className="dateBlock"><span className="date">{ date }</span></div>
                       <div className="historyList">
                            <ScrollMenu 
                                data={historyData[date].map(data => (
                                    <HistoryBlock key={data.id} data={data} />
                                ))}
                                wheel={true}
                                alignCenter={false}
                            />
                       </div>
                   </div>
                ))
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
