import React from 'react'
import BadgeList from "./BadgeList";
import UserInfo from "./UserInfo";
import {useSelector} from "react-redux";
import Loading from "../Loading/Loading"

function MyPage() {
    const user = useSelector(state => state.user.user)
    if (!user) {
        return <Loading/>
    }
    return (
        <div className="MyPage">
            <UserInfo user={user}/>
            <BadgeList badge={user.badgeUrl}/>

            <div className="MyPage_UserFeed">
                <div className="MyPage_UserFeed_title">
                    <p>나의 피드</p>
                </div>
                <div className="MyPage_UserFeed_desc">
                    <img src="images/tumblr.png" alt="tumblr" width={250} height={250}/>
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
