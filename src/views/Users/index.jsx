import React, { useState, useEffect } from 'react';
import usersActions from '@Actions/users';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@Components/common/Card/index';
import Modal from 'react-modal';
import Loader from '@Components/common/Loader/index';
import { useHistory } from 'react-router';
import UserDetails from './UserDetails';
import '../../components/common/Card/card.css';

Modal.setAppElement('#app');

const Users = () => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.getUserData());
  }, [dispatch]);

  const handleModal = (data) => {
    setModalData(data);
    setModalOpen(true);
    history.push(`/users/${data.id}`);
  };
  const closeModal = () => {
    setModalOpen(false);
    history.push('/users');
  };

  const handleKeyDown = (ev) => {
    if (ev.keyCode === 27) {
      setModalOpen(false);
    }
  };

  const dataObj = useSelector((state) => state.users);
  const data = dataObj.users;
  return (
    <div>
      {data.length > 0 ? (
        <div>
          <div className="card-wrapper">
            {data.map((user) => {
              return <Card key={user.id} user={user} handleModal={handleModal} handleKeyDown={handleKeyDown} />;
            })}
          </div>
          <Modal
            isOpen={modalOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setModalOpen(false)}
            style={{
              overlay: {
                backgroundColor: 'gray',
              },
              content: {
                display: 'flex',
                justifyContent: 'center',
                color: 'blue',
              },
            }}
          >
            <UserDetails closeModal={closeModal} modalData={modalData} />
          </Modal>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Users;
