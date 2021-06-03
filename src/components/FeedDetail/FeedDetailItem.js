import React, {useState, useEffect} from 'react';
import {MdChatBubble} from "react-icons/md";
import {ImEarth} from "react-icons/im";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";

function FeedDetailItem({fileUrl, _id, nickname, date, content, title, likeNum, reducedCarbon}) {
    const strDate = (moment(date).format('YYYY-MM-DD h:mm a'))
    const [likeToggle, setLikeToggle] = useState(false)
    const LikeId = {postId: _id}

    useEffect(() => {

    }, [likeNum])

    const onLikeClick = (e) => {
        if (likeToggle) {
            axios.delete(`${process.env.API_SERVER}/api/like?postId=${_id}`, {withCredentials: true}).then(response => console.log(response))
        } else {
            axios.post('${process.env.API_SERVER}/api/like', LikeId, {withCredentials: true}).then(response => console.log(response))
        }
        setLikeToggle(!likeToggle)
    }

    return (
        <FeedDetailContainer>
            <Img src={`${process.env.API_SERVER}/${fileUrl}`} alt={_id}/>
            <InfoWrapper>
                <User>
                    <div>{nickname}</div>
                </User>
                <RightInfo>
                    {likeToggle ? (
                        <Like>
                            <button onClick={onLikeClick}
                                    style={{color: 'green', background: 'white', borderRadius: '10px'}}><ImEarth
                                size={20} style={{marginRight: '1.5vw'}}/>click
                            </button>
                            <div>{likeNum + 1}개</div>
                        </Like>
                    ) : (
                        <Like>
                            <button onClick={onLikeClick}
                                    style={{color: 'red', background: 'white', borderRadius: '10px'}}><ImEarth size={20}
                                                                                                               style={{marginRight: '1.5vw'}}/>click
                            </button>
                            <div>{likeNum}개</div>
                        </Like>
                    )}
                </RightInfo>
            </InfoWrapper>
            <Date>{strDate}</Date>
            <Title>{title}</Title>
            <Content>{content}</Content>
            {reducedCarbon && <ReduceCarbon>
                <CarbonNumber>{reducedCarbon}</CarbonNumber>
                mg 탄소를 감량하였습니다.
            </ReduceCarbon>}
            <Line/>
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
const ReduceCarbon = styled.div`
font-size: 1rem;
display: flex;
margin: 0 auto;
`;
const CarbonNumber = styled.div`
background-color: rgba(64,124,79,0.2);
width: 100px;
height: 20px;
text-align: center;
font-size: 1.2rem;
font-weight: bold;

`

export default FeedDetailItem;