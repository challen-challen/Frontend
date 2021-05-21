import React, {useState} from 'react';
import styled from 'styled-components'
import {MdErrorOutline} from 'react-icons/md';
import NavBar from "./NavBar";
import FeedList from "./FeedList";
import PostingButton from "./PostingButton";
import DescriptionModal from "./modal/DescriptionModal";

function Feed({match}) {
    const [sort, setSort] = useState('recent')
    const [isOpen, setIsOpen] = useState(false);

    const onChangeSort = (e) => {
        setSort(e.target.value)
        console.log(e.target.value)
    }
    const category = match.params.category;


    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () =>{
        setIsOpen(false)
    }

    return (
        <div>
        <NavBar/>
        <FeedContainer>
            <Line/>
            <TopWrapper>
            <MdErrorOutline size={30} color='#40804F' style={{cursor:'pointer'}} onClick={openModal}/>
            <SortSelect value={sort} onChange={e => onChangeSort(e)}>
                <option value="recent">최신순</option>
                <option value="hot">인기순</option>
            </SortSelect>
            </TopWrapper>
            {isOpen? <DescriptionModal closeModal={closeModal} />:''}
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

const TopWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 95%;
margin: 1vh auto;
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

const Line = styled.div`
border-bottom: 1px solid #838383;
margin: 2vh 0;
`;
export default Feed;