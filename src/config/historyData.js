
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
                    <p>쿠폰, 예약, 게시판을 제공하는 서비스 앱</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul className="workList">
                        <li><Definition dt="관여: " dd="퍼블리싱 100%" /></li>
                        <li><Definition dt="개발: " dd="개발, 운영" /></li>
                    </ul>
                    <p>
                        회사 자체 서비스로써 
                        다양한 기능 기반의 프로젝트로 퍼블리싱 기술을 익히는데에 많은 도움이 되었으며, 
                        함께 기획 하여 사용자단에서 생각하는 능력은 키우는데 많은 도움이 되었던 프로젝트 입니다.
                    </p>
                </div>
            )
        },
        {
            id: '2015_2',
            terminate: '2015.07 ~ 2017',
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
                    <p>서울시체육회 블로그</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul className="workList">
                        <li><Definition dt="관여: " dd="퍼블리싱 100%" /></li>
                        <li><Definition dt="개발: " dd="개발, 운영" /></li>
                    </ul>
                    <p>처음 타 기관과 협업하는데에 많은 도움을 받은 프로젝트입니다.</p>
                </div>
            )
        },
    ],
    2016: [
        {
            id: '2016_1',
            terminate: '2016 ~ 2018',
            title: '마음사랑병원',
            url: null,
            type: [
                'pc',
                'mobile',
            ],
            skills: [
                'html', 'css', 'jquery'
            ],
            content: () => (
                <div className="content">
                    <p>심리 치료 병원 관리자&#38;사용자 사이트</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul className="workList">
                        <li><Definition dt="관여: " dd="퍼블리싱 100%" /></li>
                        <li><Definition dt="개발: " dd="개발, 운영" /></li>
                    </ul>
                    <p>
                        예약시스템을 중심으로한 프로젝트로 달력 활용을 많이 하였습니다.
                    </p>
                </div>
            )
        },
        {
            id: '2016_2',
            terminate: '2016 ~ 2017',
            title: '메이퀸픽쳐스',
            url: null,
            type: [
                '반응형'
            ],
            skills: [
                'html', 'css', 'jquery'
            ],
            content: () => (
                <div className="content">
                    <p>드라마 제작사 사이트</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul className="workList">
                        <li><Definition dt="관여: " dd="퍼블리싱 100%" /></li>
                        <li><Definition dt="개발: " dd="개발, 운영" /></li>
                    </ul>
                    <p>
                        메이퀸픽쳐스 드라마 제작사의 회사 및 드라마 소개 사이트 입니다.
                    </p>
                </div>
            )
        },
    ],
    2017: [
        {
            id: '2017_1',
            terminate: '2017 ~ 2018',
            title: '강남고려병원',
            url: null,
            type: [
                'pc',
                'mobile',
            ],
            skills: [
                'html', 'css', 'jquery'
            ],
            content: () => (
                <div className="content">
                    <p>병원 관리자&#38;사용자 사이트</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul className="workList">
                        <li><Definition dt="관여: " dd="퍼블리싱 100%" /></li>
                        <li><Definition dt="개발: " dd="개발, 운영" /></li>
                    </ul>
                    <p>
                        예약시스템을 중심으로한 프로젝트로 달력 활용을 많이 하였습니다.
                    </p>
                </div>
            )
        },
    ],
    2018: [
        {
            id: '2018_1',
            terminate: '2018.04~2018.05',
            title: '크래프트 로보어드바이저',
            url: null,
            type: [
                'mobile',
            ],
            skills: [
                'html', 'css', 'jquery'
            ],
            content: () => (
                <div className="content">
                    <p>인공지능에 기반한 금융 서비스의 프로토타입</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul className="workList">
                        <li><Definition dt="관여: " dd="퍼블리싱 100%" /></li>
                        <li><Definition dt="개발: " dd="개발" /></li>
                    </ul>
                    <p>
                        프로토타입이지만 인터렉션을 많이 활용하여 개인적으로 재밌게 작업하였습니다.
                    </p>
                </div>
            )
        },
        {
            id: '2018_2',
            terminate: '2018.05~2018.07',
            title: '리마인더',
            url: null,
            type: [
                'pc', 'mobile',
            ],
            skills: [
                'html', 'css', 'jquery'
            ],
            content: () => (
                <div className="content">
                    <p>문자 자동응답 서비스</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul className="workList">
                        <li><Definition dt="관여: " dd="퍼블리싱 100%" /></li>
                        <li><Definition dt="개발: " dd="개발" /></li>
                    </ul>
                    <p>
                        부재중이나 자동응답 메세지 설정을 하는 서비스 입니다.
                    </p>
                </div>
            )
        },
        {
            id: '2018_3',
            terminate: '2018.11~2018.12',
            title: 'Btv',
            url: null,
            type: [
                'pc',
            ],
            skills: [
                'ReactJS', 'git'
            ],
            content: () => (
                <div className="content">
                    <p>SK Btv 3.0</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul className="workList">
                        <li><Definition dt="개발: " dd="유지보수" /></li>
                    </ul>
                    <p>
                        ReactJS를 처음 접하여 일부 유지보수 작업을 하였습니다.
                    </p>
                </div>
            )
        },
    ],
    2019: [
        {
            id: '2019_1',
            terminate: '2019.01~2019.05',
            title: '천재교육',
            url: 'https://mall.chunjae.co.kr/#/main/main',
            type: [
                'pc', 'mobile',
            ],
            skills: [
                'html', 'css', 'jquery', 'svn'
            ],
            content: () => (
                <div className="content">
                    <p>천재교육 쇼핑목 사이트</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul className="workList">
                        <li><Definition dt="관여: " dd="퍼블리싱 70%" /></li>
                        <li><Definition dt="개발: " dd="리뉴얼" /></li>
                    </ul>
                    <p>
                        공통 컴포넌트 및 일부 페이지, 인터렉션을 개발하였습니다. 
                    </p>
                </div>
            )
        },
        {
            id: '2019_2',
            terminate: '2019.06~2019.09',
            title: '현대자동차 ccsp',
            url: null,
            type: [
                'pc', 'git'
            ],
            skills: [
                'ReactJS', 'html', 'css'
            ],
            content: () => (
                <div className="content">
                    <p>현대자동차 ccsp, 통합 로그인 사이트</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul className="workList">
                        <li><Definition dt="관여: " dd="개발 40%" /></li>
                        <li><Definition dt="개발: " dd="개발" /></li>
                    </ul>
                    <p>
                        React로 ccsp 사이트 개발 및 HTML, css로 통합 로그인 수정을 하였습니다. 
                    </p>
                </div>
            )
        },
        {
            id: '2019_3',
            terminate: '2019.09~2019.10',
            title: 'Btv 4.0',
            url: null,
            type: [
                'pc',
            ],
            skills: [
                'ReactJS', 'git'
            ],
            content: () => (
                <div className="content">
                    <p>현대자동차 ccsp, 통합 로그인 사이트</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul className="workList">
                        <li><Definition dt="관여: " dd="개발 80%" /></li>
                        <li><Definition dt="개발: " dd="버전 업데이트" /></li>
                    </ul>
                    <p>
                        React 기반, spatial Navigation 플러그인을 사용하여 개발하였습니다. 
                        리모컨 작동을 반영하기 위해 모든 움직임과 액션을 key값으로 컨트롤 하도록 개발하였습니다. 
                    </p>
                </div>
            )
        },
        {
            id: '2019_4',
            terminate: '2019.12~2020.06',
            title: '서울대학교 Webzine',
            url: 'https://webzine.medicine.snu.ac.kr/202105',
            type: [
                'pc',
            ],
            skills: [
                'html', 'css'
            ],
            content: () => (
                <div className="content">
                    <p>서울 의과대학 웹진</p>
                </div>
            ),
            detail: () => (
                <div>
                    <ul className="workList">
                        <li><Definition dt="개발: " dd="운영" /></li>
                    </ul>
                    <p>
                        매달 웹진 내용 및 요청별 일부 수정을 하였습니다.
                    </p>
                </div>
            )
        },
    ],
    
}




