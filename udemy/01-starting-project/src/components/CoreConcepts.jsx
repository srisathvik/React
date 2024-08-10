import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"
export default function CoreConcepts(){

    return(
        <section id='core-concepts'>
          <h2>core concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
    )
}