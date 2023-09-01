import Part from "./Part"

const Content = (props) => {
    const [part1, part2, part3] = props.parts

    return (
        <>
            <Part info={{part: part1}}/>
            <Part info={{part: part2}}/>
            <Part info={{part: part3}}/>
        </>
    )
}

export default Content