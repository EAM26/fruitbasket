import React from 'react';


function Article({className, fruitName, fruitCounter, setFruitCounter}) {
    return (
        <article
            className={className}
        >
            <h2>{fruitName}</h2>
            <button type="button"
            onClick={()=>fruitCounter > 0 ? setFruitCounter(fruitCounter-1): 0}>-</button>
            <p>{fruitCounter}</p>
            <button type="button"
                    onClick={()=>setFruitCounter(fruitCounter+1)}>+</button>
        </article>
    );
}

export default Article;