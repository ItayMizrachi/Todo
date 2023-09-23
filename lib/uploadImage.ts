import { ID, storage } from "@/appwrite";


const uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        "650d820a53847da828f4",
        ID.unique(),
        file
    );

    return fileUploaded;
}

export default uploadImage;