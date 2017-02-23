import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import {configStore} from './store/configStore';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);

const render = (Root) => {
  ReactDOM.render(
    <Root history={syncedHistory} store={store} />,
    document.body.appendChild(document.createElement('div'))
  );
};

render(Root);
