import React, { useState, useEffect } from 'react';
import axios from 'axios';


function MainPage_Current() {
    const [currentList, setCurrentList] = useState()
    const [isLoading, setIsLoading] = useState(true);
    async function loadCurrent() {
        await axios.get(`http://localhost:5000/api/challen`).then(
            res => {
                setCurrentList(res.data);
                setIsLoading(false);
            }).then(error => error)
    }
    useEffect(() => {
        loadCurrent()
    }, [])

    return (
        <>
            { isLoading ? (<h1>loading</h1>) : (
                <div className="MainPage_Current">
                    <div className="MainPage_Current_title">
                        <p>오늘의 챌린지 현황</p>
                    </div>
                    <div className="MainPage_Current_boxes">
                        <div className="MainPage_Current_box">
                            <p>오늘 참여자 수</p>
                            <p>+{currentList.sumUserNum}명</p>
                            <p>어제보다 00명 적어요</p>
                        </div>
                        <div className="MainPage_Current_box">
                            <p>총 챌린지 갯수</p>
                            <p>+{currentList.sumPostNum}개</p>
                            <p>-</p>
                        </div>
                        <div className="MainPage_Current_box">
                            <p>오늘 챌린지 갯수</p>
                            <p>+{currentList.todayPostNum}개</p>
                            <p>어제보다 00개 적어요</p>
                        </div>
                    </div>
                </div>)

            }
        </>
    )
}

export default MainPage_Current
