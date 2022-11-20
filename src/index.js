import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import Profile from './components/profile/Profile';
import user from './components/profile/user.json';

import Statistics from './components/statistics/Statistics';
import statsData from './components/statistics/data.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <Statistics stats={statsData} />
    </App>
  </React.StrictMode>
);
