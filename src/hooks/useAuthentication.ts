
import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { DATABASE } from '../config/firebase';


export function useAuthentication() {
  const [users, setUsers] = React.useState<any>(null);
  const [user, setUser] = React.useState<any>(null);
  const [loding, setLoding] = React.useState<boolean>(true);
  useEffect(() => {
    const  infoUser = async (use : any) => {
      await firestore()
      .collection(DATABASE.users)
      .where('email', '==', use.email)
      .onSnapshot(documentSnapshot => {
        setUser(documentSnapshot.docs[0].data());
        setLoding(false);
      });
    }
    const subscriber = async ()=>{ 
     await auth().onAuthStateChanged((userAuth) => {
      setUsers(userAuth);
      if (userAuth) {
        infoUser(userAuth);
      }
    });
  }
  subscriber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { users, loding, user };
}