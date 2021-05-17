import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './components/Main/MainPage';
import Posting from './components/Posting/Posting';
import Header from './components/Header';
import Footer from './components/Footer';
import MyPage from './components/MyPage/MyPage';




function AppRouter() {
    return (
        <div>
            <Router>
                <>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/mypage" component={MyPage} />
                        <Route exact path="/posting" component={Posting} />
                    </Switch>
                    <Footer />
                </>
            </Router>
        </div>
    )
}

export default AppRouter
