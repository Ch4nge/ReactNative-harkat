import firebase from 'firebase';
import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS 
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text   
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text   
  };
};

//export const loginUser = ({email, password}) => {
  //return (dispatch) => {
    //firebase.auth().signInWithEmailAndPassword(email, password)
      //.then(user => loginUserSuccess(dispatch, user))
      //.catch(() => {
        //console.log('hello');
        
        //firebase().auth().createUserWithEmailAndPassword(email, password);
          //.then(user => {
            //loginUserSuccess(dispatch, user);
            //console.log('hello2');
          //})
          //.catch(() => loginUserFail(dispatch));    
      //});
  //};
//};
export const loginUser = ({ email, password }) => async dispatch => {
  try {
      let user = await firebase.auth().signInWithEmailAndPassword(email, password);
      loginUserSuccess(dispatch, user); 
  } catch(e) {
      try {
          let user = await firebase.auth().createUserWithEmailAndPassword(email, password);
          loginUserSuccess(dispatch, user);
      }
      catch(e) {
          loginUserFail(dispatch);
      }
  }
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
