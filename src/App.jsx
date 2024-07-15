
import componentImg from './assets/components.png'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'
const data = [
  {
    title: 'test',
    description: 'description',
    iamge: componentImg
  }
]

function handcldeClick(state) {
  console.log(state)
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concept">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept {...data[0]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => handcldeClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handcldeClick('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handcldeClick('Props')}>Props</TabButton>
            <TabButton onSelect={() => handcldeClick('State')}>State</TabButton>
          </menu>
          Dunamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
