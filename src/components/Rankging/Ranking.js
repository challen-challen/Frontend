import React, {useState} from 'react';
import styled from 'styled-components'
import RankingList from "./RankingList";
import ranking1 from '../util/image/ranking1.png'
import ranking2 from '../util/image/ranking2.png'
import ranking3 from '../util/image/ranking3.png'
import rankingdummy from './rankingdata.json';

function Ranking() {
    const [sortMonth, setSortMonth] = useState('all')
    const [sortDaily, setSortDaily] = useState('all')
    const onChangeSortMonth = (e) => {
        setSortMonth(e.target.value)
        console.log(e.target.value)
    }
    const onChangeSortDaily = (e) => {
        setSortDaily(e.target.value)
        console.log(e.target.value)
    }
    const {data} = rankingdummy

    return (
        <Container>
            <Title>종합 챌린지 랭킹</Title>
            <Top3Wrapper>
                <RankingItem>
                    <img src={ranking2} alt="ranking2" style={{width: '80px'}}/>
                    <Name>{data[1].id}</Name>
                    <Like>{data[1].like}개</Like>
                </RankingItem>
                <RankingItem>
                    <img src={ranking1} alt="ranking1" style={{width: '100px'}}/>
                    <Name>{data[0].id}</Name>
                    <Like>{data[1].like}개</Like>
                </RankingItem>
                <RankingItem>
                    <img src={ranking3} alt="ranking3" style={{width: '70px'}}/>
                    <Name>{data[2].id}</Name>
                    <Like>{data[1].like}개</Like>
                </RankingItem>
            </Top3Wrapper>
            <TitleWrapper>
                <Title>월간 랭킹</Title>
                <SortSelect value={sortMonth} onChange={e => onChangeSortMonth(e)}>
                <option value="all">전체</option>
                <option value="electricity">전기부문</option>
                    <option value="traffic">교통부문</option>
                    <option value="airCondition">냉난방부문</option>
                    <option value="resource">자원부문</option>
            </SortSelect>
            </TitleWrapper>
            <Desc>이번 달 좋아요를 많이 받은 회원님입니다.</Desc>
            {data.map(({id, like}, index) =>
                <RankingList index={index} id={id} like={like} key={id}/>
            )}
            <TitleWrapper>
            <Title>일간 랭킹</Title>
            <SortSelect value={sortDaily} onChange={e => onChangeSortDaily(e)}>
                <option value="all">전체</option>
                <option value="electricity">전기부문</option>
                <option value="traffic">교통부문</option>
                <option value="airCondition">냉난방부문</option>
                <option value="resource">자원부문</option>
            </SortSelect>
        </TitleWrapper>
            <Desc>오늘 좋아요를 많이 받은 회원님입니다.</Desc>
            {data.map(({id, like}, index) =>
                <RankingList index={index} id={id} like={like} key={id}/>
            )}
        </Container>
    );
}

const Container = styled.div`
margin 0 auto;
`;
const TitleWrapper = styled.div`
width: 95%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
`;
const SortSelect = styled.select`
 width: 80px;
  height:20px;
  font-size:0.8rem;
  color: grey;
  line-height:20px;
  background: white;
  
`;
const Title = styled.div`
font-weight: bold;
margin: 2vh auto;
width: 95%;
font-size: 1.3rem;
`;

const Desc = styled.div`
font-weight: bold;
margin: 2vh auto;
width: 95%;
font-size: 1rem;
color:#707070;
`

const Top3Wrapper = styled.ul`
display: flex;
text-align: center;
justify-content: center;
background-color:#CCE0C4;
height: 30vh;
`;
const RankingItem = styled.li`
display: flex;
flex-direction: column;
justify-content: flex-end;
height: 25vh;
`;
const Name = styled.div`
text-align: center;
font-weight: bold;
font-size: 1rem;
`;
const Like = styled.div`
font-weight: bold;
margin: 0.5vh 0;
`;


export default Ranking;