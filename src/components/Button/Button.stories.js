import Button from '.'

export default {
  title: 'Component/Button',
  component: Button
}

export const Primary = () => <Button label="Simular" />

export const Disabled = () => <Button label="Simular" variant='disable' />

export const Secondary = () => <Button label="Limpar Campos" variant='outlined' />

export const Loading = () => <Button loading />
