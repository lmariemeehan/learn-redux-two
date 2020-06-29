export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number //payload is used when you want to add in a parameter. 
    }
};

export const decrement = (number) => {
    return {
        type: 'DECREMENT',
        payload: number
    }
};

//take a look at the app page. I wanted to increment by a specific number and decremet by a number which is why I added the payloads above.