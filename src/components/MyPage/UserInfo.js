import React from 'react';
import './UserInfo.css'
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {logout} from '../../actions/user_actions'

function UserInfo({user}) {
    const dispatch = useDispatch()
    const history = useHistory();
    const handleLogout = () => {
        dispatch(logout())
            .then(()=>
                history.push('/'))

    }
    return (
        <div className="userInfo">
            <p>유저 정보</p>
            <ul className="infoContainer">
                <li style={{fontWeight:'bold'}}>{user && user.nickname}</li>
                <li>총 탄소 감량량: {user?.reducedCarbon?.allAmount}+ mg</li>
                <li>오늘의 감량량: {user?.reducedCarbon?.dailyAmount}</li>
                <li>참여한 챌린지 수:{user?.post && user.post.length}개</li>
                <input type="button" value="로그아웃" onClick={handleLogout}/>
            </ul>
        </div>
    );

}


export default UserInfo;