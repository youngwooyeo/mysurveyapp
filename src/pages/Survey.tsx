import React from 'react';
import "./pages.css";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function Survey() {

  const [nowStep, setNowStep] = useState(1);


  const onPrev = () => {
    if (nowStep > 1) {
      setNowStep(nowStep - 1);
      console.log("Prev %d", nowStep);
    }
  };

  const onNext = () => {

    if (nowStep < 5) {

      setNowStep(nowStep + 1);

    }
  }

  // input radio

  const genderList = [
    { value: "남성", label: "남성" },
    { value: "female", label: "여성" }

  ];
  const ageList = [
    { value: "남성", label: "    19세 미만" },
    { value: "남성", label: "    19~29세" },
    { value: "남성", label: "30~39세" },
    { value: "남성", label: "    40~49세" },
    { value: "남성", label: "50~59세" },
    { value: "female", label: "60세 이상" }
  ];

  const qustionStep301 = [
    { value: "남성", label: " 인터넷 검색(포털, 블로그, SNS 등)을 통해서" },
    { value: "남성", label: "  연구보고서, 발표자료 등의 인쇄물을 통해서" },
    { value: "남성", label: "  신문, 방송 등 언론매체를 통해서" },
    { value: "남성", label: "주변사람의 소개 및 권유로" },
    { value: "남성", label: "타 기관 홈페이지를 통해서" },

    { value: "female", label: "기타" }

  ];
  const qustionStep312 = [
    { value: "남성", label: "남성" },
    { value: "남성", label: "남성" },
    { value: "남성", label: "남성" },
    { value: "남성", label: "남성" },
    { value: "남성", label: "남성" },
    { value: "남성", label: "남성" },
    { value: "남성", label: "남성" },
    { value: "female", label: "여성" }

  ];
  const qustionStep302 = [
    { value: "남성", label: "  주 3회 이상" },
    { value: "남성", label: " 주 1~2회" },
    { value: "남성", label: "월 1~2회" },
    { value: "남성", label: "분기별 1~2회" },
    { value: "female", label: "1년 1~2회" }

  ];

  const qustionStep303 = [
    { value: "남성", label: "  연구사업 결과물  (연구보고서/정책보고서/워킹페이퍼/이슈브리프/통계브리프 등)" },
    { value: "남성", label: "  교육사업 결과물  (교육교재, 워크숍 자료 등)" },
    { value: "남성", label: " 협력사업 결과물  (심포지엄/초청강연/토론회/세미나자료)" },
    { value: "남성", label: "  Weekly Report" },
    { value: "남성", label: "글로벌 뉴스" },
    { value: "남성", label: "정책 동향" },
    { value: "남성", label: "연구 동향" },
    { value: "female", label: "기타" }

  ];


  const qustionStep306 = [
    { value: "남성", label: "1. ○○정책 관련정보가 신속하게 제공되고 있다(신속성)" },
    { value: "남성", label: "2. 제공되는 ○○정책 관련 정보가 다양하다(다양성)" },
    { value: "남성", label: "3. 제공되는 ○○정책 관련 정보가 유용하다(유용성)" }
  ];

  const qustionStep307 = [
    { value: "남성", label: "매우 그렇지 않다" },
    { value: "남성", label: "그렇지 않은 편이다" },
    { value: "남성", label: "보통이다" },
    { value: "남성", label: "그런편이다" },
    { value: "남성", label: "매우 그렇다" }
  ];




  const qustionStep304 = [
    { value: "남성", label: "대학 재학 이하" },
    { value: "남성", label: " 대학 졸업(학사)" },
    { value: "남성", label: "석사 졸업(과정 포함)" },

    { value: "female", label: "박사 졸업(과정 포함)" }

  ];

  const qustionStep305 = [
    { value: "남성", label: "정부부처 공무원" },
    { value: "남성", label: "지방자치단체 공무원" },
    { value: "남성", label: "대학/교육기관 교강사" },
    { value: "남성", label: "대학/교육기관 학생(학부생, 대학원생)" },
    { value: "남성", label: "공기업 등 공공기관 종사자" },
    { value: "남성", label: "연구기관 연구원" },
    { value: "남성", label: "민간기업 근로자" },
    { value: "남성", label: "NGO 등 비영리기관 종사자" },
    { value: "female", label: "기타" }

  ];


  const qustionStep308 = [
    { value: "남성", label: "매우 어렵다" },
    { value: "남성", label: "어려운 편이다" },
    { value: "남성", label: "보통이다" },
    { value: "남성", label: "쉬운 편이다" },
    { value: "female", label: "매우 쉽다" }
  ];











































  const [gender, setGender] = useState(null);

  const handleChange = () => {
    //setGender(e.target.value);
  }

  return (
    <div className="survey">


      {nowStep === 1 &&
        <div className="survey-con">
          <div className="survey-con-cell">
            안녕하십니까?<br />
            ○○○연구원에서는 '2019년 연구성과물에 대한 만족도 조사’를 진행하고 있습니다.
            본 설문조사를 통해 얻어진 응답자분들의 객관적 평가는 향후 보다 수준 높고, 이용자 수요에 부합하는 연구서비스를 제공하는데 쓰일 것입니다.
            응답해 주시는 모든 내용은 통계적으로만 사용되며 비밀은 철저히 보장됨을 약속드립니다.
            바쁘시더라도 많은 협조 부탁드립니다.
            감사합니다.
          </div>
          <div className='survey-con-button-con'>

            <div className='survey-con-button' onClick={() => onNext()}>
              다 음
            </div>
          </div>
        </div>
      }
      {nowStep === 2 &&
        <div className="survey-con">
          <div className="survey-con-cell">

            * SQ1. 귀하의 성별은 어떻게 되십니까?<br />
            {genderList.map((x, i) => <label key={i}>
              <input
                type="radio"
                name="gender"
                value={x.value}
                onChange={handleChange}
              /> {x.label}
            </label>)}


            <br /><br />


            * SQ2. 귀하의 연령대는 어떻게 되십니까?<br />
            {ageList.map((x, i) => <label key={i}>
              <input
                type="radio"
                name="gender"
                value={x.value}
                onChange={handleChange}
              /> {x.label}
            </label>)}

          </div>
          <div className='survey-con-button-con'>
            <div className='survey-con-button' onClick={() => onPrev()}>
              이 전
            </div>
            <div className='survey-con-button' onClick={() => onNext()}>
              다 음
            </div>
          </div>
        </div>
      }
      {nowStep === 3 &&
        <div className="survey-con">
          <div className="survey-con-cell">
            * 1. 선생님께서는 ‘○○○’ 웹사이트를 어떻게 알게 되셨습니까?<br />
            {qustionStep301.map((x, i) => <label key={i}>

              <input
                type="radio"
                name="gender"
                value={x.value}
                onChange={handleChange}
              /> {x.label}<br />
            </label>
            )}
            <br /><br />

            * 2. 선생님께서는 ‘○○○’ 웹사이트를 얼마나 자주 방문하십니까?<br />
            {qustionStep302.map((x, i) => <label key={i}>

              <input
                type="radio"
                name="gender"
                value={x.value}
                onChange={handleChange}
              /> {x.label}<br />
            </label>
            )}
            <br /><br />





            * 3. 선생님께서 ‘○○○’ 웹사이트 방문 시 활용하시는 정보는 무엇입니까?<br />
            여러 개를 선택할 수 있습니다.<br />
            {qustionStep303.map((major, i) =>
              <label key={i} htmlFor='major'>
                <input type='checkbox' id='major'
                  checked={false}
                // onChange={(e) => handleOnChangeCheckMajor(e, major)} 
                ></input>
                {major.label}<br />
              </label>
            )}
            <br /><br />

            * 4. 선생님께서 보시기에 ‘○○○’ 웹사이트는 원하는 정보를 찾기가 용이하다고 보십니까?<br />
            {qustionStep308.map((x, i) => <label key={i}>

              <input
                type="radio"
                name="gender"
                value={x.value}
                onChange={handleChange}
              /> {x.label}<br />
            </label>
            )}
            <br /><br />


            4-1. 웹사이트에서 원하는 정보를 찾기가 용이하도록 개선해야 될 점이 있다면은 구체적으로 적어 주세요.<br />
            <div className='input-con'>

            <textarea style={{height: 80, width: 780, fontSize:18, padding:10 } }   id="fname" name="fname"  aria-labelledby="placeholder-fname" />
</div>
            <br /><br />




            * 5. 지난 1년간(2019년) ‘○○○’ 웹사이트에서 제공한 ○○정책에 대한 정보에 대하여 다음 항목별로 평가해 주십시오.
            <div className='div-table'>
              <div className='div-tr'>
                <div className='div-td-title'> </div>
                <div className='div-td-content'>

                  <div className='div-td'>매우            그렇지            않다</div>
                  <div className='div-td'>그렇지            않은            편이다</div>
                  <div className='div-td'>보통                이다</div>
                  <div className='div-td'>그런                편이다</div>
                  <div className='div-td'>매우                그렇다</div>
                </div>
              </div>
            </div>



            <div className='div-table'>
              {qustionStep306.map((x, i) =>
                <div className={i === 1 ? 'div-tr1' : 'div-tr2'}>
                  <div className='div-td-title'>{x.label}</div>
                  <div className='div-td-content'>
                    {qustionStep307.map((y, i) =>
                      <div className='div-td'>
                        <label key={i}>
                          <input
                            type="radio"
                            name="gender"
                            value={y.value}
                            onChange={handleChange}
                          />
                        </label>
                      </div>

                    )}
                  </div>
                </div>
              )}
            </div>
            <br /><br />
          </div>
          <div className='survey-con-button-con'>
            <div className='survey-con-button' onClick={() => onPrev()}>
              이 전
            </div>
            <div className='survey-con-button' onClick={() => onNext()}>
              다 음
            </div>
          </div>
        </div>
      }
      {nowStep === 4 &&
        <div className="survey-con">
          <div className="survey-con-cell">
            <h2>응답자 일반사항</h2>
            * DQ1. 선생님의 최종 학력은 어떻게 되십니까?<br />
            {qustionStep304.map((x, i) => <label key={i}>
              <input
                type="radio"
                name="gender"
                value={x.value}
                onChange={handleChange}
              /> {x.label}
            </label>)}

            <br /><br />
            * DQ2. 선생님의 현재 직업은 어떻게 되십니까?<br />
            {qustionStep305.map((x, i) => <label key={i}>
              <input
                type="radio"
                name="gender"
                value={x.value}
                onChange={handleChange}
              /> {x.label}<br />
            </label>)}


            <br /><br />
            * DQ3. 해당 분야의 종사 기간은 총 몇 년이십니까?
            숫자로만 기입해주시길 바랍니다.<br />
            <div className='input-con'>
            <input style={{height: 30, width: 600}} type="text" id="fname" name="fname"  aria-labelledby="placeholder-fname" />
</div>

          </div>
          <div className='survey-con-button-con'>
            <div className='survey-con-button' onClick={() => onPrev()}>
              이 전
            </div>
            <div className='survey-con-button' onClick={() => onNext()}>
              다 음
            </div>
          </div>
        </div>
      }

      {nowStep === 5 &&
        <div className="survey-con">
          <div className="survey-con-cell">
            <h2>설문이 모두 종료되었습니다.</h2>
            의견에 진심으로 감사드립니다.<br />



            <br /><br />

          </div>
          <div className='survey-con-button-con'>
            <div className='survey-con-button' onClick={() => onPrev()}>
              이 전
            </div>

            <div className='survey-con-button'>
              <Link to="/">
                <div >
                  완 료
                  </div>
              </Link>

            </div>

          </div>
        </div>
      }
    </div>
  );
}

export default Survey;
