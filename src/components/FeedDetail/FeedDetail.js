import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import NavBar from "../Feed/NavBar";
import FeedDetailItem from './FeedDetailItem'
import Comment from "./Comment";
import axios from "axios";

function FeedDetail({match}) {
    const[data, setData] = useState([])
    const id = match.params.id;
    console.log(data);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/challen/post/${id}`).then(response=> setData(response.data)).catch(error=>error)
    },[id])
    return (
        <DetailContainer>
            <NavBar/>
            <Line/>
            <div style={{width: '92%', margin:'0 auto'}} >
                {data?.writer &&  <FeedDetailItem _id={data._id} nickname={data.writer.nickname} fileUrl="https://via.placeholder.com/150" likes={data.likes} date={data.createAt} title={data.title} content={data.content} /> }
                {data?.comments && <Comment comments={data.comments} id={id}/> }
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