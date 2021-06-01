import React, { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { setKeyword } from '../redux/history'
 
// component
import Tag from '../components/Tag'

import { dateList, langList } from '../config/historyData'

const Search = () => {

    const dispatch = useDispatch();
    const { keyword } = useSelector(({history}) => ({
        keyword: history.keyword
    }))


    // 검색키워드
    const handleSetKeyword = value => {
        let newList = [];

        if(value === 'all') {
            newList = dateList.map(d => d.value)
        } else {
            if(keyword) {
                if(keyword.includes(value)) {
                    // 검색어 있으면 삭제
                    newList = keyword.filter(key => key !== value)
                } else {
                    // 검색어 없으면 추가
                    newList = [
                        ...keyword,
                        value
                    ]
                }
            } else {
                // first keyword
                newList = [value];
            }
        }

        
        
        dispatch(setKeyword(newList))

        console.log('newList: ', newList)
    }


    useEffect(() => {
        keyword && console.log("keyword: ", keyword)
    }, [keyword])

    return (
        <div>
            <div className="row">
                {
                    dateList.map(item => (
                        <Tag
                            key={item.id}
                            tag={item.value}
                            handleFilter={() => handleSetKeyword(item.value)}
                        />
                    ))
                }
            {/* 
            
                let keyList = Object.keys(tmpData);
                tmpData[cate].map((item,j) => {
           
            */}
            </div>
        </div>
    )
}

export default Search
