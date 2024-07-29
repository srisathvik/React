export default function TabBar({children, onSelect}){
    return(
        <li><button onClick={onSelect}>{children}</button></li>
    )
}