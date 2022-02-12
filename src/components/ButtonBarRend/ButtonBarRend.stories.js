import ButtonBar from ".";

export default {
  title: "Component/ButtonBar",
  component: ButtonBar,
};

export const Primary = () => (
  <ButtonBar
    title="Tipos de indexação"
  />
);

export const RightActive = () => (
  <ButtonBar
    title="Tipos de indexação"
    rightActive
  />
);

export const LeftActive = () => (
  <ButtonBar
    title="Tipos de indexação"
    leftActive
  />
);