import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//\\//\\//\\ FIREBASE INIT //\\//\\//\\
const config = {
  apiKey: "AIzaSyD0bcYiIltEcUIEgcRhpvtW2pW_QKIk5_c",
  authDomain: "museum-app-4475f.firebaseapp.com",
  databaseURL: "https://museum-app-4475f.firebaseio.com",
  projectId: "museum-app-4475f",
  storageBucket: "museum-app-4475f.appspot.com",
  messagingSenderId: "529402070180",
  appId: "1:529402070180:web:8f31507a73939e49ce5231",
  measurementId: "G-81C2GWXSYT"
}
firebase.initializeApp(config)

//\\//\\//\\ FIREBASE UTILS //\\//\\//\\
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

//\\//\\//\\ FIRESTORE COLLECTIONS //\\//\\//\\
const usersCollection = db.collection('users')
const contentCollection = db.collection('content')

//\\//\\//\\ date issue fix according to firebase  //\\//\\//\\
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

export {
  db,
  auth,
  currentUser,
  usersCollection,
  contentCollection,
}
