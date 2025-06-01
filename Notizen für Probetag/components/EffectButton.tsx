import React, { useEffect } from 'react'

const EffectButton = () => {

    const [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState("Green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }

       function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

  return (<>
    <p>Count: {count}</p>
    <p>Color: {color}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={changeColor}>Change Color</button>
    </>)
}

export default EffectButton