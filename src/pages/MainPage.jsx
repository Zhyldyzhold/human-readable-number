import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Provider";

function MainPage() {
  const { getCourses, courses, deleteCourse } = React.useContext(Context);

  React.useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="main-page container">
      <h2>Курсы Бишкека: </h2>
      <div className="row">
        {courses.map((item) => (
          <div className="col col-sm-6 col-12 col-md-4" key={item.id}>
            <div className="card">
              <img src={item.photo} alt="" className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <div className="d-flex justify-content-between align-item-center">
                  <a href={item.address} target="_blank">
                    Aдрес
                  </a>
                  <Link to={`/edit/${item.id}`}>Редактировать</Link>
                  <button
                    onClick={() => deleteCourse(item.id)}
                    className="btn btn-danger"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
