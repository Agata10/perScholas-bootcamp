//state is the current state(before the changes)
//action is the infromation from dispatch
function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return state + action.payload;
    case 'dec':
      return state - action.payload;
    case 'reset':
      return 0;
    case 'setNumber':
      return action.payload;
    default:
      return state;
  }
}
export default reducer;
