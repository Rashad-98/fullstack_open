const Part = (props) => {
    const {part, exercise} = props.info

    return (
        <p>
            {part} {exercise}
        </p>
    )
}

export default Part