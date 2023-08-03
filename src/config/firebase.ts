// import firebase from 'firebase';

// // Assuming you've already initialized your Firebase app
// const db = firebase.firestore();

const DATABASE = {
    abonnement: 'abonnement',
    cartecadeaux: 'cartecadeaux',
    categories: 'categories',
    offre: 'offre',
    questionnaires: 'questionnaires',
    questions: 'questions',
    subscription: 'subscription',
    users: 'users',
};
export {DATABASE};
// import firebase from 'firebase';
// import {generateRandomString} from '../constants/function';
// import {useEffect, useState} from 'react';

// const firebaseConfig = {
//   apiKey: 'AIzaSyClTvSYibVmqzw1PP7opIb2spPye4v4WOo',
//   authDomain: 'quiz-9628f.firebaseapp.com',
//   projectId: 'quiz-9628f',
//   storageBucket: 'quiz-9628f.appspot.com',
//   messagingSenderId: '651640197074',
//   appId: '1:651640197074:web:a59f6a1f1a52b2f7cdc20b',
// };
// ///// Authontication /////////
// export const registerFirestore = ({
//   name,
//   prenom,
//   email,
//   password,
//   subscription = 'Free',
// }: Tregister) => {
//   db.collection('users').doc().set({
//     name: name,
//     prenom: prenom,
//     email: email,
//     password: password,
//     role: 'user',
//     subscription: subscription,
//     referralCode: generateRandomString(),
//     is_active: true,
//   });
// };
// export function useAuth() {
//   const auth = firebaseApp.auth();
//   const [user, setUser] = useState<any>(null);
//   useEffect(() => {
//     const unsubscribeFromAuthStatuChanged = auth.onAuthStateChanged(
//       async payload => {
//         if (payload) {
//           const snapshot = await db
//             .collection('users')
//             .where('email', '==', payload.email)
//             .get();
//           setUser({
//             ...payload,
//             ...snapshot.docs[0].data(),
//           });
//         } else setUser(null);
//       },
//     );

//     return () => unsubscribeFromAuthStatuChanged();
//   }, [auth]);

//   return {
//     user,
//   };
// }
// /////subscription /////////
// export const storeSubscription = ({
//   name,
//   price,
//   points,
//   gift,
//   days,
//   paymentMethod,
//   discount,
// }: TSubscription) => {
//   db.collection('subscription').doc().set({
//     name: name,
//     price: price,
//     points: points,
//     gift: gift,
//     days: days,
//     paymentMethod: paymentMethod,
//     discount: discount,
//   });
// };
// export const getSubscription = () => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [Subscription, setSubscription] = useState<any>(null);

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useEffect(() => {
//     const unsubsribe = db
//       .collection('subscription')
//       .onSnapshot(querySnapshot => {
//         setSubscription(querySnapshot.docs.map(doc => doc.data()));
//       });
//     return () => {
//       unsubsribe();
//     };
//   }, [Subscription]);
//   return Subscription;
// };
// export const storeAllSubscription = () => {
//   // subscription.map((item)=>{
//   //   storeSubscription(item);
//   // });
// };

// // const firebase = initializeApp(firebaseConfig);
// export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const auth = firebaseApp
//   .auth()
//   .setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// const db = firebase.firestore(firebaseApp);
// export default db;
