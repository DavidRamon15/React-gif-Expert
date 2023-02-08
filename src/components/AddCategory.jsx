import { useState } from "react"



export const AddCategory = ( { setCategories ,onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const newInputValue = inputValue.trim();
        
        if(newInputValue.length <= 1) return;

        onNewCategory( newInputValue );
        setInputValue('')
    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }

        />
        
    </form>
  )
}

