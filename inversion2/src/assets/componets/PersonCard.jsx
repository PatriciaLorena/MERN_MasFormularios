const PersonCard = (props) => {
    return (
        <div>
            <h2>{props.firstName} {props.lastName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair color: {props.hairColor}</p>
        </div>
    )
}

export default PersonCard;