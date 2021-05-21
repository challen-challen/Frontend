import React, {useEffect, useState} from 'react'
import moment from 'moment';
import Image from "./Image";

function Posting() {
    const [date, setDate] = useState('');
    const [postContent, setPostContent]=useState(
        {
            category:1,
            title :'',
            subtitle:'',
            desc :'',
            imageUrl :'',
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

     
        console.log(postContent)
    useEffect(()=>{
        const nowDate = new Date();
        setDate(moment(nowDate).format('YYYY-MM-DD'))
    },[])
    return (
        <div className="Posting">
            <div  className="Posting_title">
               <p><strong style={{border:'1px solid #707070',padding:'1vh 1vw'}}>{date}</strong> 당신의 <strong style={{backgroundColor:'rgba(64,124,79,0.2)'}}>작은 실천</strong>이 지구를 바꿉니다.</p>
            </div>
            <div  className="Posting_cont">
                <p>챌린지 인증 사진</p>
                <Image postContent={postContent} setPostContent={setPostContent} onChangeContent={onChangeContent} />
            </div>
            <div className="Posting_cont_input">
                <p>카테고리</p>
                <form>
                    <select onChange={onChangeSelect}>
                        <option value="1">전기 부문</option>
                        <option value="2">교통 부문</option>
                        <option value="3">냉낭방 부문</option>
                        <option value="4">자원 부문</option>
                    </select>
                </form>
                <p>제목</p>
                <form>
                    <input name="title" onChange={onChangeContent} placeholder="제목" />
                </form>
                <p>실천 방안</p>
                <form>
                    <input name="subtitle" onChange={onChangeContent} placeholder="실천 방안" />
                </form>
                <p>내용</p>
                <form>
                    <textarea name="desc" onChange={onChangeContent} rows="4" />
                </form>
                <div className="Posting_btn">
                    <button>등록하기</button>
                </div>
            </div>
        </div>
    )
}

export default Posting