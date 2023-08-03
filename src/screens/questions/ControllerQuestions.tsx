import firestore from '@react-native-firebase/firestore';
import { useState, useEffect } from "react";
import { DATABASE } from '../../config/firebase';

export const useQuestions = ({ id }: { id: number }) => {
  const [questions, setQuestions] = useState<any>([]);
  const [categories, setCategories] = useState<string | null>(null);
  useEffect(() => {
    
 const getQuestions = async () => {
      await firestore()
        .collection(DATABASE.questions)
        .where('categorie', '==', id)
        .onSnapshot(documentSnapshot => {
          documentSnapshot.forEach(doc => {
            setQuestions((prevArray: any) => [...prevArray, doc.data()]);
          });
        });
    }
    const Categories = async () => {
      await firestore()
        .collection(DATABASE.categories)
        .where('id', '==', id)
        .limit(1)
        .onSnapshot(documentSnapshot => {
          setCategories(documentSnapshot.docs[0].id);
          getQuestions();
        });
    }
   
    Categories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { questions, categories };
};


