
export default function CoreConcept({ iamge, title, description }) {
    return (
        <li>
            <img src={iamge} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}