import {useEffect, useRef} from 'react';

export const useDebounce = (
  callback: (...args: Array<any>) => void,
  wait: number
) => {
  const argsRef = useRef<Array<any>>();
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  // new clearTimeoutID function
  const clearTimeoutID = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  // make sure our timeout gets cleared (if any)
  // when our consuming component gets unmounted
  // note that this is the shorthand syntax for "{ return clearTimeoutID() }"
  useEffect(() => clearTimeoutID, []);

  const debouncedCallBack = (...args: Array<any>) => {
    // Captures latest args
    argsRef.current = args;

    // clear debounce timer
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    // start waiting again
    timeout.current = setTimeout(() => {
      if (argsRef.current) {
        callback(...argsRef.current);
      }
    }, wait);
  };

  return debouncedCallBack;
};
