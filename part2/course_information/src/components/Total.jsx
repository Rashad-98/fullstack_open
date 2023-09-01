const Total = ({parts}) => {
    // const exercises1 = props.parts[0].exercises
    // const exercises2 = props.parts[1].exercises
    // const exercises3 = props.parts[2].exercises
    let sum = 0;
    parts.forEach(part => {
        sum += part.exercises
    })
    
    return  <h2>total of {sum} exercises</h2>
}

export default Total