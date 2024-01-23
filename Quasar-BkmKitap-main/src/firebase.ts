import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
        apiKey: 'AIzaSyBiDyHAZNV3qwQgMWR0QwwKf1ZbZLcQhG0',
        authDomain: 'bkmkitap-quasar.firebaseapp.com',
        projectId: 'bkmkitap-quasar',
        storageBucket: 'bkmkitap-quasar.appspot.com',
        messagingSenderId: '915238852101',
        appId: '1:915238852101:web:b5455fde2d0326c6706e6c',
        measurementId: 'G-59K9WYTCEK'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default boot(({ app }) => {
  app.config.globalProperties.$db = db;
});

export { db };