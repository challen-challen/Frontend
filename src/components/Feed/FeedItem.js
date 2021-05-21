import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ImEarth} from "react-icons/im"
import {setMedal} from '../util/setMedal'
import {FaMedal} from "react-icons/fa";

function FeedItem({image, name, like,title,id, category, ranking}) {
    const color = setMedal(ranking);
    return (
        <ItemContainer>
            <Img src={image} alt={image}/>
            <Title to={`/challenge/${category}/${id}`}>{title}</Title>
            <InfoContainer>
                <Wrapper>
                    <div>{name}</div>
                    <FaMedal size={20} color={color} style={{marginLeft: '1.5vw'}}/>
                </Wrapper>
                <Wrapper>
                    <ImEarth size={20} style={{marginRight:'1.5vw'}}/>
                    <div>{like}</div>
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