// /**
//  * 用户登录Reducers
//  * action行为的具体处理，该用于进行返回新的状态
//  */
// 'use strict';
// import * as types from '../util/ActionType';
//
// const initialState = {
//     loading : false,
//     data:''
// }
//
// export default function login(state = initialState, action){
//     switch (action.type) {
//         case types.PERFORM_LOGIN_ACTION:
//                   return Object.assign({}, state, {
//                       loading: true
//                   });
//         case types.RECEIVE_LOGIN_ACTION:
//                   return Object.assign({}, state, {
//                        loading: false,
//                        data: action.result
//                   });
//         default:
//             return state;
//     }
// }
