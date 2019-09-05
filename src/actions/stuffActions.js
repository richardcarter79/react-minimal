import * as actionTypes from './actionTypes';

export function receiveStuff(data) {
  return { type: actionTypes.RECEIVE_STUFF, stuff: data };
}

export function fetchStuff(data) {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>
        res.json().then(data => ({
          data: data,
          status: res.status
        }))
      )
      .then(res => {
        if(res.status === 200)
          dispatch(receiveStuff(res.data))
        else{
          let flash = {
            type: 'error',
            title: 'Error getting task list',
            content: 'There was an error getting the task list. Please try again.'
          };
          dispatch({ type: "DISPLAY_FLASH", data: flash });
        }
      });
  };
};
