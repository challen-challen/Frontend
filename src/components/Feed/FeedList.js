import React from 'react';
import styled from 'styled-components'
import dummy from './dummyFeed.json'
import FeedItem from "./FeedItem";

function FeedList({category}) {
    const {data}= dummy

    return (
        <FeedListWrapper>
            {data.map(({image,name, like,id, title, ranking})=>
                <FeedItem image={image} name={name} like={like} key={id} title={title} id={id} category={category} ranking={ranking}/>
            )}
        </FeedListWrapper>
    );
}

const FeedListWrapper=styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(38%, auto));
}
width: 100%;
column-gap: 1vw;
`;
export default FeedList;