import React from 'react'

function MainPage_Current() {
    return (
        <div className="MainPage_Current">
             <div className="MainPage_Current_title">
                <p>오늘의 챌린지 현황</p>
            </div>
            <div className="MainPage_Current_boxes">
                <div className="MainPage_Current_box">
                    <p>오늘 참여자 수</p>
                    <p>+30명</p>
                    <p>어제보다 00명 적어요</p>
                </div>
                <div className="MainPage_Current_box">
                    <p>총 챌린지 갯수</p>
                    <p>+320개</p>
                    <p>-</p>
                </div>
                <div className="MainPage_Current_box">
                    <p>오늘 챌린지 갯수</p>
                    <p>+40개</p>
                    <p>어제보다 00개 적어요</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage_Current
