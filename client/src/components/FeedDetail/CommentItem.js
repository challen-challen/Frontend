import React from 'react';
import styled from "styled-components";
import {setMedal} from '../util/setMedal'
import {FaMedal} from "react-icons/fa";

function CommentItem({name, date, ranking, text}) {
    const color = setMedal(ranking);
    return (
        <CommentContainer>
            <Info>
                <User>
                    <div>{name}</div>
                    <FaMedal size={20} color={color} style={{marginLeft: '1.5vw'}}/>
                </User>
                <div>{date}</div>
            </Info>
            <div>{text}</div>
            <Line />
        </CommentContainer>
    );
}

const CommentContainer = styled.div``;

const User = styled.div`
display: flex;
`;
const Info = styled.div`
display: flex;
justify-content: space-between;
margin: 2vh 0;
`;

const Line = styled.div`
border-bottom: 1px solid gray;
margin: 2vh 0;
`;
export default CommentItem;