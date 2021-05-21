import React from 'react'
import {faCompass, faMedal, faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

function header() {
    const user = true;
    return (
        <div className="header">
            <Link to="/"><img src="/images/logo.png" alt="logo" style={{marginLeft: '10px'}}/></Link>
            {user ? <div className="header_icon">
                <Link to="/mypage"><FontAwesomeIcon icon={faUser} size="2x" style={{
                    marginLeft: '8px',
                    color: "#40804F",
                    width: '20px'
                }}/></Link>
                <Link to="/ranking"><FontAwesomeIcon icon={faMedal} size="2x" style={{
                    marginLeft: '8px',
                    color: "#40804F",
                    width: '25px'
                }}/></Link>
                <Link to="/challenge/all"><FontAwesomeIcon icon={faCompass} size="2x" style={{
                    marginLeft: '8px',
                    marginRight: '10px',
                    color: "#40804F",
                    width: '23px'
                }}/></Link>
            </div> :<Link to="/login/naver" id="login_btn">로그인</Link>}

        </div>
    )
}

export default header
