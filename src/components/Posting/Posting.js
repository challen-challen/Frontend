import React, {useEffect, useState} from 'react'
import moment from 'moment';
import Image from "./Image";
import {category, electricity, traffic, airCondition, resource} from '../util/selectOption'
import Select from "./Select";
import axios from "axios";

function Posting({match, history}) {
    const writer = sessionStorage.getItem('user');
    const [date, setDate] = useState('');
    const urlCategory = match.params.category;
    const [selectPlan, setSelectPlan] = useState([]);
    const [etc, setEtc] = useState(false);
    const [calculate, setCalculate] = useState(false);
    const [min, setMin] = useState('');
    const [postContent, setPostContent] = useState(
        {
            writer: `${writer}`,
            category: `${urlCategory}`,
            fileUrl: '',
            title: '',
            plan: '',
            etcPlan:'',
            reducedCarbon:'',
            content: '',

        }
    )

    useEffect(() => {
        if (postContent.category === 'electricity') {
            setSelectPlan(electricity)
            setCalculate(true)
        }
        if (postContent.category === 'traffic') {
            setSelectPlan(traffic)
            setCalculate(false)
        }
        if (postContent.category === 'airCondition') {
            setSelectPlan(airCondition)
            setCalculate(true)
        }
        if (postContent.category === 'resource') {
            setSelectPlan(resource)
            setCalculate(false)
        }
        setPostContent({
            ...postContent,
            title: '',
            plan: '',
            content: '',
            fileUrl: '',
            etcPlan: '',
            reducedCarbon: ''
        })
        setMin('')
    }, [postContent.category])

    useEffect(() => {
        if (postContent.plan === 'etc') {
            setEtc(true)
            setPostContent({
                ...postContent,
                reducedCarbon: ''
            })
        } else {
            setEtc(false)
        }
        setMin('')
    }, [postContent.plan])

    const onChangeContent = (e) => {
        const {name, value} = e.target;
        setPostContent({
            ...postContent,
            [name]: value
        })
    }
    const onChangeMin = (e) => {
        setMin(e.target.value)
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
        axios.post('http://localhost:5000/api/challen/posts', postContent, {withCredentials: true})
            .then(() => {
                    alert('챌린지 등록이 완료되었습니다.')
                    history.push('/challenge/all')
                }
            )
    }

    useEffect(() => {
        const nowDate = new Date();
        setDate(moment(nowDate).format('YYYY-MM-DD'))
    }, [])

    useEffect(() => {
        if ( (postContent.category === 'resource' || postContent.category === 'traffic')&& postContent.plan !== '' && postContent.plan !== 'etc') {
            axios.get(`http://localhost:5000/api/calculator?category=${postContent.category}&plan=${postContent.plan}`)
                .then(response => {
                        setPostContent({...postContent, reducedCarbon: response.data.reducedCarcon})
                    }
                )

        }
    }, [postContent.category, postContent.plan])
    console.log(postContent)

    const onCalculate = () => {
        axios.get(`http://localhost:5000/api/calculator?category=${postContent.category}&plan=${postContent.plan}&sparedTime=${min}`)
            .then(response => {
                    setPostContent({...postContent, reducedCarbon: response.data.reducedCarcon})
                }
            )


    }
    return (
        <div className="Posting">
            <div className="Posting_title">
                <p><strong style={{border: '1px solid #707070', padding: '0.5vh 0.5vw'}}>{date}</strong> 당신의 <strong
                    style={{backgroundColor: 'rgba(64,124,79,0.2)'}}>작은 실천</strong>이 지구를 바꿉니다.</p>
            </div>
            <div className="Posting_cont">
                <p>챌린지 인증 사진</p>
                <Image postContent={postContent} setPostContent={setPostContent}/>
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
                    {selectPlan && <Select options={selectPlan} onChange={onChangePlan}/>}
                </form>
                {etc &&
                <div>
                    <p>기타 실천 방안</p>
                    <form>
                        <input name="etcPlan" onChange={onChangeContent} placeholder="실천 방안"/>
                    </form>
                </div>
                }
                <p>내용</p>
                <form>
                    <textarea name="content" onChange={onChangeContent} rows="4"/>
                </form>
                {calculate && postContent.plan !== '' && !etc &&
                <div>
                    <p>탄소 저감량 계산하기</p>
                    <div className="cal_input">
                        <input className="minutes" value={min} onChange={onChangeMin}
                               placeholder="실천하신 시간(분 단위)을 입력해주세요."/>
                        <button className="cal_btn" type="button" onClick={onCalculate}>계산하기</button>
                    </div>
                </div>
                }
                {postContent.reducedCarbon && <div className="reduce_carcon"><strong
                    style={{backgroundColor: 'rgba(64,124,79,0.2)'}}>{postContent.reducedCarbon}</strong>mg 만큼의 탄소를
                    감량했습니다</div>}
                <div className="Posting_btn">
                    <button onClick={handleUpload}>등록하기</button>
                </div>
            </div>
        </div>
    )
}

export default Posting