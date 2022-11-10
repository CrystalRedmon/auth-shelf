import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems() {
    console.log('in items.saga');

    try {
        const response = yield axios.get('/api/shelf');

        yield put({
            type: "SET_ITEMS",
            payload: response.data,
        })
    } catch (error) {
        console.log('get items request failed', error);
    }}

function* addItems(action){
    try{
        yield axios.post('/api/shelf', {data: action.payload});
        yield put({type: 'FETCH_ITEMS'})
    }catch (error){
        console.log('post failed')
    }
}

function* deleteItem(action){
    console.log('the action payload of deleted item is', action.payload)
    try{
        yield axios.delete(`/api/shelf/${action.payload}`);
        yield put({type: 'FETCH_ITEMS'})
    } catch (error) {
        console.log('error deleting item')
    }
}


//   try {
//     const config = {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     };

//     // the config includes credentials which
//     // allow the server session to recognize the user
//     // If a user is logged in, this will return their information
//     // from the server session (req.user)
//     const response = yield axios.get('/api/user', config);

//     // now that the session has given us a user object
//     // with an id and username set the client-side user object to let
//     // the client-side code know the user is logged in
//     yield put({ type: 'SET_USER', payload: response.data });
//   } catch (error) {
//     console.log('User get request failed', error);
//   }


function* itemsSaga() {
  yield takeLatest('FETCH_ITEMS', fetchItems);
  yield takeLatest('ADD_ITEMS', addItems);
  yield takeLatest('DELETE_ITEM', deleteItem)
}



export default itemsSaga;
