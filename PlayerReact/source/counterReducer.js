const initState={
  song: undefined
};


function counterReducer(state=initState,action) {

  switch (action.type) {

    case "PLAY": {
      let newState={...state, song:action.song};
      return newState;
    }

    default:
      return state;
  }
}

export default counterReducer;
