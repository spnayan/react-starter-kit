import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalTopicsSelector, selectedTopicsSelector, percentOfSelectionSelector } from '@src/selectors/topic';
import { Creators, Types as TopicTypes } from '@Actions/topic';
import './styles.scss';
import { checkIfLoading } from '@src/utils/loaderSelector';

const { addTopic, selectTopic } = Creators;

const Topic = () => {
  const topics = useSelector((state) => state.topic.topics);
  const [topicInput, setTopicInput] = useState('');
  const totalTopics = useSelector(totalTopicsSelector);
  const selectedTopics = useSelector(selectedTopicsSelector);
  const percentOfSelection = useSelector(percentOfSelectionSelector);
  const { getTopicRequest } = Creators;
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => checkIfLoading(state, TopicTypes.GET_TOPIC_REQUEST));
  // eslint-disable-next-line no-console
  console.log(isLoading, 'isloading');
  return (
    <div className="container">
      <h1>Topic</h1>

      <input
        type="text"
        placeholder="Add Topic"
        value={topicInput}
        onChange={(e) => setTopicInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && topicInput) {
            dispatch(addTopic(topicInput));
            setTopicInput('');
          }
        }}
      />

      {topics.map(({ id, title, checked }) => (
        <div className="list-item" key={id}>
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              dispatch(selectTopic(e));
              dispatch(getTopicRequest());
            }}
          />
          <span>{title}</span>
        </div>
      ))}

      <hr />

      <div className="info-item">
        <p>
          Selected Topics: <span>{selectedTopics}</span>
        </p>
        <p>
          Total Topic: <span>{totalTopics}</span>
        </p>
        <p>
          Percent of selection: <span>{percentOfSelection}%</span>
        </p>
      </div>
    </div>
  );
};

export default Topic;
