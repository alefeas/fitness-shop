import { where, query, collection, getDocs, getDoc, doc } from "@firebase/firestore";
import { Item } from "../components/item/Item";
import { db } from "../utils/firebaseConfig";

export const firestoreFetch = async (idCategory) => {
    let q
    if(idCategory) {
        q = query(collection(db, 'products'), where('categoryId', '==', idCategory))
    } else {
        q = query(collection(db, 'products'))
    }
    const querySnapshot = await getDocs(q)
    const dataFromFireStore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFireStore
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, 'products', idItem)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists) {
        return {
            id: idItem,
            ...docSnap.data()
        }   
    } else {
        console.log('No such document!');
    }
}