import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import {
  firebaseConfig
} from './env.js';

const config = firebaseConfig;
firebase.initializeApp(config);

export const db = firebase.firestore();