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
  @media (max-width: 769px) {
grid-template-columns: repeat(auto-fill, minmax(38%, auto));
  }
grid-template-columns: repeat(auto-fill, minmax(30%, auto));
}
width: 100%;
column-gap: 1vw;
`;
export default FeedList;