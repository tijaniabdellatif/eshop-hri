export async function imageToBase64(file){


    const reader = new FileReader();
    reader.readAsDataURL(file);

    const data = new Promise((resolve, reject) => {

          reader.onload = () => resolve(reader.result);
          reader.onerror = (err) => reject(err);
    })

    return data;

}


export const setToLocaStorage = (key,value) => {

      localStorage.setItem(key,JSON.stringify(value));
}

export const getStorage = (key) => {

     let storage = localStorage.getItem(key);
     if(storage){

        storage = JSON.parse(localStorage.getItem(key));
     }
     else {

        storage = null;
     }


     return storage;

}


export const removeFromStorage = (key) => {

    let storage = getStorage(key);

    if(storage){

         localStorage.removeItem(key);
    }


}