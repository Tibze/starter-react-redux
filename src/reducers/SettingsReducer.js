const initialState = {
  footerTitle: 'Custom Message Footer | Copyright 2017',
  footerColor: 'white'
};

const selectedSubreddit = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_FOOTER_TITLE':
      return Object.assign({}, state, action.data);
    default: return state
  }
}

export default selectedSubreddit;
