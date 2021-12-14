import React from 'react';
import './keydetails.css';

const KeyDetails = ({ data }) => {
  return (
    <div className="detail-wrapper">
      <div className="header">
        <img src={data.photo} alt={data.photo} />
        <div className="title-content">
          <h4>{data.title}</h4>
          <p>{data.subtitle}</p>
          <div className="sub-content">
            <div>
              <h6>Client</h6>
              <p>{data.clients}</p>
            </div>
            <div>
              <h6>Time Duration</h6>
              <p>{`${data.start_date} - ${data.end_date}`}</p>
            </div>
          </div>
          <h6>Focus Area</h6>
          <p>{data.focus_area}</p>
        </div>
      </div>
      <div className="description">
        <p dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
    </div>
  );
};

export default KeyDetails;
