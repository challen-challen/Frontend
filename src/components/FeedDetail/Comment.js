import React, {useState} from 'react';
import styled from "styled-components";
import CommentItem from "./CommentItem";
import axios from "axios";

function Comment({comments, id}) {
    const writer = localStorage.getItem('user')
    const [comment, setComment] = useState('');
    console.log(comments)
    const onChangeComment = (e) => {
        setComment(e.target.value)
    }
    const addComment = () => {
        if(!comment){
            alert('댓글을 입력해주세요')
            return
        }
        const body = {
            postId: `${id}`,
            writer,
            content: comment,
        }
        axios.post('http://localhost:5000/api/comments',body,{withCredentials:true})
            .then(response =>{
                console.log(response)
                alert('댓글이 등록되었습니다.')
                setComment('')
                comments.concat(comment)
            })
    }
    return (
        <CommentContainer>
            <Title>{comments.length}개의 댓글</Title>
            <Textarea placeholder="댓글을 입력해주세요." value={comment} onChange={onChangeComment}/>
            <Button type="button" value="댓글 작성" onClick={addComment}/>
            <Line/>
            {comments.map(({_id, writer, content, createdAt}) =>
                <CommentItem key={_id}
                             id={_id} writer={writer.nickname} content={content} date={createdAt}/>)}
        </CommentContainer>
    );
}

const CommentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;
const Title = styled.div`
font-weight: bold;
font-size: 1.2rem;
margin: 1vh 0 2vh 0;
`;

const Textarea = styled.textarea`
width: 100%;
height: 15vh;
margin-top: 1vh;
border: 1px solid gray;
resize: none;
background-color: white;
`;
const Button = styled.input`
  font-size: 1rem;
  cursor: pointer;
  width: 100px;
  height: 40px;
  text-align: center;
  padding: 8px 10px;
  border-radius: 30px;
  background-color: #40804F;
  color: white;
  font-weight: bold;
  border: none;
  margin: 2vh 0 3vh auto;
`;
const Line = styled.div`
border-bottom: 1px solid gray;
margin: 2vh 0;
`;
export default Comment;