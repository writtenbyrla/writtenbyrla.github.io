import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";
import { addSchedule } from "../../api/schedule";
//import { useNavigate } from "react-router-dom";

const ScheduleStyle = styled.div`
  .scheduleBody {
    width: 1000px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .scheduleContent {
    width: 600px;
    height: 600px;
    background-color: antiquewhite;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .registerSchedule {
    /* border: 1px solid lightcoral; */
    width: 500px;
    height: 500px;
  }
  .add {
    width: 100%;
    height: 50px;
    /* border: 1px solid lightcoral; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #date {
    width: 150px;
    height: 20px;
    margin-top: 13px;
    margin-right: 15px;
    /* border: 1px solid lightsalmon; */
  }
  .fa-plus {
    width: 20px;
    height: 20px;
    /* border: 1px solid gray; */
    margin-right: 15px;
  }

  .fa-xmark {
    width: 20px;
    height: 20px;
    /* border: 1px solid gray; */
    margin-right: 15px;
  }

  #exampleFormControlTextarea1 {
    height: 200px;
  }
`;

const Schedule = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [date, setDate] = useState([]);

  // const navigate = useNavigate();

  const onClick = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("date", date);

    // navigate("/schedule");
    console.log("title : " + formData.get("title"));
    console.log("content : " + formData.get("content"));
    console.log("date : " + formData.get("date"));

    addSchedule(formData);
  };

  return (
    <ScheduleStyle>
      <div className="scheduleBody">
        <div className="scheduleContent">
          <form className="registerSchedule" action="registerSchedule">
            <div className="add">
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <FontAwesomeIcon icon={faPlus} onClick={onClick} />
              <FontAwesomeIcon icon={faXmark} />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                제목
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                내용
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </ScheduleStyle>
  );
};

export default Schedule;
