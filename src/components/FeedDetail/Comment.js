import React, {useState} from 'react';
import dummy from './dummycomment.json';
import styled from "styled-components";
import CommentItem from "./CommentItem";

function Comment() {
    const [date, setDate] = useState(new Date());
    const {data} = dummy
    const [comment, setComment] = useState('');
    const onChangeComment = (e) => {
        setComment(e.target.value)
    }
    const addComment = () => {
        if(!comment){
            alert('댓글을 입력해주세요')
            return
        }
        console.log(comment);
        console.log(date);

    }
    return (
        <CommentContainer>
            <Title>댓글</Title>
            <Textarea placeholder="댓글을 입력해주세요." rows="5" value={comment} onChange={onChangeComment}/>
            <Button type="button" value="댓글 작성" onClick={addComment}/>
            <Line/>
            {data.map(({id, name, ranking, text, date}) =>
                <CommentItem key={id}
                             id={id} name={name} ranking={ranking} text={text} date={date}/>)}
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
font-size: 1.3rem;
margin: 1vh 0;
`;

const Textarea = styled.textarea`
width: 100%;
margin-top: 1vh;
border: 1px solid gray;
resize: none;
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