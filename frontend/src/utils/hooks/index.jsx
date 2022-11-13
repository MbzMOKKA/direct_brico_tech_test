import { useRef, useEffect } from 'react';

//Execute the callback if the user click outside of the elementRef
export function useClickOutside(elementRef, callback) {
    const callbackRef = useRef();
    callbackRef.current = callback;

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!elementRef?.current?.contains(e.target) && callbackRef.current) {
                callbackRef.current(e);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [callback, elementRef]);
}
