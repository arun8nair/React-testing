import configureMockStore from "redux-mock-store";
import thunkMiddleware from 'redux-thunk';
import {apiCall} from './api/api';
import * as actions from './actions';

const mockStore = configureMockStore([thunkMiddleware]);

import {
    CHANGE_SEARCHFIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
    
} from './constants';

it('setSearchField returns', () => {
    const text = 'random';
    expect(actions.setSearchField(text)).toEqual({
        type: CHANGE_SEARCHFIELD, payload: text
    })
})

// it('handles requesting robots API', () => {     //refer redux-mock-store docs for more info
//     const store = mockStore();
//     store.dispatch(actions.requestRobots())     // use promise to make the test wait for the action fn to resolve and call the api
//     .then(() => {
//         const action = store.getActions();      // the api call doesn't work unless you use node-fetch in api.js. nock and supertest can mock api calls
//         console.log("act", action);
//         const firstExpectedAction = {
//             type: REQUEST_ROBOTS_PENDING
//         }
//         const secondExpectedAction = {
//             type: REQUEST_ROBOTS_SUCCESS
//         }
//         expect(action[0]).toEqual(firstExpectedAction);
//         expect(action[1]).toEqual(secondExpectedAction)

//     });    

// })

// it("handles requesting robots API", () => {
//     const store = mockStore({});
//     const wrongApiLink = "https://jsonplaceholder.typicode.com/use";
//     store.dispatch(actions.requestRobots(wrongApiLink)).then(() => {
//         const action = store.getActions();
//         const firsExpectedAction = {
//             type: REQUEST_ROBOTS_PENDING
//         };
//         expect(action[0]).toEqual(firsExpectedAction);
//         expect(action[1].type).toEqual(REQUEST_ROBOTS_FAILED);
//     });
// });
