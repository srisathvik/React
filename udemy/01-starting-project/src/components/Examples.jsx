import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
export default function Examples(){
    const[selectedTopic, setSelectedTopic] = useState('components');
    function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);
        // console.log(selectedButton);
    }
    return(
        <Section title="Examples" id='examples'>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
              >
                components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
              >
                JSX
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
              >
                Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
              >
                State
            </TabButton>

          </menu>
          <div id="tab-content">
             <h3>{EXAMPLES[selectedTopic].title}</h3>
             <p>{EXAMPLES[selectedTopic].description}</p>
             <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
             </pre>
          </div>

        </Section>
    )
}