import React, {useEffect} from 'react'
import MainPage_Challenge from './MainPage_Challenge'
import MainPage_Charts from './MainPage_Charts'
import MainPage_Current from './MainPage_Current'
import MainPage_Info from './MainPage_Info'
import MainPage_Start from './MainPage_Start'
import axios from "axios";

function MainPage() {

    useEffect(() => {
        axios.get(`${process.env.API_SERVER}/api/setUser`, {withCredentials: true}).then(
            (response) => {
                sessionStorage.setItem('user', response.data.user._id)
            }
        ).then(error => error)
    }, [])

    return (
        <div id="main_page">
            <MainPage_Current/>
            <MainPage_Start/>
            <MainPage_Info/>
            <MainPage_Charts/>
           {/* <MainPage_Challenge/>*/}
        </div>
    )
}

export default MainPage
