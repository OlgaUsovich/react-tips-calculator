import { FormEvent, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { ITipsOption } from "../../types/types";
import { Button } from "../Button/Button";
import { CustomSelect } from "../Custom-select/CustomSelect";
import { Input } from "../Input/Input";
import { Title, StyledForm, Subtitle, Total } from "./styles";


export const Form = () => {
  const bill = useInput();
  const people = useInput();
  const [tips, setTips] = useState<ITipsOption>({value: 10, label: "10%"});
  const [total, setTotal] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSelect = (option: ITipsOption | null): void => {
    if (option){
      setTips(option);
    }
  };

  const calculateTips = (billStr: string, peopleStr: string, percent: number): number => {
    const bill = Number(billStr);
    const people = Number(peopleStr);
    return bill + ((bill * percent) / 100) * people;
  };

  const handleSubmit= (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setTotal(calculateTips(bill.value, people.value, tips.value));
  };

  useEffect((): void => {
    if (bill.value && people.value) {
      return setIsDisabled(false);
    } else {
      return setIsDisabled(true);
    }
  }, [bill, people]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input placeholder="Enter bill" {...bill} />
      <Input placeholder="Enter people" {...people} />
      <CustomSelect tips={tips} handleSelect={handleSelect} />
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button disabled={isDisabled} />
    </StyledForm>
  );
};
