import React from 'react';
import './container.css';

const Container = ({ data, index }) => {
  const colors = [
    '#184ADD',
    '#333333',
    '#B30732',
    '#F8E1E5',
    '#EFEFEF',
    '#1281AD',
    '#174BDD',
    '#25A596',
    '#EFEFEF',
    '184ADD#',
  ];

  function getContrastYIQ(hexcolor) {
    const hex = hexcolor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  }
  return (
    <div className="highlight-box" style={{ backgroundColor: colors[index], color: getContrastYIQ(colors[index]) }}>
      <div className="highlight-content-wrap">
        <div className="highlight-header">
          <h4>{data.title}</h4>
          <p>{data.subtitle}</p>
        </div>
        <div className="highlight-body">
          <div className="row">
            <div className="col-6">
              <h5>Client</h5>
              <h6>{data.clients}</h6>
            </div>
            <div className="col-6">
              <h5>Time Duration</h5>
              <h6>{`${data.start_date} - ${data.end_date}`}</h6>
            </div>
          </div>
        </div>
      </div>

      <figure>
        <img src={data.photo} alt={data.photo} />
      </figure>
    </div>
  );
};

export default Container;
