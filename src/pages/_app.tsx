import '../styles/globals.css'
// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import type { AppProps } from 'next/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCylexq25wWRGrApG_u3HrGZoEKvOu8Yds',
  authDomain: 'n-contest.firebaseapp.com',
  projectId: 'n-contest',
  storageBucket: 'n-contest.appspot.com',
  messagingSenderId: '156055308457',
  appId: '1:156055308457:web:4cde33233634f8b94b81b8',
  measurementId: 'G-ZJKYPL72YL',
}

// Initialize Firebase
if (typeof window !== 'undefined') {
  const app = initializeApp(firebaseConfig)
  getAnalytics(app)
}

export default function App({ Component, pageProps }: AppProps): any {
  return <Component {...pageProps} />
}
