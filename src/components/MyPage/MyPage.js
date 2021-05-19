import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import Badge from "./Badge";
function MyPage() {
    return (
        <div className="MyPage">
            <div className="MyPage_UserInfo">
                <div className="MyPage_UserInfo_title">
                    <p>유저 정보</p>
                </div>
                <div className="MyPage_UserInfo_desc">
                    <FontAwesomeIcon icon={faMedal} size="4x" style={{marginLeft:'7vw', color: "red" }} />
                    <div className="MyPage_UserInfo_desc_2">
                        <p>홍길동</p>
                        <p>게시물 6개</p>
                    </div>
                </div>
            </div>
            <Badge />
            <div className="MyPage_UserFeed" >
                <div className="MyPage_UserFeed_title">
                    <p>나의 피드</p>
                </div>
                <div className="MyPage_UserFeed_desc">
                    <img src="images/tumblr.png" alt="tumblr" width={250} height={250} />
                    <div className="MyPage_UserFeed_btn">
                        <p>내가 올린 피드를 보러 갈까요?</p>
                        <button>나의 피드 보기</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyPage
