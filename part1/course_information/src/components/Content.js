import Part from "./Part"

const Content = (props) => {
    const part1 = props.content[0]
    const part2 = props.content[1]
    const part3 = props.content[2]

    return (
        <>
            <Part info={{part: part1}}/>
            <Part info={{part: part2}}/>
            <Part info={{part: part3}}/>
        </>
    )
}

export default Content