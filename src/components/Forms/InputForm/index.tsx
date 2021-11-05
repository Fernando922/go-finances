import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";
import { Container } from "./styles";

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export function InputForm({ control, name, ...rest }: Props) {
  return (
    <Container>
      {/* necessário para controlar o input evitando renderizações desnecessarias */}
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
    </Container>
  );
}
