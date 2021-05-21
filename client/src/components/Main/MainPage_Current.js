import React from 'react'
import Slider from "react-slick";


function MainPage_Current() {

    const settings = {
        className: "center",
      centerMode: true,
        centerPadding: "10px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    };


    return (
        /*
        <div className="MainPage_Current">

            <div className="MainPage_Current_title">
                <p>오늘의 챌린지 현황</p>
            </div>

            <div className="MainPage_Current_boxes">

                <div className="MainPage_Current_box">
                    <p>오늘 참여자 수</p>
                    <p>+30명</p>
                    <p>어제보다 00명 적어요</p>
                </div>
                <div className="MainPage_Current_box">
                    <p>총 챌린지 갯수</p>
                    <p>+320개</p>
                    <p>-</p>
                </div>
                <div className="MainPage_Current_box">
                    <p>오늘 챌린지 갯수</p>
                    <p>+40개</p>
                    <p>어제보다 00개 적어요</p>
                </div>

            </div>

        </div>
        */
        <div className="MainPage_Current">
            <div className="MainPage_Current_title">
                <p>오늘의 챌린지 현황</p>
            </div>
            <div className="MainPage_Current_boxes">
                <Slider {...settings}>
                <div className="MainPage_Current_box">
                    <p>오늘 참여자 수</p>
                    <p>+30명</p>
                    <p>어제보다 00명 적어요</p>
                </div>
                <div className="MainPage_Current_box">
                    <p>총 챌린지 갯수</p>
                    <p>+320개</p>
                    <p>-</p>
                </div>
                <div className="MainPage_Current_box">
                    <p>오늘 챌린지 갯수</p>
                    <p>+40개</p>
                    <p>어제보다 00개 적어요</p>
                </div>
                <div className="MainPage_Current_box">
                    <p>오늘 참여자 수</p>
                    <p>+30명</p>
                    <p>어제보다 00명 적어요</p>
                </div>
                </Slider>
            </div>
        </div>
    )
}

export default MainPage_Current
