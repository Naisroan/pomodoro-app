import React from 'react';

import './PageTitle.css';

interface ICPageTitle {
  icon: string,
  title: string,
  description: string
}

const PageTitle = (props : ICPageTitle) => {
  return (
    <>
    <div id="pagetitle" className="mb-5 p-3 bg-light">
      <h4 className="title">
        {props.title}
      </h4>
      <p className="desc text-muted mb-0">
        {props.description}
      </p>
    </div>
    </>
  );
};

export default PageTitle;