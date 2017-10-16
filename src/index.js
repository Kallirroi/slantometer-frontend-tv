import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

//slantometer-tv
// const config = {
//     apiKey: "AIzaSyBymGzfKkczTNDe1p5IB5SdxmjK0A7wpqU",
//     authDomain: "slantometer-tv.firebaseapp.com",
//     databaseURL: "https://slantometer-tv.firebaseio.com",
//     storageBucket: "slantometer-tv.appspot.com"
//   };


// //slantometer new
// const config = {
//     apiKey: "AIzaSyBGArKnNy_HDvhGiCDQUqogDVx0QE6vHn0",
//     authDomain: "testing-47738.firebaseapp.com",
//     databaseURL: "https://testing-47738.firebaseio.com/",
//     storageBucket: "testing-47738.appspot.com"
//   };

//slantometer clean
const config = {
    apiKey: "AIzaSyDg5NZaGE2vJNAg0uHwaLA9-6pq7fMdUFw",
    authDomain: "slantometer-clean.firebaseapp.com",
    databaseURL: "https://slantometer-clean.firebaseio.com/",
    storageBucket: "slantometer-clean.appspot.com"
  };






// const config = {
//   apiKey: "AIzaSyDCMKP_Tde7q2DJO79589Goee7R8g5QyJQ",
//   authDomain: "learningapi-6bca4.firebaseapp.com",
//   databaseURL: "https://learningapi-6bca4.firebaseio.com",
//   storageBucket: "learningapi-6bca4.appspot.com",
// };

const fb = firebase  
  .initializeApp(config)
  .database()
  .ref('highlights')
  // .limitToFirst(20);


fb.on('value', snapshot => {  
  const store = snapshot.val();
  ReactDOM.render(
    <App {...store} />,
    document.getElementById('root')
  );
});

registerServiceWorker();
