import StatisticLine from "./StatisticLine.mjs"

const Statistics = ({good, neutral, bad}) => {
    if(!(good || neutral || bad)) return <div>No feedback given</div>

    return (
        <table>
            <tbody>
                <StatisticLine text='good' value={good} />
                <StatisticLine text='neutral' value={neutral} />
                <StatisticLine text='bad' value={bad} />
                <StatisticLine text='all' value={good + neutral + bad} />
                <StatisticLine text='average' value={(good + (-1) * bad) / (good + neutral + bad)} />
                <StatisticLine text='positive' value={(good / (good + neutral + bad) * 100)} unit='%'/>
            </tbody>
        </table>
    )
}

export default Statistics