import React from 'react';
import userimg from '../../../assets/image/user.png';
import './card.css';

const Card = ({ user, handleModal, handleKeyDown }) => {
  return (
    <div
      className="card"
      style={{ width: '18rem' }}
      onClick={() => handleModal(user)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="avatar">
        <img className="card-img-top" src={userimg} alt={user.id} />
      </div>

      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{`${user.address.street},${user.address.suite},${user.address.city}`}</p>
        <p className="card-text">{user.phone}</p>
      </div>
    </div>
  );
};

export default Card;
