import react from "react";
import {render, fireEvent, getByText} from "@testing-library/react";
import Login from '../Login'
test('render form properly ',()=>{
    const{getByTestedId,getByLabbelText}=render(<Login/>);
    const nameLabel =getByText(/user or email/i);
    const nameLabel =getByText(/password/i)
    expect(nameLabel).toBeInTheDocument();


})

test('should navigate to ... when link is clicked', () => {
    const { getByText } = render(<a href="http://localhost:3000">Click Me</a>);

    const link = getByText('Click Me');

    fireEvent.click(link);

    expect(window.location.href).toBe("http://localhost:3000/Home");
});
