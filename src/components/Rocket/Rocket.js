import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from './RocketsCard';
import './Rocket.css';
import { getRockets } from '../../redux/Rockets/Rockets';

const Rocket = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const newRockets = rockets.rocketsData;

  const cards = newRockets.length > 0 && newRockets.map((rocket) => (
    <RocketCard
      key={rocket.id}
      rocket={rocket}
    />
  ));
  return (
    <div className="rocket-container">
      {cards}
    </div>
  );
};

export default Rocket;
