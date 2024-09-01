export default function Items({list}){
    if(list.length === 0){
        return;
    }
    return(
    <ul>
        {list.map((item, index) =>{
            return(
            <li key={index}>{item.title}</li>
            )
    })}
    </ul>
    )
}