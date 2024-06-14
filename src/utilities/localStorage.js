export const setStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));


export const getStorage = (key) => {
    const value = localStorage.getItem(key);
    if (!value) return null;

    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
}


export const removeStorage = (key) => localStorage.removeItem(key);


export const clearStorage = () => localStorage.clear();