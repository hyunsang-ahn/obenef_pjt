import React from 'react';
import './WeekBox.css'
//컴퓨터 아이콘
//https://cdn-icons-png.flaticon.com/512/2004/2004699.png
const WeekBox = (props) => {
  return (
    <>
      <div className='week_box'>
        <img alt='컴퓨터 이미지' className="com_img" src='https://cdn-icons-png.flaticon.com/512/2004/2004699.png' />
        <small>
          {props.week}주차
        </small>
      </div>
    </>

  );
};

export default WeekBox;