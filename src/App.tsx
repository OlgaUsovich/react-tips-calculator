import { Form } from "./components/form/Form";
import { CircleLeft, CircleTop, FormContainer, GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <>
      <CircleTop/>
      <CircleLeft/>
      <GlobalStyle />
      <FormContainer>
        <Form />
      </FormContainer>
    </>
  );
}

export default App;
