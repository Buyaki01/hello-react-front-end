import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div>
    <p>Welcome To Hello React Front End App</p>
    <NavLink to="/greeting">Goto Greeting</NavLink>
  </div>
);

export default Home;
