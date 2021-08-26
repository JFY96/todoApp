import { useState, useEffect } from "react"

const useStateWithLocalStorage = (storageKey, defaultValue = []) => {
	const cachedItem = localStorage.getItem(storageKey);
	const [value, setValue] = useState(cachedItem ? JSON.parse(cachedItem) : defaultValue);

	useEffect(() => {
		localStorage.setItem(storageKey, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
};

export default useStateWithLocalStorage;