import Calendar from "react-calendar";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./scheduleMain.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Planner() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="content">
      <div className="left-section">
        {/* 사용자 아이콘 */}
        <div className="studyGroup">
          <div>사용자 아이콘</div>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        {/* 달력 영역 */}
        <div className="calendar">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>

      {/* 일정 목록 */}
      <div className="right-section">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>캘린더 디자인 다듬기</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>멤버 프로필 가져오기</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>DB 수정</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>파일 첨부하기 기능</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>휴일엔 쉬기</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>주말엔 엽떡먹기</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>휴...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Planner;
