import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import { firestore } from "./firebase";

//функция для добавление нового сообщения в коллекцию
export const addMessage = async (data) => {
    const result = addDoc(collection(firestore, 'messages'), data)
}

//функция для загрузки сообщений и возврата в виде промиса
export const getAllMessages = async () => {
    const response = await getDocs(collection(firestore, 'messages'))
    console.log(response)
    const arr = response.docs.map(e => e.data())
    return arr
}