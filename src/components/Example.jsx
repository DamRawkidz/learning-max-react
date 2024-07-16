import TabButton from '../components/TabButton.jsx'
import { useState } from 'react'

const EXAMPLE = {
    components: {
        title: 'Components',
        description: 'description',
        code: `
      fucntion Welcome() {
        return <h1>Hello, Wordls</h1>
      }
     `
    },
    jsx: {
        title: 'Components',
        description: 'description',
        code: `
      fucntion Welcome() {
        return <h1>Hello, Wordls</h1>
      }
     `
    }
}
export default function Examples() {
    const [selectTopic, setSelectedTopic] = useState()

    function handcldeClick(state) {
        setSelectedTopic(state)
        // console.log(state)
    }
    let tabContent = <p>Please select a topic.</p>

    if (selectTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLE[selectTopic].title}</h3>
                <p>{EXAMPLE[selectTopic].description}</p>
                <pre>
                    <code>{EXAMPLE[selectTopic].code}</code>
                </pre>
            </div>
        )
    }
    return (
        <section id="examples">
            <h2>Example</h2>
            <menu>
                <TabButton isSelected={selectTopic === 'components'} onSelect={() => handcldeClick('components')}>Components</TabButton>
                <TabButton isSelected={selectTopic === 'JSX'} onSelect={() => handcldeClick('JSX')}>JSX</TabButton>
                <TabButton isSelected={selectTopic === 'Props'} onSelect={() => handcldeClick('Props')}>Props</TabButton>
                <TabButton isSelected={selectTopic === 'State'} onSelect={() => handcldeClick('State')}>State</TabButton>
            </menu>
            {tabContent}

        </section>
    )
}