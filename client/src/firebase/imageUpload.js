import storage from "./index.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadImage = (image) => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `images/${image.name}`);
        const fileMeta = {
            name: "abc"
        }

        uploadBytes(storageRef, image, fileMeta).then(() => {
            getDownloadURL(ref(storage, `images/${image.name}`)).then((url) => {
                resolve(url)
            }).catch((error) => {
                reject(error)
            })
        }).catch((error) => {
            reject(error)
        })
    })
};

export default uploadImage;