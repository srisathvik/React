import { CORE_CONCEPTS } from './data.js';
import Header from "./components/Header/Header.jsx";
import CoreConcepts from './components/CoreConcept.jsx';
import TabBar from './components/TabBar.jsx';

function App() {
  function handleSelect(selectedButton){
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
            <TabBar onSelect={() => handleSelect('JSX')}>JSX</TabBar>
            <TabBar onSelect={() => handleSelect('Props')}>Props</TabBar>
            <TabBar onSelect={() => handleSelect('State')}>State</TabBar>

          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
