import React from 'react';
import "./pages.css";
import { Link } from "react-router-dom";

interface Identification {
  nowStep : number;
  func(): void // 파라미터와 함수의 return이 없을 경우
  // func2(id: number): void // 파라미터가 있고 함수의 return이 없을 경우
  // func3(id: number): UserType // 파라미터와 return값이 있을 경우 
}



function Home() {
  return (
    <div className="home">
      <div className='home-con'>
        <div className='home-top'>
          진행중인 설문조사
        </div>
        <div className='home-main'>
          <div className='home-main-cell'>
            <img className="image-panel" style={{ width: 274, height: 274 }} src="/images/survey01.png" alt="Survey1" />
            <h3>연구성과 만족도조사</h3>
            <h5>01/3 - 07/28</h5>
            <div className='home-main-cell-sub'>
              기본적인 온라인 설문지 제작 형태입니다. 다양한 만족도 조사를 지원합니다.
            </div>
            <Link to="/Survey">
              <div className='home-main-cell-button'>
                설문지 작성하기
              </div>
            </Link>
          </div>

          <div className='home-main-cell'>
            <img className="image-panel" style={{ width: 274, height: 274 }} src="/images/survey02.png" alt="Survey1" />
            <h3>전문가 의견조사
            </h3>
            <h5>01/19 - 06/23

            </h5>
            <div className='home-main-cell-sub'>
              기본적인 온라인 설문지 형태이며, 이미지를 포함하여 설문 응답자의 이해를 돕습니다.
            </div>
            <Link to="/Survey">
              <div className='home-main-cell-button'>
                설문지 작성하기
              </div>
            </Link>
          </div>

          <div className='home-main-cell'>
            <img className="image-panel" style={{ width: 274, height: 274 }} src="/images/survey03.png" alt="Survey1" />
            <h3>시민 인식조사
            </h3>
            <h5>01/21 - 11/23

            </h5>
            <div className='home-main-cell-sub'>
              전국민 혹은 특정 지역의 주민을 대상으로 설문조사를 진행합니다.
            </div>
           
            <Link to="/Survey">
              <div className='home-main-cell-button'>
                설문지 작성하기
              </div>
            </Link>
            
          </div>







        </div>
      </div>
    </div>
  );
}

export default Home;
