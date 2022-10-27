import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, getDocs, getDoc, query, where, addDoc, documentId,writeBatch 
} from "firebase/firestore";

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

  export async function createBuyOrder(orderData) {
    const batch = writeBatch(db);
    const collectionRef = collection(db, "orders");
    const collectionItemsRef = collection (db, "items");

    const arrayIds = orderData.cart.map((item) => item.id);
    const q = query(collectionItemsRef, where(documentId(), "in", arrayIds));

    let itemToUpdate = await getDocs(q);

    itemToUpdate.docs.forEach(doc => {
      let itemInCart = orderData.cart.find(item => item.id === doc.id)
      batch.update(doc.ref, {
        stock: doc.stock().stock - itemInCart.count
      })
    })

    batch.commit()

    let respuesta = await addDoc(collectionRef, orderData);
    return respuesta;
  }

  export async function sendDataToFirebase() {
    const data = [
      {
          id: 1,
          title: "Remera Alfa Romeo",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/2022-scaled.jpg",
          price: 3000,
          detail: "Remera estampada Alfa Romeo 2022",
          stock: 10,
          category: "Remera",
          team: "Alfa Romeo",    
          bestseller: false  
      },
  
      {
          id: 2,
          title: "Remera Alpha Tauri",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2021/10/REPLICA-1-scaled.jpg",
          price: 3000,
          detail: "Remera estampada Alpha Tauri 2022",
          stock: 10,
          category: "Remera",
          team: "Alpha Tauri",  
          bestseller: false    
      },
  
      {
          id: 3,
          title: "Remera Alpine",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/azul-marino-scaled.jpg",
          price: 3000,
          detail: "Remera estampada Alpine 2022",
          stock: 10,
          category: "Remera",
          team: "Alpine",    
          bestseller: false  
      },
  
      {
          id: 4,
          title: "Remera Ferrari",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2021/09/REMERA-FERRARI-3-scaled.jpg",
          price: 3000,
          detail: "Remera estampada Ferrari 2022",
          stock: 10,
          category: "Remera",
          team: "Ferrari",     
          bestseller: true 
      },
  
      {
          id: 5,
          title: "Rem. Aston Martin",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/aston-martin-2022.jpg",
          price: 3000,
          detail: "Remera estampada Aston Martin 2022",
          stock: 10,
          category: "Remera",
          team: "Aston Martin", 
          bestseller: false     
      },
  
      {
          id: 6,
          title: "Remera McLaren",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/mc-laren-2022.jpg",
          price: 3000,
          detail: "Remera estampada McLaren 2022",
          stock: 10,
          category: "Remera",
          team: "McLaren",   
          bestseller: false   
      },
  
      {
          id: 7,
          title: "Remera Mercedes",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/mercedes-2022.jpg",
          price: 3000,
          detail: "Remera estampada Mercedes 2022",
          stock: 10,
          category: "Remera",
          team: "Mercedes",   
          bestseller: true  
      },
  
      {
          id: 8,
          title: "Remera Red Bull",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/redbull-2022.jpg",
          price: 3000,
          detail: "Remera estampada Red Bull 2022",
          stock: 10,
          category: "Remera",
          team: "Red Bull",  
          bestseller: true    
      },
      
      {
          id: 9,
          title: "Gorra Ferrari 75 años",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/5282c2b10163e8ba8cda83e29106eff98f75f640e928869c6ad3f4b7d859e8e177480.jpeg",
          price: 2000,
          detail: "Gorra Ferrari Amarilla y Negra MD10",
          stock: 10,
          category: "Gorra",
          team: "Ferrari",  
          bestseller: true    
      },
  
      {
          id: 10,
          title: "Gorra Ferrari Roja",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/6c56d797d24cc9b478d2d0ce6e55c2cbb0c920b584c9f1a1b3d7a84324717b3077480.jpeg",
          price: 2000,
          detail: "Gorra Ferrari Roja y Negra MD1 2022",
          stock: 10,
          category: "Gorra",
          team: "Ferrari",     
          bestseller: false 
      },
  
      {
          id: 11,
          title: "Gorra Red Bull 33",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/06/14.jpg",
          price: 2000,
          detail: "Gorra Red Bull - Verstappen 33",
          stock: 10,
          category: "Gorra",
          team: "Red Bull",  
          bestseller: false    
      },
  
      {
          id: 12,
          title: "Gorra Red Bull Negra",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/06/16b.jpg",
          price: 2000,
          detail: "Gorra Red Bull Negra y Azul MD4",
          stock: 10,
          category: "Gorra",
          team: "Red Bull",    
          bestseller: false  
      },
  
      {
          id: 13,
          title: "Gorra Mercedes 44",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/06/15.jpg",
          price: 2000,
          detail: "Gorra Mercedes - Hamilton 44",
          stock: 10,
          category: "Gorra",
          team: "Mercedes",     
          bestseller: false 
      },
  
      {
          id: 14,
          title: "Gorra Mercedes",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/03/1e1538455d410bf0e75788fd447e7d8344a56646040e1108c5f716818df6fe7777480.jpeg",
          price: 2000,
          detail: "Gorra Mercedes Negra y Blanca M6",
          stock: 10,
          category: "Gorra",
          team: "Mercedes",    
          bestseller: false  
      },
  
      {
          id: 15,
          title: "Buzo Ferrari 2022",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/04/17fabc4c-7cfc-410f-a117-5c53ac9c9b2a.jpg",
          price: 6500,
          detail: "Buzo Canguro Rojo Ferrari 2022",
          stock: 10,
          category: "Buzo",
          team: "Ferrari",   
          bestseller: false   
      },
  
      {
          id: 16,
          title: "Buzo Mercedes 2022",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/05/ece16c49-995c-4e40-877c-ae0d9088cd4d.jpg",
          price: 6500,
          detail: "Buzo Canguro Negro Mercedes 2022",
          stock: 10,
          category: "Buzo",
          team: "Mercedes",    
          bestseller: false  
      },
  
      {
          id: 17,
          title: "Buzo Red Bull 2022",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/04/7f84e3d2-6aa8-4e9a-b934-310954f366a4.jpg",
          price: 6500,
          detail: "Buzo canguro Red Bull 2022",
          stock: 10,
          category: "Buzo",
          team: "Red Bull",  
          bestseller: false    
      },
  
      {
          id: 18,
          title: "Chomba Haas 2022",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-25-at-8.56.13-PM.jpeg",
          price: 5000,
          detail: "Chomba Azul Estampada Haas 2022",
          stock: 10,
          category: "Remera",
          team: "Haas",     
          bestseller: false 
      },
  
      {
          id: 19,
          title: "Remera Williams 2022",
          img: "https://alltexsantafe.com.ar/wp-content/uploads/2022/07/453fdb2e-b833-4ca0-8043-bf191290ac78.jpg",
          price: 3000,
          detail: "Chomba Azul Estampada Williams 2022",
          stock: 10,
          category: "Remera",
          team: "Williams",  
          bestseller: false   
      },
  
  ];

    let itemsCollectionRef = collection(db, "items")

    for (let item of data) {
      delete(item.id);
      let newDoc = await addDoc(itemsCollectionRef, item);
    }
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
      where("bestseller", "==", true)
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

