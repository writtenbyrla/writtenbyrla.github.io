import { useCallback, useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  // 오늘 날짜 받아오기(오늘 날짜 기준으로)
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1, // 월은 0부터 시작
    date: new Date().getDate(),
    day: new Date().getDay(),
  };
  //console.log(today.month); // 10월
  //console.log(today.date); // 5일
  //console.log(today.day); // 4(목요일)

  // 현재 선택된 연, 월
  // 연
  const [selectedYear, setSelectedYear] = useState(today.year);
  // 월
  const [selectedMonth, setSelectedMonth] = useState(today.month);

  // 이번달 마지막날 날짜, 요일 구하기
  const thisLast = new Date(selectedYear, selectedMonth, 0);
  const tlDate = thisLast.getDate();
  const tlDay = thisLast.getDay();
  //console.log(selectedMonth); // 10 => 실질적으로 11월이니까
  //console.log(thisLastDate); // 31 => 이전달(10)의 마지막인 31
  //console.log(thisLastDay); // 2 => 10월 31일 화요일

  // 이전달 마지막날 날짜, 요일
  const prevLast = new Date(selectedYear, selectedMonth - 1, 0);
  const plDate = prevLast.getDate();
  const plDay = prevLast.getDay();
  console.log();

  // 일~토 요일 출력 함수
  // 요일에 대한 배열
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  // 1~30(31) 출력 함수
  const returnDay = useCallback(() => {
    // 호출될때마다 초기화해야함(이전달, 현재달, 다음달 날짜 배열)
    const prevDates = [];
    const thisDates = [];
    const nextDates = [];

    // 지난달 마지막주 요일 배열에 담기
    // 지난 달의 마지막 요일이 토요일이 아닌 경우
    if (plDay !== 6) {
      for (let i = 0; i < plDay + 1; i++) {
        prevDates.unshift(plDate - i);
      }
    }

    // 현재달 날짜 배열에 담기
    for (let day = 1; day <= tlDate; day++) {
      thisDates.push(day);
    }

    // 다음달 첫째주 요일 배열에 담기
    for (let i = 1; i < 7 - tlDay; i++) {
      nextDates.push(i);
    }

    // 날짜 합치기
    const dates = prevDates.concat(thisDates, nextDates);

    return dates;
  }, [selectedMonth]); // 달 이동시 호출

  const row = 7; // 배열을 화면에 7개씩 출력하도록 지정
  const group = [];
  // 7의 배수만큼 배열을 slice
  for (let i = 0; i < returnDay().length; i += row) {
    // slice(0,7) => 0~6까지
    // slice(7, 14) => 7~13까지 그룹핑, ...
    group.push(returnDay().slice(i, i + row));
  }

  // 이전달 보기 버튼
  const prevMonth = useCallback(() => {
    if (selectedMonth === 1) {
      // 1월에서 이전달 버튼 누르면 작년 12월로 돌아가야하니까
      setSelectedYear(selectedYear - 1); // 전년도로 설정
      setSelectedMonth(12); // 12월로 설정
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  }, [selectedMonth]); // selectedMonth를 매개변수로 지정하여 선택월이 변경될때만 이 함수호출

  // 다음달 보기 버튼
  const nextMonth = useCallback(() => {
    if (selectedMonth === 12) {
      setSelectedYear(selectedYear + 1);
      setSelectedMonth(1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  }, [selectedMonth]);

  return (
    <>
      <div className="calendar">
        <div className="head">
          <button onClick={prevMonth} className="prevMonth">
            prev
          </button>
          <div className="selectedYM">
            {selectedYear}년 {selectedMonth}월
          </div>
          <button onClick={nextMonth} className="nextMonth">
            next
          </button>
        </div>
        <div className="body">
          <div className="week">
            {week.map((item, itemIndex) => (
              <div key={itemIndex} className="weekrow">
                {item}
              </div>
            ))}
          </div>
          <div className="day">
            {group.map((row, index) => (
              <div key={index} className="dayrow">
                {row.map((item, itemIndex) => (
                  <div key={itemIndex} className="dayitem">
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
