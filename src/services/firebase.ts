import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
	apiKey: "AIzaSyBaka9cKPLDtSeHlrdEPjzM9N781gfT9JI",
	authDomain: "phone-book-dc5eb.firebaseapp.com",
	databaseURL: "https://phone-book-dc5eb-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "phone-book-dc5eb",
	storageBucket: "phone-book-dc5eb.appspot.com",
	messagingSenderId: "1038851570882",
	appId: "1:1038851570882:web:13b827f992ee75fa788f5b"
 };

 firebase.initializeApp(firebaseConfig)

 const Auth = () => {

	return firebase.auth()
 }

 export default Auth