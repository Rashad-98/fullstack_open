import { useState, useEffect } from 'react'
import personsService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])
  const [message, setMessage] = useState(null)
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(persons => {
        setPersons(persons)
        setFilteredPersons(persons)
      })
  }, [])

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value)
    if(e.target.value === '') {
      setFilteredPersons(persons)
      return
    }
    const items = persons.filter(item => item.name.includes(e.target.value))
    setFilteredPersons(items)
  }

  const addName = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    clearTimeout(timeoutId)
    setTimeoutId(setTimeout(() => {
      setMessage(null)
    }, 5000))

    for (let i = 0; i < persons.length; i++) {
      if(persons[i].name === newName) {
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          personsService
            .change(persons[i].id, newPerson)
            .then(response => {
              const personsCopy = [...persons]
              personsCopy[i] = response.data
              setPersons(personsCopy)
              setFilteredPersons(personsCopy)
              setNewName('')
              setNewNumber('')
              setMessage(`Updated ${newName}`)
            })
            return
        } else {
          return
        }
      }
    }

    personsService
      .create(newPerson)
      .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          setFilteredPersons(persons.concat(createdPerson))
          setNewName('')
          setNewNumber('')
          setMessage(`Added ${newName}`)
        })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} setMessage={setMessage}/>
      <Filter searchTerm={searchTerm} handler={handleSearchTerm}/>
      <h3>add a new</h3>
      <PersonForm
        action={addName}
        name={newName}
        nameHandler={handleNameChange}
        number={newNumber}
        numberHandler={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons
        persons={filteredPersons}
        setPersons={setPersons}
        setFilteredPersons={setFilteredPersons}
        setMessage={setMessage}
        timeoutId={timeoutId}
        setTimeoutId={setTimeoutId}
      />
    </div>
  )
}

export default App