import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import KeyDetails from '@Components/KeyDetails/index';

const KeyHighLightsDetails = () => {
  const { id } = useParams();

  const dataObj = useSelector((state) => state.projects);
  const projects = dataObj.project;

  return (
    <div>
      {projects.length > 0 ? (
        <>
          {projects
            .filter((project) => project.id === parseInt(id, 10))
            .map((data) => {
              return <KeyDetails data={data} key={data.id} />;
            })}
        </>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};

export default KeyHighLightsDetails;
