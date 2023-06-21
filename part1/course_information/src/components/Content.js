const Content = (props) => {
    const {part1, exercises1} = props.content[0]
    const {part2, exercises2} = props.content[1]
    const {part3, exercises3} = props.content[2]
    
    return (
        <>
            <p>
                {part1} {exercises1}
            </p>
            <p>
                {part2} {exercises2}
            </p>
            <p>
                {part3} {exercises3}
            </p>
        </>
    )
}

export default Content