import React from 'react'
import { faCompass, faMedal, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
  
function header() {
    return (
        <div className="header">
            <Router>
            <Link to="/"><img src="/images/logo.png" alt="logo" /></Link>
            <div className="header_icon">
            <Link to="/mypage"><FontAwesomeIcon icon={faUser} size="2x" style={{marginLeft:'8px', color:"green"}}/></Link> 
             <Link to="/posting"><FontAwesomeIcon icon={faMedal} size="2x"  style={{marginLeft:'8px', color:"green" }}/></Link>
            <FontAwesomeIcon icon={faCompass} size="2x"  style={{marginLeft:'8px', color:"green"}}/>
            </div>
            </Router>
        </div>
    )
}

export default header
