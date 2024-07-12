
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

// const readtDescription = ['Fundamental', 'Crucial', 'Core']


// function getRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1))
// }

// function Header() {
//   const description = readtDescription[getRandomInt(2)]

//   return (
//     <header>
//       <img src={reactImg} alt="Stylized atom" />
//       <h1>React Essentials</h1>
//       <p>
//         {description} React concepts you will need for almost any app you are
//         going to build!
//       </p>
//     </header>
//   )
// }


// function CoreConcept({ iamge, title, description }) {
//   return (
//     <li>
//       <img src={iamge} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   )
// }

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
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
