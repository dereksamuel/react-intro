import { useEffect, useState } from "react";

function useLocalStorage(itemName, defaultValue = []) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(defaultValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parserItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(defaultValue));
          parserItem = [];
        } else {
          parserItem = JSON.parse(localStorageItem);
        }

        setItem(parserItem);
        setLoading(false);
      } catch(errorLocal) {
        console.error(errorLocal);
        setError(errorLocal);
        setLoading(false);
      }
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveItem = (newItem) => {
    try {
      const newItemStringify = JSON.stringify(newItem);
      localStorage.setItem(itemName, newItemStringify);
      setItem(newItem);
    } catch (errorLocal) {
      console.error(errorLocal);
      setError(errorLocal);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export {
  useLocalStorage
};
