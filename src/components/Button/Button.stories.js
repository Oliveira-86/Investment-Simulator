import Button from '.'

export default {
  title: 'Component/Button',
  component: Button
}

export const Primary = () => <Button label="Simular" />

export const Disabled = () => <Button label="Simular" disabled />

export const Secondary = () => <Button label="Limpar Campos" secondary />

export const Loading = () => <Button loading />
