import React, { useEffect } from 'react';
import { requestUserData } from '@Actions/users';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@Components/common/Card/index';
import Loader from '@Components/common/Loader/index';
import '../../components/common/Card/card.css';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUserData());
  }, [dispatch]);

  const data = useSelector((state) => state.users);
  console.log(data);

  return (
    <div>
      {data.length > 0 ? (
        <div className="card-wrapper">
          {data.map((user) => {
            return <Card key={user.id} user={user} />;
          })}
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
