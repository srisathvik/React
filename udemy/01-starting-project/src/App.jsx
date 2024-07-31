import { CORE_CONCEPTS } from './data.js';
import Header from "./components/Header/Header.jsx";
import CoreConcepts from './components/CoreConcept.jsx';
import TabBar from './components/TabBar.jsx';
import {useState} from 'react'
import { EXAMPLES } from './data.js';

function App() {
  const[selectedTopic, setSelectedTopic] = useState('components');
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }
  return (
    <div> 
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>core concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
          <h1>Examples</h1>
          <menu>
            <TabBar onSelect={() => handleSelect('components')}>components</TabBar>
            <TabBar onSelect={() => handleSelect('jsx')}>JSX</TabBar>
            <TabBar onSelect={() => handleSelect('props')}>Props</TabBar>
            <TabBar onSelect={() => handleSelect('state')}>State</TabBar>

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

        </section>
      </main>
    </div>
  );
}

export default App;
