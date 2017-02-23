// import React from 'react';
// import {Route, IndexRoute} from 'react-router';

import App from '../containers/App';
import About from '../sections/about/About';
import Home from '../sections/home/Home';
import Contact from '../sections/contact/Contact';
import Settings from '../sections/settings/Settings';


export const paths = {
  ROOT: '/',
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  SETTINGS: '/settings',
};


export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component: Home
        }
      },
      {
        path: paths.ABOUT,
        component: About
      },
      {
        path: paths.CONTACT,
        component: Contact
      },
      {
        path: paths.SETTINGS,
        component: Settings
      },
      { path: '*', component: Home}
    ]
  };
};
