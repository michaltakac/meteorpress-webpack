import React from 'react';
import App from './components/App.jsx';
import Accounts from './accounts.js';

Meteor.startup(() => {
  React.render(<App/>, document.getElementById('root'));
});
