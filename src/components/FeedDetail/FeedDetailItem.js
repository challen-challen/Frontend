import React, {useState} from 'react';
import {MdChatBubble} from "react-icons/md";
import {ImEarth} from "react-icons/im";
import styled from "styled-components";
import moment from "moment";

function FeedDetailItem({fileUrl, _id, nickname, likes,date, content, title}) {
   const strDate = (moment(date).format('YYYY-MM-DD h:mm a'))
    return (
        <FeedDetailContainer>
            <Img src={fileUrl} alt={_id}/>
            <InfoWrapper>
                <User>
                    <div>{nickname}</div>
                </User>
                <RightInfo>
                    <Comment>
                        <MdChatBubble  size={25} style={{marginRight: '1.5vw'}}/>
                        <div>{likes.length}개</div>
                    </Comment>
                    <Like>
                        <ImEarth size={20} style={{marginRight: '1.5vw'}}/>
                        <div>{likes.length}개</div>
                    </Like>
                </RightInfo>
            </InfoWrapper>
            <Date>{strDate}</Date>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <Line />
        </FeedDetailContainer>
    );
}
const Line = styled.div`
border-bottom: 1px solid gray;
margin: 2vh 0;
`;
const FeedDetailContainer = styled.div`
width: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
font-size: 1rem;
`;
const InfoWrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 2vh 0;
`;
const Img = styled.img`
margin: 0 auto;
width: 80%;
border-radius: 5px;
`;
const User = styled.div`
align-items: center;
display: flex;
font-size: 1.3rem;
`;


const RightInfo = styled.div`
display: flex;
`;
const Comment = styled.div`
display: flex;
align-items: center;
margin-right: 2vw;
`;

const Like = styled.div`
display: flex;
align-items: center;
`;
const Date = styled.div`
margin-right: auto;
margin-bottom: 1vh;
`;
const Title = styled.div`
font-weight: bold;
font-size: 1.3rem;
margin: 1.5vh 0;
`;

const Content = styled.div`
margin-bottom: 3vh;
`;

export default FeedDetailItem;