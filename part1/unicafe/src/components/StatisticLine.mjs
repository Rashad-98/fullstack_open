const StatisticLine = ({text, value, unit}) => {
    return (
        <tr>
            <td>
                {text}
            </td>
            <td>
                {value} {unit}
            </td>
        </tr>
    )
}

export default StatisticLine