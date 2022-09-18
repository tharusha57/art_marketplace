
import './SearchBar.css'


const SearchForm = () => {
    return (        
            <form>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Search Something...'
                        autoComplete='off'
                    />
            </form>
    )
}

export default SearchForm