import componentImg from '../assets/components.png'
import CoreConcept from './CoreConcept.jsx'
const data = [
    {
        title: 'test',
        description: 'description',
        iamge: componentImg
    }
]

export default function CoreConCepts() {
    return (
        <section id="core-concept">
            <h2>Core Concept</h2>
            <ul>
                {
                    data.map((conceptItem) => <CoreConcept key={conceptItem.title}  {...conceptItem} />)
                }
            </ul>
        </section>
    )
}