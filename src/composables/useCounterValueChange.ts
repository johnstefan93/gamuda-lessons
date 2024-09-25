const useCounter = (initialValue: any) => { 
  const count = initialValue; 

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return {
    increment,
    decrement
  };
};

export default useCounter;