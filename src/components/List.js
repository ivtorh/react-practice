import React from "react";
import Item from './Item';

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Lamborguini" ano_lancamento={1989} />
                <Item marca="Chevrolet" ano_lancamento={1995} />
            </ul>
        </>
    );
}

export default List;