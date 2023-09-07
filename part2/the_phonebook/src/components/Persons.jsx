import personsService from '../services/persons'

const Persons = ({persons, setPersons, setFilteredPersons, setMessage, timeoutId, setTimeoutId}) => {
    const handleDelete = (e) => {
        const name = e.target.parentElement.firstChild.textContent
        if(window.confirm(`Delete ${name}?`)) {
            const person = persons.find(person => person.name === name)
            const id = person.id
            personsService
                .remove(id)
                .catch(() => setMessage(`Deleted ${name}`))
            const newPersons = persons.filter(person => person.id !== id)
            setPersons(newPersons)
            setFilteredPersons(newPersons)
            setMessage(`Deleted ${name}`)
            clearTimeout(timeoutId)
            setTimeoutId(setTimeout(() => {
                setMessage(null)
            }, 5000))
        }
    }

    return (
        <>
            {persons.map(person => {
                return (
                    <div key={person.name}>
                        <span>{person.name}</span>
                        <span> {person.number} </span>
                        <button onClick={handleDelete}>delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default Persons