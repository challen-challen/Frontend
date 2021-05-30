import React, {useEffect, useState} from 'react'
import moment from 'moment';
import Image from "./Image";

function Posting() {
    const [date, setDate] = useState('');
    const [postContent, setPostContent]=useState(
        {
            "writer": "1",
            "category": "electricity",
            "fileUrl": "",
            "title": "",
            "plan": "",
            "content": ""
        }
    )
  
    const onChangeContent=(e)=>{
        const {name, value}=e.target;
         setPostContent({
             ...postContent,
             [name]: value
         })
        }

        const onChangeSelect=(e)=>{
            setPostContent({
                ...postContent,
                category: e.target.value
            })
}

     
   
      

    useEffect(()=>{
        const nowDate = new Date();
        setDate(moment(nowDate).format('YYYY-MM-DD'))
    },[])

    console.log(postContent)
  
    return (
        <div className="Posting">
            <div  className="Posting_title">
               <p><strong style={{border:'1px solid #707070',padding:'1vh 1vw'}}>{date}</strong> 당신의 <strong style={{backgroundColor:'rgba(64,124,79,0.2)'}}>작은 실천</strong>이 지구를 바꿉니다.</p>
            </div>
            <div  className="Posting_cont">
                <p>챌린지 인증 사진</p>
                <Image postContent={postContent} setPostContent={setPostContent}/>
            </div>
            <div className="Posting_cont_input">
                <p>카테고리</p>
                <form>
                    <select onChange={onChangeSelect}>
                        <option value="electricity">전기 부문</option>
                        <option value="traffic">교통 부문</option>
                        <option value="airCondition">냉낭방 부문</option>
                        <option value="resource">자원 부문</option>
                    </select>
                </form>
                <p>제목</p>
                <form>
                    <input name="title" onChange={onChangeContent} placeholder="제목" />
                </form>
                <p>실천 방안</p>
                <form>
                    <input name="plan" onChange={onChangeContent} placeholder="실천 방안" />
                </form>
                <p>내용</p>
                <form>
                    <textarea name="content" onChange={onChangeContent} rows="4" />
                </form>
                <div className="Posting_btn">
                    <button>등록하기</button>
                </div>
            </div>
        </div>
    )
}

export default Posting