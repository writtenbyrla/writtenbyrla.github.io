import "bootstrap/dist/css/bootstrap.min.css";
import "./registerSchedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const Schedule = () => {
  return (
    <div className="scheduleBody">
      <div className="scheduleContent">
        <form className="registerSchedule" action="registerSchedule">
          <div className="add">
            <div className="mb-3">
              <input type="date" className="form-control" id="date" />
            </div>
            <FontAwesomeIcon icon={faPlus} />
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              내용
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Schedule;
