import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainPage from './components/Main/MainPage';
import Posting from './components/Posting/Posting';
import Header from './components/Header';
import Footer from './components/Footer';
import MyPage from './components/MyPage/MyPage';
import Feed from "./components/Feed/Feed";
import FeedDetail from "./components/FeedDetail/FeedDetail";
import Ranking from "./components/Rankging/Ranking";
import AppLayout from "./components/AppLayout";


function AppRouter() {
    return (
            <Router>
                <AppLayout >
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/mypage" component={MyPage}/>
                        <Route exact path="/posting" component={Posting}/>
                        <Route exact path="/challenge/:category" component={Feed}/>
                        <Route path="/challenge/:category/:id" component={FeedDetail}/>
                        <Route path="/ranking" component={Ranking} />
                    </Switch>
                </AppLayout>
            </Router>
    )
}

export default AppRouter
