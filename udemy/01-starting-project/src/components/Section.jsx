// import { Children } from "react";

export default function Section({title, id, children}){
    return(
        <section id={id}>
            <h1>{title}</h1>
            {children}
        </section>

    )
}