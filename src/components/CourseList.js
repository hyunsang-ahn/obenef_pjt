import React from 'react';
import './CourseList.css'
import WeekBox from './WeekBox';


//체크박스 이미지
//https://toppng.com/uploads/preview/checked-checkbox-icon-checkbox-ico-115632629493xkxpf63d8.png
const CourseList = (props) => {
  var rows = [];
  for (var i = 0; i < props.data.leave_week; i++) {
    rows.push(<WeekBox key={i} week={i + 1} />);
  }
  return (
    <>
      <div className='CourseList'>
        <div className='checkbox'>
          <img alt='체크박스 이미지' src='https://toppng.com/uploads/preview/checked-checkbox-icon-checkbox-ico-115632629493xkxpf63d8.png' className='check_img' />
        </div>
        <div className='contents'>
          <div className='title'>
            <div className='course_title'>{props.data.title}</div>
            <div className='course_class'>{props.data.class}</div>
            <div className='course_teacher'>{props.data.teacher}</div>
            <div className='open_button_div_style'>
              <button className='open_button_style'>▼열림</button>
            </div>
            <div className='down_button_div_style'>
              <button className='down_button_style'>학습진도율 일괄 다운로드 생성</button>

            </div>


          </div>
          <div className='content'>
            <div className='course_list_box'>
              <small>
                강의
                <br />
                목차
              </small>

            </div>
            {rows}

          </div>
        </div>
      </div>
    </>
  );
};

export default CourseList;