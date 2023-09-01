const Part = (props) => {
    const {part} = props.info

    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

export default Part