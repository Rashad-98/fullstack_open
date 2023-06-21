import Part from "./Part"

const Content = (props) => {
    const {part1, exercises1} = props.content[0]
    const {part2, exercises2} = props.content[1]
    const {part3, exercises3} = props.content[2]

    return (
        <>
            <Part info={{part: part1, exercise: exercises1}}/>
            <Part info={{part: part2, exercise: exercises2}}/>
            <Part info={{part: part3, exercise: exercises3}}/>
        </>
    )
}

export default Content