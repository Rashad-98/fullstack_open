const Filter = ({searchTerm, handler}) => {
    return (
        <div>
            filter shown with <input value={searchTerm} onChange={handler}/>
        </div>
    )
}

export default Filter