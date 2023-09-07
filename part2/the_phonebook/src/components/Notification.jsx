const Notification = ({message, timeoutId}) => {
    if(message === null) return null

    const inlineStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={inlineStyle}>
            {message}
        </div>
    )
}

export default Notification