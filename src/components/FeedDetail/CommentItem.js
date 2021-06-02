import React from 'react';
import styled from "styled-components";
import moment from "moment";
import axios from "axios";

function CommentItem({writer, date, content, id}) {
    const strDate = (moment(date).format('YYYY-MM-DD h:mm a'))
    const onDelete = async () =>{
        alert('댓글을 삭제합니다.')
        await  axios.delete(`http://localhost:5000/api/comments/${id}`,{withCredentials:true})
    }
    return (
        <CommentContainer>
            <Info>
                <div>
                    <Name>{writer}</Name>
                    <div>{strDate}</div>
                </div>
                <ButtonContainer>
                    <Button style={{marginRight:'1vw'}}>수정</Button>
                    <Button type="button" onClick={onDelete}>삭제</Button>
                </ButtonContainer>
            </Info>
            <Content>{content}</Content>
            <Line/>
        </CommentContainer>
    );
}

const CommentContainer = styled.div``;

const Name = styled.div`
font-weight: bold;
margin-bottom: 1vh;`;

const Info = styled.div`
display: flex;
justify-content: space-between;
margin: 2vh 0;

`;
const ButtonContainer = styled.div`
display: flex;
`;
const Button = styled.button`
cursor: pointer;
background: white;
border: none;
height: 10px;
`;
const Content = styled.div`
margin: 1vh 0 3vh 0;
`;
const Line = styled.div`
border-bottom: 1px solid gray;
margin: 2vh 0;
`;
export default CommentItem;