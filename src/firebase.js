import fb from 'firebase';
export const firebase = !fb.apps.length
  ? fb.initializeApp({
      apiKey: 'AIzaSyDYyOcHP-UZkl_j4H4XTnw2TBAEwRWTMpk',
      authDomain: 'krishnabillings.firebaseapp.com',
      databaseURL: 'https://krishnabillings.firebaseio.com',
      projectId: 'krishnabillings',
      storageBucket: 'krishnabillings.appspot.com',
      messagingSenderId: '582940023769',
      appId: '1:582940023769:web:295cf7318152a48dbb17c8',
    })
  : fb.app();
