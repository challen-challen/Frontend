import React from 'react'

function Posting() {
    return (
        <div className="Posting">
            <div  className="Posting_title">
                <p>당신의 작은 실천이 지구를 바꿉니다.</p>
            </div>
            <div  className="Posting_cont">
                <p>챌린지 인증 사진</p>
                <div  className="Posting_cont_img">
                <input type="file" />
                <img src="images/tumblr.png" alt="tumblr" width={110} height={110} />
            </div>
            </div>
            <div className="Posting_cont_input">
                <p>카테고리</p>
                <form>
                    <select>
                        <option value="1">전기 부문</option>
                        <option value="2">교통 부문</option>
                        <option value="3">냉낭방 부문</option>
                        <option value="4">자원 부문</option>
                    </select>
                </form>
                <p>제목</p>
                <form>
                    <input placeholder="제목" />
                </form>
                <p>실천 방안</p>
                <form>
                    <input placeholder="제목" />
                </form>
                <p>내용</p>
                <form>
                    <textarea  rows="4" />
                </form>
                <div className="Posting_btn">
                    <button>등록하기</button>
                </div>
            </div>
        </div>
    )
}

export default Posting
