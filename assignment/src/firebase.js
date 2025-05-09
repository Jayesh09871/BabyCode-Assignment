
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDBHBNyQOObqbx9nGMJSFgT1a6C4I37hT0',
  authDomain: 'student-management-77f9b.firebaseapp.com',
  projectId: 'student-management-77f9b',
  appId: '1:958067964178:web:2e3e29274979f98cb45bcb',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();