function useDebounce(cb, delay=1000) {
    // It is debounce custom hooks it help to reduce network calls
    let timerId;
    return (...args) => {
         clearTimeout(timerId);
         timerId = setTimeout(() => {
            cb(...args)
         }, delay)
    }
}

export default useDebounce;