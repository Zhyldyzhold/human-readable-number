import React from "react";
import { coursesApi } from "../helpers/const";

export const Context = React.createContext();

const reducer = (state, action) => {
  if (action.type === "GET_COURSES") {
    return {
      ...state,
      courses: action.payload,
    };
  }
  if (action.type === "GET_COURSE_TO_EDIT") {
    return {
      ...state,
      courseToEdit: action.payload,
    };
  }
  return state;
};

function Provider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    courses: [],
    courseToEdit: null,
  });

  const sendCourse = (newCourse) => {
    fetch(coursesApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    });
  };

  const getCourses = () => {
    fetch(coursesApi)
      .then((res) => res.json())
      .then((courses) => {
        let action = {
          type: "GET_COURSES",
          payload: courses,
        };
        dispatch(action);
      });
  };

  const deleteCourse = (id) => {
    fetch(`${coursesApi}/${id}`, {
      method: "DELETE",
    }).then(() => getCourses());
  };

  const getCourseToEdit = (id) => {
    fetch(`${coursesApi}/${id}`)
      .then((res) => res.json())
      .then((course) => {
        let action = {
          type: "GET_COURSE_TO_EDIT",
          payload: course,
        };
        dispatch(action);
      });
  };

  const data = {
    sendCourse,
    getCourses,
    deleteCourse,
    getCourseToEdit,
    courses: state.courses,
    courseToEdit: state.courseToEdit,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export default Provider;
