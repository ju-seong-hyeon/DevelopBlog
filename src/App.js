/* esLint-disable */

import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Career from './Component/career';

function App() {
  let [title, ch_title] = useState(['동원 엔터프라이즈 입사']);
  let [count, ch_count] = useState(0);
  const careerValue= ['프로젝트 1 : 사용자 귀속부서 변경' , '프로젝트 2 : SMS 전송 내역 및 통계 현황', '인턴 프로젝트 발표'];
  const carearDate = ['2022년 7월 4일 ~ 2022년 7월 25일', '2022년 7월 27일 ~ 2022년 8월 3일' , '2022년 8월 3일'];

  function Change_title(){
    var newArray = [...title];
    newArray[0] = '동원 엔터프라이즈 퇴사'
    ch_title(newArray);
  }

  return (
    <div className = "App">
        <div className = "black-nav">
            <div> 개발 Blog  </div>



        </div>

        <div className = 'list'>
            <h3> {title[0]} <span onClick = { ()=>{ ch_count(count+1) } }> 😀 </span> {count}</h3>
            <p> 2022년 6월 27일 ~</p>

            <hr/>
        </div>

        <Career value = {careerValue[0]} date = {carearDate[0]}/>
        <Career value = {careerValue[1]} date = {carearDate[1]}/>
        <Career value = {careerValue[2]} date = {carearDate[2]}/>

    </div>
  );
}


export default App;
