import React from "react"
import Card from "./Card"

function List({ users }){
    return(users.map((user, index) => {
        return <Card key={index} user={user}/>
    }));
}

export default List;