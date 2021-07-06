// this hook provides a ref object and an event handler
// put the ref object on hidden input element and the clickhandler on custom element

import { useRef } from 'react';

const useCustomUpload = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.click();
  };

  return [inputRef, onClick];
};

export default useCustomUpload;
