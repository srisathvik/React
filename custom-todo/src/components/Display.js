export default function Display({list, handleDelete}){
    if(list.length === 0){
        return <h1>No Active Items</h1>
    }
    return(
        <ul>
            {list.map( item => (
                <div key={item.id}>

                    <li>{item.todoItem}</li>
                    <button onClick={()=> handleDelete(item.id) }>Delete</button>
                </div>
                
            ))}
        </ul>
    )
}