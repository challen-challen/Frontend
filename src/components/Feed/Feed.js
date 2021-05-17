import React, {useState} from 'react';
import styled from 'styled-components'
import NavBar from "./NavBar";
import FeedList from "./FeedList";
import PostingButton from "./PostingButton";

function Feed({match}) {
    const [sort, setSort] = useState('recent')
    const onChangeSort = (e) => {
        setSort(e.target.value)
        console.log(e.target.value)
    }
    const category = match.params.category;

    return (
        <div>
        <NavBar/>
        <FeedContainer>
            <Line/>
            <SortSelect value={sort} onChange={e => onChangeSort(e)}>
                <option value="recent">최신순</option>
                <option value="hot">인기순</option>
            </SortSelect>
            <FeedList category={category}/>
            <PostingButton />
        </FeedContainer>
        </div>
    );
}

const FeedContainer = styled.div`
margin: 0 auto;
width: 100%;
display: flex;
flex-direction: column;
`;
const SortSelect = styled.select`
margin: 1vh 4vw 1vh auto;
 width: 80px;
  height:20px;
  font-size:0.8rem;
  color: grey;
  line-height:20px;
  background: white;
  
`;

const Line = styled.div`
border-bottom: 1px solid gray;
margin: 2vh 0;
`;
export default Feed;