import React from 'react';
import './userDetail.css';
import userImg from '../../assets/image/user.png';

const UserDetails = ({ modalData, closeModal }) => {
  const { street, suite, city } = modalData.address;
  return (
    <>
      <div className="user-wrapper">
        <button type="button" onClick={closeModal}>
          Close
        </button>
        <img src={userImg} alt="" height="200px" width="200px" />
        <div className="user-details">
          <h5>{modalData.name}</h5>
          <p>{modalData.username}</p>
          <p>{`${street},${suite},${city}`}</p>
          <p>{modalData.email}</p>
          <p>{modalData.phone}</p>
          <p>{modalData.website}</p>
          <p>{modalData.company.name}</p>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
