const initState={
  song: undefined
};

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function counterReducer(state=initState,action) {

  switch (action.type) {

    case "PLAY": {
      // хотелось бы просто увеличить state.cnt
      // но редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!

      let newState={...state, song:action.song};
      return newState;
    }

    default:
      return state;
  }
}

export default counterReducer;
