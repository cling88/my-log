/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React, { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { setKeyword } from '../redux/history'
 
// component
import Tag from '../components/Tag'

// data
import { dateList, langList, historyData } from '../config/historyData'

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
    }

    const handleSetData = () => {

    }

    useEffect(() => {
        handleSetData();
        keyword && console.log("keyword: ", keyword)
    }, [keyword])

    return (
        <div className="searchWrap" css={SearchStyle}>
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
            <div className="row">
                {
                    langList.map(item => (
                        <Tag
                            key={item.id}
                            tag={item.value}
                            handleFilter={() => handleSetKeyword(item.value)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

const SearchStyle = css`
    padding: 50px; 
    .row {
        border: 1px solid red;
        margin-bottom: 30px;
        .tag {
        }

    }
`

export default Search
