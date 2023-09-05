import { useState, useEffect } from 'react'
import personsService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

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
    for (let i = 0; i < persons.length; i++) {
      if(persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`)
        return
      }
    }
    const newPerson = {
      name: newName,
      number: newNumber
    }

    personsService
      .create(newPerson)
      .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          setFilteredPersons(persons.concat(createdPerson))
          setNewName('')
          setNewNumber('')
        })
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App