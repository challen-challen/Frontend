import React from 'react';
import styled from 'styled-components'
import FeedItem from "./FeedItem";

function FeedList({category, post}) {

    return (
        <FeedListWrapper>
            {post.map(({writer,fileUrl ,likes ,_id ,title})=>
                <FeedItem image={fileUrl} writer={writer.nickname} likes={likes} key={_id} title={title}  category={category} _id={_id}/>
            )}
        </FeedListWrapper>
    );
}

const FeedListWrapper=styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;
height:100%;
min-height:70vh;
column-gap: 1vw;
`;
export default FeedList;