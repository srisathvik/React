export default function Todo({item, handleDelete, handleEdit}){
    return (
        <>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => {handleEdit(item)}}>Edit</button>
            <button onClick={() => {handleDelete(item.id)}}>Delete</button>
        </>
    )
}