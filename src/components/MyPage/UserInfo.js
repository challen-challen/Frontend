import React from 'react';
import styled from "styled-components";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {logout} from '../../actions/user_actions'

function UserInfo() {
    const user = useSelector(state => state.user.user)
    console.log('user', user)
    const dispatch = useDispatch()
    const history = useHistory();
    const handleLogout = () => {
        dispatch(logout())
        history.push('/')
    }
    return (
        <Container>
            <Name>{user.nickname}</Name>
            <Number>{user.post.length}개</Number>
            <Logout type="button" value="로그아웃" onClick={handleLogout}/>
        </Container>
    );
}

const Container = styled.div`
width: 60%;
margin: 2vh auto;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Name = styled.div`
font-size: 1.5rem;
font-weight: bold;
`;
const Number = styled.div`
font-size: 1.3rem;
`;
const Logout = styled.input`
width: 100px;
cursor: pointer;
`;
export default UserInfo;