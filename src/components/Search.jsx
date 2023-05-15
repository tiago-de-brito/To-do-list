
const search = ({search, setSearch }) => {
  return (
    <div className="Search">
        <h2>Pesquisar:</h2>
        <input 
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder = "Digite Para pesquisar" 
        />

     </div>
  )
  }

export default search