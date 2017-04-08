// import React, {Component} from 'react';
// import{
// } from 'react-native';
//
// import {Provider} from 'react-redux'
// import configureStore from './store/ConfigureStore'
//
// import App from './app'
// const TAG="RootApp: "
// const store = configureStore();
//
// export default class RootApp extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       isLoading:true,
//       store:configureStore(()=>{
//         this.setState({
//           isLoading:false
//         })
//       })
//     }
//   }
//   render() {
//     if(this.state.isLoading){
//       console.log(TAG+'loading app');
//       return null;
//     }
//     return (
//       <Provider store={store}>
//         <App/>
//       </Provider>
//     )
//   }
// }
