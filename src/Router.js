import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainPage from './components/Main/MainPage';
import Posting from './components/Posting/Posting';
import Header from './components/Header';
import Footer from './components/Footer';
import MyPage from './components/MyPage/MyPage';
import Feed from "./components/Feed/Feed";
import FeedDetail from "./components/FeedDetail/FeedDetail";


function AppRouter() {
    return (
            <Router>
                <>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/mypage" component={MyPage}/>
                        <Route exact path="/posting" component={Posting}/>
                        <Route exact path="/challenge/:category" component={Feed}/>
                        <Route path="/challenge/:category/:id" component={FeedDetail}/>
                    </Switch>
                    <Footer/>
                </>
            </Router>
    )
}

export default AppRouter
