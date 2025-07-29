import React, { useEffect, useState } from 'react';
import { getUserTimeline } from '../services/api';

const TimelinePage = ({ userId }) => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    getUserTimeline(userId).then(setTimeline);
  }, [userId]);

  return (
    <div>
      <h2>Family Timeline</h2>
      {timeline.map(event => (
        <div key={event._id}>
          <h4>{event.title}</h4>
          <p>{event.date}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TimelinePage;