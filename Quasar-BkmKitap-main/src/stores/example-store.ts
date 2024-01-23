import { defineStore } from 'pinia';
import { db } from 'src/firebase';

import { addDoc, collection, getDocs, DocumentData } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';



interface User {
  email: string;
  password: string;
  ad?: string; 
  soyad?: string; 
  isPwd?: boolean;
}

export const useMyStore = defineStore({
  id: 'myStore',
  state: () => ({
    user: {} as User,
  }),
  actions: {
    async signup(payload: User) {
      try {
        
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, payload.email, payload.password);

        const user = {
          ad: payload.ad,
          soyad: payload.soyad,
          email: payload.email,
        };

        await addDoc(collection(db, 'users'), user);

        this.setUser(payload);

        console.log('User registered and data added to Firestore:', user);
      } catch (error) {
        console.error('Firebase Authentication or Firestore Error:', error);
      }
    },
    async getData(): Promise<DocumentData[]> {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log('Data retrieved successfully: ', data);
        return data;
      } catch (error) {
        console.error('Error getting documents: ', error);
        return [];
      }
    },
    setUser(user: User) {
      this.user = user;
    },
  },
});
