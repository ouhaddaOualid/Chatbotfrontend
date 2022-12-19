import {render,screen,cleanup} from "@testing-library/react";
import Login from '../Login';
test('Should render LoginComponent',()=>{
    render(<Login/>);
    const todoElement =screen.getByTestId('todo_1');
    expect(todoElement).toBeInTheDocument();
})
