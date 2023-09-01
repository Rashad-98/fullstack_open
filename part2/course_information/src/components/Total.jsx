const Total = ({parts}) => {

    const sum = parts.reduce((sum, part) => { 
        return sum += part.exercises
    }, 0)
    
    return  <h2>total of {sum} exercises</h2>
}

export default Total