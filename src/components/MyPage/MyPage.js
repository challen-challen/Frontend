import React from 'react'
import Badge from "./Badge";
import UserInfo from "./UserInfo";
import {useSelector} from "react-redux";

function MyPage() {
    const user = useSelector(state => state.user.user)

    return (
        <div className="MyPage">
            <div className="MyPage_UserInfo">
                <div className="MyPage_UserInfo_title">
                    <p>유저 정보</p>
                </div>
                <UserInfo user={user}/>
            </div>
            <Badge user={user}/>
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
