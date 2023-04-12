import { collection, addDoc } from "firebase/firestore";
import db from "./firebase-config.js";
import productos from "../productos.js";

const itemsCollectionRef = collection(db, "items");

const promises = productos.map((producto) => addDoc(itemsCollectionRef, producto));

Promise.all(promises).then(() => {
    process.exit(0);
});