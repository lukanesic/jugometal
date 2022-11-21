import { initializeApp } from 'firebase/app'
import { getStorage } from '@firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDBxrTnJB7QIZ1AuiPO0HCJSMgJgp3XxOM',
  authDomain: 'jugometalstorage.firebaseapp.com',
  projectId: 'jugometalstorage',
  storageBucket: 'jugometalstorage.appspot.com',
  messagingSenderId: '612799893886',
  appId: '1:612799893886:web:839d9668b09defab05232f',
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
