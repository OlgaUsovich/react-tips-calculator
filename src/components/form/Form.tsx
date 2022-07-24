import { useState } from "react";
import { Button } from "../button/Button";
import { CustomSelect } from "../custom-select/CustomSelect";
import { Input } from "../input/Input";
import { Title, StyledForm, Subtitle, Total } from "./styles";

export const Form = () => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");

  const handleBill = (value: string): void => {
    setBill(value);
  };

  const handlePeople = (value: string): void => {
    setPeople(value);
  };

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input placeholder="Enter bill" value={bill} onChange={handleBill} />
      <Input placeholder="Enter people" value={people} onChange={handlePeople} />
      <CustomSelect />
      <Total>Total: 0.00$</Total>
      <Button />
    </StyledForm>
  );
};
