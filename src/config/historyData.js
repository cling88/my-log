
import Definition from '../components/Definition'

export const dateList = [
    {id: 'dateList_0', value: 'all'},
    {id: 'dateList_1', value: '2017'},
    {id: 'dateList_2', value: '2018'},
    {id: 'dateList_3', value: '2019'},
    {id: 'dateList_4', value: '2020'},
    {id: 'dateList_5', value: '2021'}
]

export const langList = [
    {id: 'langList_1', value: 'html&css'},
    {id: 'langList_2', value: 'javascript'},
    {id: 'langList_3', value: 'react'},
]

export const historyData = {
    2015: [
        {
            id: '2015_1',
            terminate: '2015 ~ 2018',
            title: 'FRISM',
            url: null,
            type: [
                'pc',
                'mobile'
            ],
            skills: [
                'html', 'css', 'jquery'
            ],
            content: () => (
                <div className="content">
                    <p>쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul>
                        <li><Definition dt="관여율: " dd="퍼블리싱 100%" /></li>
                        <li><Definition dt="관리자 사이트: " dd="PC" /></li>
                        <li><Definition dt="사용자 사이트: " dd="webapp, 반응형" /></li>
                    </ul>
                    <hr className="border" />
                    <p>사내 자체 서비스로 3년간 지속적으로 기능 확장을 함에 따라 퍼블리싱을 진행하였습니다.</p>
                    <p>아쉽게도 지금은 서비스가 종료되었습니다.</p>
                </div>
            )
        },
        {
            id: '2015_2',
            terminate: '2015.07 ~ 2015.09',
            title: '서울시체육회 블로그',
            url: null,
            type: [
                'pc',
                'mobile'
            ],
            skills: [
                'html', 'css', 'jquery'
            ],
            content: () => (
                <div className="content">
                    <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
                </div>
            ),
            detail: () => (
                <div>
                    <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
                    <p>관리자 사이트, 사용자 웹앱 등을 늘어나는 기능에 맞춰 퍼블리싱을 하였습니다.</p>
                </div>
            )
        },
    ],
}

