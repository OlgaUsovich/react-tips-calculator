import { useEffect, useState } from "react";
import { IOption } from "../../types/types";
import { Button } from "../button/Button";
import { CustomSelect } from "../custom-select/CustomSelect";
import { Input } from "../input/Input";
import { Title, StyledForm, Subtitle, Total } from "./styles";

const options: IOption[] = [
  {
    value: 10,
    label: "10%",
  },
  {
    value: 15,
    label: "15%",
  },
  {
    value: 20,
    label: "20%",
  },
];

export const Form = () => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [percent, setPercent] = useState(10);
  const [total, setTotal] = useState(0.0);
  const [buttonState, setButtonState] = useState(true);

  const handleBill = (value: string): void => {
    setBill(value);
  };

  const handlePeople = (value: string): void => {
    setPeople(value);
  };

  const getPercentValue = (): IOption | undefined | "" => {
    return percent ? options.find((option) => option.value === percent) : "";
  };

  const handlePercent = (newValue: any): void => {
    setPercent(newValue.value);
  };

  const calculateTips = (billStr: string, peopleStr: string, percent: number): number => {
    const bill = Number(billStr);
    const people = Number(peopleStr);
    return bill + ((bill * percent) / 100) * people;
  };

  const onButtonClick = (): void => {
    setTotal(calculateTips(bill, people, percent));
  };

  useEffect(() => {
    if (bill && people) {
      return setButtonState(false)
    } else {
      return setButtonState(true)
    }
  })

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input placeholder="Enter bill" value={bill} onChange={handleBill} />
      <Input placeholder="Enter people" value={people} onChange={handlePeople} />
      <CustomSelect onChange={handlePercent} value={getPercentValue()} options={options} />
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button onClick={onButtonClick}  disabled={ buttonState }/>
    </StyledForm>
  );
};
