/** @format */

import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// const config = {
// 	apiKey: 'AIzaSyD4U4AFrBw6s78eok2eMWbAuhvzrQBxwzM',
// 	authDomain: 'netflix-clone-ed9e0.firebaseapp.com',
// 	databaseURL: 'https://netflix-clone-ed9e0.firebaseio.com',
// 	projectId: 'netflix-clone-ed9e0',
// 	storageBucket: 'netflix-clone-ed9e0.appspot.com',
// 	messagingSenderId: '1043850117779',
// 	appId: '1:1043850117779:web:d0f5c392124dfdc1e9c366',
// };
const config = {
	apiKey: "AIzaSyAZG4BuU9CLll5bKk9RmWwBgJIINCJ_BQI",
	authDomain: "neflix-clone-83e31.firebaseapp.com",
	databaseURL: 'https://neflix-clone-83e31-default-rtdb.firebaseio.com/',
	projectId: "neflix-clone-83e31",
	storageBucket: "neflix-clone-83e31.appspot.com",
	messagingSenderId: "288978281427",
	appId: "1:288978281427:web:e174f3d6140dc56d6d4526"
};



const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
