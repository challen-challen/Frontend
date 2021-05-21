import React from 'react';
import styled from 'styled-components'
import NavBar from "../Feed/NavBar";
import dummy from '../Feed/dummyFeed.json'
import FeedDetailItem from './FeedDetailItem'
import Comment from "./Comment";

function FeedDetail() {
    const data = dummy.data[0]
    
    return (
        <DetailContainer>
            <NavBar/>
            <Line/>
            <div style={{width: '92%', margin:'0 auto'}} >
            <FeedDetailItem id={data.id} name={data.name} image={data.image} like={data.like} date={data.date} title={data.title} content={data.content} ranking={data.ranking}/>
            <Comment />
            </div>
        </DetailContainer>
    );
}

const DetailContainer = styled.div`
width: 100%;
margin: 0 auto;
`;
const Line = styled.div`
border-bottom: 1px solid gray;
margin: 2vh 0;
`;

export default FeedDetail;