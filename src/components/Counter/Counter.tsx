import React from 'react';

import './Counter.css';

interface ICCounter {
  title: string,
  count: number,
  icon: string,
  isSecond: boolean
};

const Counter = (props : ICCounter) => {

  const formatSeconds = (s : number) => {
    const m = Math.floor(s % 3600 / 60).toString().padStart(2,'0');
    const ss = Math.floor(s % 60).toString().padStart(2,'0');
    return m + ':' + ss;
  }

  return (
    <>
      <div className={"pomcounter card text-light bg-dark shadow " + (!props ? "" : "")}>
        <div className="card-icon mx-3">
          <i className={props.icon}></i>
        </div>
        <div className="card-body">
          <h5 className="card-title">   
            { props.isSecond ? formatSeconds(props.count) : props.count }
          </h5>
          <p className="card-text">
            { props.title }           
          </p>
        </div>
      </div>
    </>
  )
};

export default Counter;