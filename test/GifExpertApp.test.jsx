
import { render ,screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas para GifExpertApp', () => { 

   // test('debe comprobar que onAddCategory añada la categoria ', () => { 
   //    const { container } =  render( <GifExpertApp /> );
   //    expect ( container ).toMatchSnapshot();
   //  });

   test('El titulo debe de ser GifExpertApp', () => { 
        render(<GifExpertApp />);    
       expect (screen.getByTestId('title').innerHTML ).toBe('GifExpertApp');
    })

    

})