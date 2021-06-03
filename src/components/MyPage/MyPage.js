import React, { useEffect, useState } from 'react'
import BadgeList from "./BadgeList";
import UserInfo from "./UserInfo";
import {useSelector} from "react-redux";
import Loading from "../Loading/Loading"
import axios from "axios";
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from 'react-icons/md'

function MyPage() {
    const [myFeed, setMyFeed] = useState([])
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/mypage/posts`,  {withCredentials: true}).then(
            response =>{
                setMyFeed(response.data.userPosts.post)
            }
        ).then(error => error)
    }, [])

console.log(myFeed)
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
                <div className="MyPage_UserFeed_container">
                    {myFeed.length === 0 && <div style={{textAlign:'center'}}>loading...</div>}
                <ul className="MyPage_UserFeed_desc">
                    {myFeed && myFeed.slice(0,4).map(({fileUrl},index)=>
                       <li key={index}><img src={`${fileUrl}`} alt={fileUrl} /></li>
                    )}
                </ul>
                </div>
                <div className="btn_container">
                <div className="next_btn">
                <MdKeyboardArrowLeft size={30}/>
               Previous
                </div>
                <div className="next_btn">
                    Next
                <MdKeyboardArrowRight size={30}/>
                </div>
                </div>
            </div>
        </div>

    )
}

export default MyPage
