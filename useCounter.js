import { useState } from "react"

export const useCounter = ( initialCounter = 10 ) => {

    const [counter, setCounter] = useState( initialCounter );

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {

        if( counter === 0) return;
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialCounter);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}