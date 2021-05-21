import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./components/Header.css";
import "./components/Footer.css";
import "./components/Main/MainPage.css";
import "./components/Posting/Posting.css";
import "./components/MyPage/MyPage.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

