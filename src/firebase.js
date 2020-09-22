import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDw_M7L-Rd3BiWU_sGjBTs3b1VVzmmYXyQ',
    authDomain: 'clone-project-38c47.firebaseapp.com',
    databaseURL: 'https://clone-project-38c47.firebaseio.com',
    projectId: 'clone-project-38c47',
    storageBucket: 'clone-project-38c47.appspot.com',
    messagingSenderId: '245837060913',
    appId: '1:245837060913:web:041edd3aac90583c106e10',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(); // this auth is going to allow us to do things like logging in, signing in and search etc

// const provider = new firebase.auth.GoogleAuthProvider();
// export { auth, provider };
// export default db;

export { auth };
