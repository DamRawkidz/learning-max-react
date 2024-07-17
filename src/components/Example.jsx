import TabButton from '../components/TabButton.jsx'
import Section from './Section.jsx'
import Tabs from './Tabs.jsx'
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
        <Section title="Example" id="examples">
            <Tabs
                buttons={
                    <>
                        <TabButton isSelected={selectTopic === 'components'} onClick={() => handcldeClick('components')}>Components</TabButton>
                        <TabButton isSelected={selectTopic === 'JSX'} onClick={() => handcldeClick('JSX')}>JSX</TabButton>
                        <TabButton isSelected={selectTopic === 'Props'} onClick={() => handcldeClick('Props')}>Props</TabButton>
                        <TabButton isSelected={selectTopic === 'State'} onClick={() => handcldeClick('State')}>State</TabButton>
                    </>
                }>{tabContent}</Tabs>
        </Section>
    )
}