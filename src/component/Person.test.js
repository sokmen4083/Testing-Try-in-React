import { render, screen } from '@testing-library/react';
import Person from "./Person"

let data = null;
beforeEach(() => {
    data = {
        "firstname": "Hi",
        "lastname": "Coders"
    }
})

test('sayfada "hi" görünmeli', () => {

  render(<Person data={data}/>);
  const element = screen.getByText(/Hi/i);
  expect(element).toBeInTheDocument();
});


test('sayfada "coders" görünmeli', () => {
   
    
 render(<Person data={data}/>);
 const element = screen.getByText(/Coders/i);
 expect(element).toBeInTheDocument();
 });


 test('sayfadaki text 3 harfden fazla olmali', () => {
    
 render(<Person data={data}/>);
 const element = screen.getByText(/Coders/i);
 expect(element.textContent.length).toBeGreaterThanOrEqual(3);
 });
