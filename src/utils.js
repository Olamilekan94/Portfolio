export const getimageurl =(path) =>{
    return new URL(`asset/${path}`, import.meta.url).href;
};
