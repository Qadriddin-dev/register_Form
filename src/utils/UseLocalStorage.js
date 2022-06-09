//usage in components const { setItem, getItem, removeItem } = UseLocalStorage();

export const UseLocalStorage = () => {
    //setItem - adds a key value pair to local storage
    //usage - setItem("key", "value");
    const setItem = (name,value,) => {
        localStorage.setItem(name, JSON.stringify(value));
    }
    //getItem - returns the value of the key
    //usage - getItem("key");
    const getItem = (name) => {
        return JSON.parse(localStorage.getItem(name));
    }
    //removeItem - removes the key value pair from local storage
    //usage - removeItem("key");
    const removeItem = (name) => {
        localStorage.removeItem(name);
    }
    return {
        getItem,
        setItem,
        removeItem
    }
}