

import React from 'react';
import './CourseBox.css'
import CourseList from './CourseList';
import { useSelector } from 'react-redux';



//달력 아이콘 이미지
//https://png.pngtree.com/png-vector/20190328/ourlarge/pngtree-vector-calendar-icon-png-image_872118.jpg
const CourseBox = ({ state }) => {
  const userName = useSelector(state => state.userName);
  const courseList = useSelector(state => state.courseList);


  return (
    <div className='main'>
      <div className='main_title'>
        <div>

          <img alt='달력이미지' className='cal_img' src='https://png.pngtree.com/png-vector/20190328/ourlarge/pngtree-vector-calendar-icon-png-image_872118.jpg' />
          <strong> 운영중인 강좌</strong>
        </div>
        <div>{userName}님 반갑습니다</div>
        <div className='mix_button_div_style'>
          <button className='mix_button_style'>하나의 운영강좌로 묶기</button>
        </div>
      </div>

      <hr />
      {courseList.map((c, i) => {
        return (
          <CourseList key={i} data={c} />
        )
      })}

    </div>
  );
};

// export default CourseBox;

export default CourseBox

