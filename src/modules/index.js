// import { combineReducers } from "redux";
// import course from "../modules/course";



// const rootReducer = combineReducers({
//   course
// })

// export default rootReducer


const initialState = {
  courseList: [
    {
      id: 1,
      title: '2021학년도 원격수업 역량강화 워크숍(1차)',
      teacher: '유승범, 강성민 연구원',

      class: '1분반',
      leave_week: 3

    },
    {
      id: 2,
      title: '고급해석학의 기초 개념',
      teacher: '정영록, 홍성금 교수',

      class: '1분반',
      leave_week: 12

    }
  ],
  userName: '안현상'
}


const rootReducer = (state = initialState, action) => state;

export default rootReducer;