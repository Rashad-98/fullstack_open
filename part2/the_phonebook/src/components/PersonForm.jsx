const PersonForm = ({action, name, nameHandler, number, numberHandler}) => {
    return (
        <form onSubmit={action}>
            <div>name: <input value={name} onChange={nameHandler}/></div>
            <div>number: <input value={number} onChange={numberHandler}/></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm