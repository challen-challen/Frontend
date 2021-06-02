import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ImEarth} from "react-icons/im"

function FeedItem({writer,fileUrl ,likes ,_id ,title,category, image}) {

    return (
        <ItemContainer>
        <Img src={image} alt="image"/>)
            <Title to={`/challenge/${category}/${_id}`}>{title}</Title>
            <InfoContainer>
                <Wrapper>
                    <div>{writer}</div>
                </Wrapper>
                <Wrapper>
                    <ImEarth size={20} style={{marginRight:'1.5vw'}}/>
                    <div>{likes}</div>
                </Wrapper>
            </InfoContainer>

        </ItemContainer>
    );
}

const ItemContainer = styled.div`
display: flex;
flex-direction: column;
width: 180px;
margin: 1vh auto;
`;
const Title = styled(Link)`
width: 50%;
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
border-radius: 5px;
margin-bottom: 1vh;
`;
const InfoContainer = styled.div`
margin: 1vh 1vw;
display: flex;
justify-content: space-between;
`;
const Wrapper = styled.div`
display: flex;
`;
export default FeedItem;