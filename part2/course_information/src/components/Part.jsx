const Part = (props) => {
    const {info} = props

    return (
        <p>
            {info.name} {info.exercises}
        </p>
    )
}

export default Part