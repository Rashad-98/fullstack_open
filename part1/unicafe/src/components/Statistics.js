const Statistics = ({good, neutral, bad}) => {
    if(!(good || neutral || bad)) return <div>No feedback given</div>

    return (
        <div>
            good {good}
            <br />
            neutral {neutral}
            <br />
            bad {bad}
            <br />
            all {good + neutral + bad}
            <br />
            average {(good + neutral + bad) / 3}
            <br />
            positive {(good / (good + neutral + bad) * 100)} %
        </div>
    )
}

export default Statistics