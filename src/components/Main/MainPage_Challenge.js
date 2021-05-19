import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

function MainPage_Challenge() {
    return (
        <div className="MainPage_Challenge">
            <div className="MainPage_Challenge_title">
                <p>이제는 생활 속 작은참여로<strong>탄소 중립</strong>을 실천 할 때입니다.</p>
            </div>
            <div className="MainPage_Challenge_desc">
                <div className="MainPage_Challenge_desc_1">
                    <p>01 실천할 저탄소 챌린지를 선택해주세요</p>
                    <ul>

                        <li><FontAwesomeIcon icon={faCheckCircle} size="1x"/>전기 부문</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} size="1x"/>교통 부문</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} size="1x"/>냉낭방 부문</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} size="1x"/>자원 부문</li>
                    </ul>

                </div>
                <div className="MainPage_Challenge_desc_2">
                    <div className="MainPage_Challenge_desc_2_title" >
                    <p>02 간단한 인증과 함께 사람들과 공유해보세요</p>
                    <p>인증 사진을 올려주세요.</p>
                    </div>
                    <div className="MainPage_Challenge_desc_2_cont">
                        <img src="images/tumblr.png" alt="tumblr" width={110} height={110} />
                        <div>
                        <p>자원 부문</p>
                        <p>#일회용품 대신 텀블러 사용하기</p>
                        <p>카페 갈때는 항상 텀블러를 챙겨서 가요!</p>
                        <p>일회용 컵이 너무 아깝더라구요.</p>
                        <p>오늘도 일회용컵 대신 텀블러!</p>
                        </div>
                    </div>
                </div>
                <div className="MainPage_Challenge_btn">
                    <Link to="/challenge/all"><button>공유된 챌린지 보러 가기</button></Link>
                </div>

            </div>
        </div>
    )
}

export default MainPage_Challenge
