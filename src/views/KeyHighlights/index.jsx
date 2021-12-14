import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import projectsActions from '@Actions/projects';
import ScrollButton from '@Components/common/ScrollButton';
import Loader from '@Components/common/Loader';
import Container from '../../components/common/Container';
import '../../components/common/Container/container.css';

const KeyHighlights = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(projectsActions.getProjectsRequest());
  }, [dispatch]);

  const dataObj = useSelector((state) => state.projects);
  const projects = dataObj.project;

  return (
    <div>
      {projects.length > 0 ? (
        <div>
          {projects
            .filter((project) => project.is_key_highlight)
            .map((data, index) => {
              return (
                <div className="wrapper">
                  <Link to={`/keyhighlights/${data.id}`}>
                    <Container data={data} index={index} key={data.id} />
                  </Link>
                </div>
              );
            })}
          <ScrollButton />
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default KeyHighlights;
