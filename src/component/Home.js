import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div className="homeContainer">
    <div className="homeItems">
      <p className="mb-4">Welcome To Hello React Front End App</p>
      <NavLink to="/greeting" className="bg-sky-500 p-2 mt-4 rounded text-slate-50">Go to Greeting</NavLink>
    </div>
  </div>
);

export default Home;
