import React, {useState} from 'react';
import './App.css';
import Article from "./Components/Article";


function App() {
    const [strawberryCounter, setStrawberryCounter] = useState(0)
    const [bananaCounter, setBananaCounter] = useState(0)
    const [appleCounter, setAppleCounter] = useState(0)
    const [kiwiCounter, setKiwiCounter] = useState(0)


    return (
        <><Article
            className={"fruitCard"}
            fruitName="🍓 Strawberries"
            fruitCounter={strawberryCounter}
            setFruitCounter={setStrawberryCounter}/>

            <Article
                className={"fruitCard"}
                fruitName="🍌 Bananas"
                fruitCounter={bananaCounter}
                setFruitCounter={setBananaCounter}/>
            <Article
                className={"fruitCard"}
                fruitName="🍏 Apple"
                fruitCounter={appleCounter}
                setFruitCounter={setAppleCounter}/>
            <Article
                className={"fruitCard"}
                fruitName="🥝 Kiwis"
                fruitCounter={kiwiCounter}
                setFruitCounter={setKiwiCounter}/></>


    );
}

export default App;
