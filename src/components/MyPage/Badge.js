import React from 'react';
import styled from "styled-components";
import b3 from './b3.png'
import b5lock from './b5lock.png'

function Badge({user}) {

    return (
        <Container>
            <Title>나의 뱃지</Title>
            <BadgeContainer>
                <Item>
                    <Img src={b3} alt="b3"/>
                    <Desc>3회 연속 업로드</Desc>
                </Item>
                <Item>
                    <Img src={b5lock} alt="b5lock" style={{opacity: '0.5'}}/>
                    <Desc>5회 연속 업로드</Desc>
                </Item>
                <Item>
                    <Img src={b5lock} alt="b5lock" style={{opacity: '0.5'}}/>
                    <Desc>7회 연속 업로드</Desc>
                </Item>
                <Item>
                    <Img src={b5lock} alt="b5lock" style={{opacity: '0.5'}}/>
                    <Desc>3주 연속 업로드</Desc>
                </Item>
                <Item>
                    <Img src={b5lock} alt="b5lock" style={{opacity: '0.5'}}/>
                    <Desc>5주 연속 업로드</Desc>
                </Item>
                <Item>
                    <Img src={b5lock} alt="b5lock" style={{opacity: '0.5'}}/>
                    <Desc>7주 연속 업로드</Desc>
                </Item>
            </BadgeContainer>
        </Container>
    );
}

const Container = styled.div`
width: 100%;
margin: 2vh 0;
display: flex;
flex-direction: column;
`;
const Title = styled.div`
   margin-left: 1vw;
   font-weight: 600;
`;
const BadgeContainer = styled.div`
margin: 0 auto;
margin: 2vh;
display: grid;
grid-template-columns:1fr 1fr 1fr;
}
row-gap: 3vh;
`;
const Item = styled.div`
margin: 0 auto;
`;
const Img = styled.img`
width: 90px;
height: 90px;
`;
const Desc = styled.div`
margin: 1vh 0;
font-size: 0.8rem;
`;
export default Badge;