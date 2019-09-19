import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
//import { store } from '@/store'

// Your web app's Firebase configuration
// Initialize Firebase

const firebaseConfig = {
  apiKey: 'AIzaSyDk8dUZ6pIApbV6WwdzbRK2t0MX6zQ_Hlg',
  authDomain: 'lanista-run.firebaseapp.com',
  databaseURL: 'https://lanista-run.firebaseio.com',
  projectId: 'lanista-run',
  storageBucket: 'lanista-run.appspot.com',
  messagingSenderId: '103272253088',
  appId: '1:103272253088:web:1275d55b6137c8ce1eebc5'
}
firebase.initializeApp(firebaseConfig)
// firebase init goes here

// firebase utils
const db = firebase.firestore()
const fs = firebase.firestore
const firebaseApp = firebase

const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  firebaseApp,
  db,
  fs,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
