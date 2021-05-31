import React, {useEffect, useState} from 'react'
import moment from 'moment';
import Image from "./Image";
import {category, electricity, traffic, airCondition, resource} from '../util/selectOption'
import Select from "./Select";
import axios from "axios";

function Posting({match}) {
    const writer = localStorage.getItem('user');
    const [date, setDate] = useState('');
    const urlCategory = match.params.category;
    const [selectAction, setSelectAction] = useState([]);
    const [etc, setEtc] = useState(false);
    const [postContent, setPostContent] = useState(
        {
            writer: `${writer}`,
            category: `${urlCategory}`,
            fileUrl: ['asdf','asdf'],
            title: 'asdfasdf',
            plan: 'asdfasdf',
            content: 'asdfasddf',

        }
    )
    useEffect(() => {
        if (postContent.category === 'electricity') {
            setSelectAction(electricity)
        }
        if (postContent.category === 'traffic') {
            setSelectAction(traffic)
        }
        if (postContent.category === 'airCondition') {
            setSelectAction(airCondition)
        }
        if (postContent.category === 'resource') {
            setSelectAction(resource)
        }
        if (selectAction.length !== 0) {
            setPostContent({
                ...postContent,
                plan: selectAction[0].value
            })
        }
    }, [postContent.category])

    useEffect(() => {
        if (postContent.plan === '기타') {
            setEtc(true)
        } else {
            setEtc(false)
        }
    }, [postContent.plan])
    console.log(postContent);
    const onChangeContent = (e) => {
        const {name, value} = e.target;
        setPostContent({
            ...postContent,
            [name]: value
        })
    }

    const onChangeCategory = (e) => {
        setPostContent({
            ...postContent,
            category: e.target.value
        })
    }
    const onChangePlan = (e) => {
        setPostContent({
            ...postContent,
            plan: e.target.value
        })
    }

    const handleUpload = () => {

        axios.post('http://localhost:5000/api/challen/posts', postContent,{withCredentials:true}).then(response => console.log(response))
    }
    console.log(postContent)

    useEffect(() => {
        const nowDate = new Date();
        setDate(moment(nowDate).format('YYYY-MM-DD'))
    }, [])
    return (
        <div className="Posting">
            <div className="Posting_title">
                <p><strong style={{border: '1px solid #707070', padding: '1vh 1vw'}}>{date}</strong> 당신의 <strong
                    style={{backgroundColor: 'rgba(64,124,79,0.2)'}}>작은 실천</strong>이 지구를 바꿉니다.</p>
            </div>
            <div className="Posting_cont">
                <p>챌린지 인증 사진</p>
                <Image postContent={postContent} setPostContent={setPostContent} onChangeContent={onChangeContent}/>
            </div>
            <div className="Posting_cont_input">
                <p>카테고리</p>
                <form>
                    <Select options={category} onChange={onChangeCategory} defaultValue={urlCategory}/>
                </form>
                <p>제목</p>
                <form>
                    <input name="title" onChange={onChangeContent} placeholder="제목"/>
                </form>
                <p>실천 방안</p>
                <form>
                    {selectAction && <Select options={selectAction} onChange={onChangePlan} defaultValue=''/>}
                </form>
                {etc &&
                <div>
                    <p>기타 실천 방안</p>
                    <form>
                        <input name="subtitle" onChange={onChangeContent} placeholder="실천 방안"/>
                    </form>
                </div>
                }
                <p>내용</p>
                <form>
                    <textarea name="desc" onChange={onChangeContent} rows="4"/>
                </form>
                <div className="Posting_btn">
                    <button onClick={handleUpload}>등록하기</button>
                </div>
            </div>
        </div>
    )
}

export default Posting