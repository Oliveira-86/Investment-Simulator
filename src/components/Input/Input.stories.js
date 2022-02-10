import Input from ".";

export default {
  title: "Component/Input",
  component: Input,
};

export const InputDefault = () => <Input label='Aporte Inicial'  />

export const InputError = () => <Input label='Aporte Mensal' error errorMessage='Aporte deve ser um numero' />

