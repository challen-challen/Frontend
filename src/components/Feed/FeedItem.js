import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ImEarth} from "react-icons/im"

function FeedItem({writer,likeNum ,_id ,title,category, image}) {

    return (
        <ItemContainer>
        <Link to={`/challenge/${category}/${_id}`} style={{textDecoration:'none'}}>
        <Img src={`http://localhost:5000/${image}`} alt="image"/>
            <Title>{title}</Title>
        </Link>
            <InfoContainer>
                    <div>{writer}</div>
                <Wrapper>
                    <ImEarth size={20} style={{marginRight:'1.5vw'}}/>
                    <div>{likeNum}개</div>
                </Wrapper>
            </InfoContainer>
        </ItemContainer>
    );
}

const ItemContainer = styled.div`
display: flex;
flex-direction: column;
width: 180px;
height : 200px;
margin: 1vh auto;
`;
const Title = styled.div`
width: 50%;
height : 20px;
overflow: hidden;
text-overflow: ellipsis;
width: 100%;
white-space: nowrap;
text-decoration: none;
color: black;
font-weight: bold;
`;
const Img = styled.img`
width: 100%;
height:150px;
border-radius: 5px;
margin-bottom: 1.2vh;
`;
const InfoContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Wrapper = styled.div`
display: flex;

`;
export default FeedItem;