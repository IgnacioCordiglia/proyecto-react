import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, getDocs, getDoc, query, where, 
} from "firebase/firestore";
import {limitToFirst, ref} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA_yGE1ym2TpCJj5nWykUsjYDCp5Tw1fpY",
    authDomain: "proyecto-react-cordiglia.firebaseapp.com",
    projectId: "proyecto-react-cordiglia",
    storageBucket: "proyecto-react-cordiglia.appspot.com",
    messagingSenderId: "555315398921",
    appId: "1:555315398921:web:666bc096537ef29572abd8"
  };

  const FirebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(FirebaseApp);

  export async function getItems() {
    const collectionRef = collection(db, "items");
    let results = await getDocs(collectionRef);
    let dataItems = results.docs.map((doc) => {
      return { id: doc.id, ...doc.data(),};
    });
    return dataItems;
  }

  export async function getTeam(idTeamParams) {
    const collectionRef = collection(db, "items");
  
    const queryCat = query(
      collectionRef,
      where("team", "==", idTeamParams)
    );

  
    let results = await getDocs(queryCat);

  
    let dataItems = results.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  
    return dataItems;
  }

  

  export async function getBestSellers() {
    const collectionRef = collection(db, "items");
  
    const queryCat = query(
      collectionRef,
      where("best seller", "==", true)
    );
    let results = await getDocs(queryCat);

    let dataItems = results.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return dataItems;
  }
  
  export async function getItemById(idParams) {
    const docRef = doc(db, "items", idParams);
    const docResult = await getDoc(docRef);
    return new Promise((resolve, reject) => {
    if (docResult.exists()) {
      resolve({id: docResult.id, ...docResult.data() });
    } else reject(new Error("No se pudo encontrar el item."));
    }, 1500);
  }

  export async function getCategory(idCategoryParams) {
    const collectionRef = collection(db, "items");
  
    const queryCat = query(
      collectionRef,
      where("category", "==", idCategoryParams)
    );

  
    let results = await getDocs(queryCat);

  
    let dataItems = results.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  
    return dataItems;
  }

  export default FirebaseApp;

