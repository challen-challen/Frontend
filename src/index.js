import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./components/Header.css";
import "./components/Footer.css";
import "./components/Main/MainPage.css";
import "./components/Posting/Posting.css";
import "./components/MyPage/MyPage.css";
import axios from "axios";

async function loadUser () {
    await axios.get('http://localhost:5000/api/setUser').then(
        response=>console.log(response)
    ).then(error => error)
}

loadUser();

ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );


