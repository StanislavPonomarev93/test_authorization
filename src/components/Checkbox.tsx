import React, { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";

interface CounterProps {
  checkState: [boolean, Dispatch<SetStateAction<boolean>>];
}

const Checkbox: FC<CounterProps> = ({ checkState: [check, setCheck] }) => {
  return (
    <CheckBox onChange={() => setCheck(!check)}>
      <CheckBoxInput type="checkbox" id="checkbox" />
      <CheckBoxLabel htmlFor="checkbox"></CheckBoxLabel>
    </CheckBox>
  )
}

export default Checkbox;

const CheckBox = styled.div`
display: inline-block;
position: relative;
width: 18px;
height: 18px;
border: 1px solid #000;
border-radius: 5px;
margin-right: 10px;
`;

const CheckBoxLabel = styled.label`
display: block;
position: absolute;
width: 70%;
height: 70%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) scaleX(1) scaleY(1);
background-color: #fff;
`;

const CheckBoxInput = styled.input`
position: absolute;
opacity: 0;
z-index: 1;
&:checked + ${CheckBoxLabel} {
background-color: #618dec;
}
`;
