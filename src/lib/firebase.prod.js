/** @format */

import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
	apiKey: 'AIzaSyD4U4AFrBw6s78eok2eMWbAuhvzrQBxwzM',
	authDomain: 'netflix-clone-ed9e0.firebaseapp.com',
	databaseURL: 'https://netflix-clone-ed9e0.firebaseio.com',
	projectId: 'netflix-clone-ed9e0',
	storageBucket: 'netflix-clone-ed9e0.appspot.com',
	messagingSenderId: '1043850117779',
	appId: '1:1043850117779:web:d0f5c392124dfdc1e9c366',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