// import Definition from '../components/Definition'

// export const dateList = [
//     {id: 'dateList_0', value: 'all'},
//     {id: 'dateList_1', value: '2017'},
//     {id: 'dateList_2', value: '2018'},
//     {id: 'dateList_3', value: '2019'},
//     {id: 'dateList_4', value: '2020'},
//     {id: 'dateList_5', value: '2021'}
// ]

// export const langList = [
//     {id: 'langList_1', value: 'html&css'},
//     {id: 'langList_2', value: 'javascript'},
//     {id: 'langList_3', value: 'react'},
// ]

// export const historyData = {
//     2015: [
//         {
//             id: '2015_1',
//             terminate: '2015 ~ 2018',
//             title: 'FRISM',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <ul>
//                         <li><Definition dt="관여율: " dd="퍼블리싱 100%" /></li>
//                         <li><Definition dt="관리자 사이트: " dd="PC" /></li>
//                         <li><Definition dt="사용자 사이트: " dd="webapp, 반응형" /></li>
//                     </ul>
//                     <hr className="border" />
//                     <p>사내 자체 서비스로 3년간 지속적으로 기능 확장을 함에 따라 퍼블리싱을 진행하였습니다.</p>
//                     <p>아쉽게도 지금은 서비스가 종료되었습니다.</p>
//                 </div>
//             )
//         },
//         {
//             id: '2015_2',
//             terminate: '2015.07 ~ 2015.09',
//             title: '서울시체육회 블로그',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                     <p>관리자 사이트, 사용자 웹앱 등을 늘어나는 기능에 맞춰 퍼블리싱을 하였습니다.</p>
//                 </div>
//             )
//         },
//     ],
//     2016: [
//         {
//             id: '0',
//             terminate: '2015 ~ 2018',
//             title: 'FRISM',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <ul>
//                         <li><Definition dt="관여율: " dd="퍼블리싱 100%" /></li>
//                         <li><Definition dt="관리자 사이트: " dd="PC" /></li>
//                         <li><Definition dt="사용자 사이트: " dd="webapp, 반응형" /></li>
//                     </ul>
//                     <hr className="border" />
//                     <p>사내 자체 서비스로 3년간 지속적으로 기능 확장을 함에 따라 퍼블리싱을 진행하였습니다.</p>
//                     <p>아쉽게도 지금은 서비스가 종료되었습니다.</p>
//                 </div>
//             )
//         },
//         {
//             id: '1',
//             terminate: '2015.07 ~ 2015.09',
//             title: '서울시체육회 블로그',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                     <p>관리자 사이트, 사용자 웹앱 등을 늘어나는 기능에 맞춰 퍼블리싱을 하였습니다.</p>
//                 </div>
//             )
//         },
//         {
//             id: '2',
//             terminate: '2015.07 ~ 2015.09',
//             title: '서울시체육회 블로그',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                     <p>관리자 사이트, 사용자 웹앱 등을 늘어나는 기능에 맞춰 퍼블리싱을 하였습니다.</p>
//                 </div>
//             )
//         },
//         {
//             id: '3',
//             terminate: '2015.07 ~ 2015.09',
//             title: '서울시체육회 블로그',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                     <p>관리자 사이트, 사용자 웹앱 등을 늘어나는 기능에 맞춰 퍼블리싱을 하였습니다.</p>
//                 </div>
//             )
//         },
//     ],
//     2017: [
//         {
//             id: '00',
//             terminate: '2015 ~ 2018',
//             title: 'FRISM',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <ul>
//                         <li><Definition dt="관여율: " dd="퍼블리싱 100%" /></li>
//                         <li><Definition dt="관리자 사이트: " dd="PC" /></li>
//                         <li><Definition dt="사용자 사이트: " dd="webapp, 반응형" /></li>
//                     </ul>
//                     <hr className="border" />
//                     <p>사내 자체 서비스로 3년간 지속적으로 기능 확장을 함에 따라 퍼블리싱을 진행하였습니다.</p>
//                     <p>아쉽게도 지금은 서비스가 종료되었습니다.</p>
//                 </div>
//             )
//         },
//         {
//             id: '11',
//             terminate: '2015.07 ~ 2015.09',
//             title: '서울시체육회 블로그',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                     <p>관리자 사이트, 사용자 웹앱 등을 늘어나는 기능에 맞춰 퍼블리싱을 하였습니다.</p>
//                 </div>
//             )
//         },
//         {
//             id: '22',
//             terminate: '2015.07 ~ 2015.09',
//             title: '서울시체육회 블로그',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                     <p>관리자 사이트, 사용자 웹앱 등을 늘어나는 기능에 맞춰 퍼블리싱을 하였습니다.</p>
//                 </div>
//             )
//         },
//         {
//             id: '33',
//             terminate: '2015.07 ~ 2015.09',
//             title: '서울시체육회 블로그',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                     <p>관리자 사이트, 사용자 웹앱 등을 늘어나는 기능에 맞춰 퍼블리싱을 하였습니다.</p>
//                 </div>
//             )
//         },
//     ],
//     2018: [
//         {
//             id: '001',
//             terminate: '2015 ~ 2018',
//             title: 'FRISM',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <ul>
//                         <li><Definition dt="관여율: " dd="퍼블리싱 100%" /></li>
//                         <li><Definition dt="관리자 사이트: " dd="PC" /></li>
//                         <li><Definition dt="사용자 사이트: " dd="webapp, 반응형" /></li>
//                     </ul>
//                     <hr className="border" />
//                     <p>사내 자체 서비스로 3년간 지속적으로 기능 확장을 함에 따라 퍼블리싱을 진행하였습니다.</p>
//                     <p>아쉽게도 지금은 서비스가 종료되었습니다.</p>
//                 </div>
//             )
//         },
//         {
//             id: '011',
//             terminate: '2015.07 ~ 2015.09',
//             title: '서울시체육회 블로그',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                     <p>관리자 사이트, 사용자 웹앱 등을 늘어나는 기능에 맞춰 퍼블리싱을 하였습니다.</p>
//                 </div>
//             )
//         },
//         {
//             id: '022',
//             terminate: '2015.07 ~ 2015.09',
//             title: '서울시체육회 블로그',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                     <p>관리자 사이트, 사용자 웹앱 등을 늘어나는 기능에 맞춰 퍼블리싱을 하였습니다.</p>
//                 </div>
//             )
//         },
//         {
//             id: '303',
//             terminate: '2015.07 ~ 2015.09',
//             title: '서울시체육회 블로그',
//             url: null,
//             type: [
//                 'pc',
//                 'mobile'
//             ],
//             skills: [
//                 'html', 'css', 'jquery'
//             ],
//             content: () => (
//                 <div className="content">
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                 </div>
//             ),
//             detail: () => (
//                 <div>
//                     <p>카폐, 음식점 등을 중심으로 쿠폰을 쉽게 적립하고 사용할 수 있는 서비스</p>
//                     <p>관리자 사이트, 사용자 웹앱 등을 늘어나는 기능에 맞춰 퍼블리싱을 하였습니다.</p>
//                 </div>
//             )
//         },
//     ],
// }

