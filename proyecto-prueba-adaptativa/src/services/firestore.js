import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const obtenerPreguntas = async (dificultad) => {
  const q = query(collection(db, "preguntas"), where("dificultad", "==", dificultad));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const guardarResultado = async (resultado) => {
  await addDoc(collection(db, "resultados"), resultado);
};