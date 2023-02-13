import { fireEvent, render, screen } from '@testing-library/react'
import { renderIntoDocument } from 'react-dom/test-utils';
import { AddCategory } from '../src/components/AddCategory'

describe('Pruebas En <AddCategory />', () => { 
    
    
    test('Debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={ () => {} } /> );
        
        const input = screen.getByRole('textbox')

        fireEvent.input( input, {target: {value:'Programacion'} } );

        expect( input.value ).toBe('Programacion');
        screen.debug();
    }) 

    test('debe de llamar a onNewCategory si el input tiene un Valor', () => { 
        
        const inputValue = 'Programacion'
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        
        const campoInput = screen.getByRole('textbox');
        const campoForm  = screen.getByRole('form');

        fireEvent.input( campoInput, {target: {value: inputValue } } );
        fireEvent.submit( campoForm );

       expect( campoInput.value ).toBe('');
        // evalua si ha sido llamado 
       expect( onNewCategory ).toHaveBeenCalled();
       // evalua si ha sido llamado una vez
       expect( onNewCategory ).toHaveBeenCalledTimes(1);
       // evalua si ha sido llamado con el valor de InputValue
       expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    })

    test('no debe de llamar el onNewCategory sin el inpu esta vacio ', () => { 
        
        
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const campoInput = screen.getByRole('textbox');
        const campoForm  = screen.getByRole('form');

        
        fireEvent.submit( campoForm );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        //usar negativos en expect
        expect( onNewCategory ).not.toHaveBeenCalled();

    })
})