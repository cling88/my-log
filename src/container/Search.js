/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect, useState } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { setDateList, setList } from '../redux/history'
 
// component
import Tag from '../components/Tag'

// data
import { historyData } from '../config/historyData'

const Search = () => {

    const dispatch = useDispatch();
    const [Order, setOrder] = useState([
        { value: '오래된순', active: false },
        { value: '최신순', active: false },
    ])
    const [Dates, setDates] = useState(null);

    // 정렬 (type === true ? 오름차순 : 내림차순)
    const handleSort = type => {
        let dateList = Object.keys(historyData);
        if(!Dates) setDates(dateList);
        if(type) {
            // 오래된순
            dateList = dateList.sort((a, b) => ( a - b ))
        } else {
            // 최신순
            dateList = dateList.sort((a, b) => ( b - a ))
        }
        setOrder([
            {  value: '오래된순', active: type ? true : false },
            {  value: '최신순', active: !type ? true: false },
        ])

        dispatch(setDateList(dateList));
    }

    // 년도필터
    // const handleFilterDate = date => {
    //     if(date === "all") {
    //         dispatch(setList(historyData))
    //     } else {
    //         let newList = {[date]: historyData[date]};
    //         dispatch(setList(newList))
    //         console.log(newList)
    //     }
    // }

    useEffect(() => {
        handleSort(false)
    }, [])

    return (
        <div className="searchWrap" css={SearchStyle}>
            <div className="row">
                {
                    Order &&
                    Order.map((order, index) => (
                        <Tag
                            key={"order_" + index}
                            tag={order.value}
                            handleFilter={() => handleSort(order.value === "오래된순" ? true: false)}
                            active={order.active}
                        />  
                    ))
                }
            </div>
            {/* <div className="row">
                <Tag
                    tag={'all'}
                    handleFilter={() => handleFilterDate('all')}
                />
                {   
                    Dates &&
                    Dates.map((date, index) => (
                        <Tag
                            key={date + index}
                            tag={date}
                            handleFilter={() => handleFilterDate(date)}
                        />
                    ))
                }
            </div> */}
        </div>
    )
}

const SearchStyle = css`
    padding: 50px; 
    .row {
        margin-bottom: 30px;
        .tag {
        }

    }
`

export default Search


