import ButtonBar from ".";

export default {
  title: "Component/ButtonBar",
  component: ButtonBar,
};

export const RightActive = () => (
  <ButtonBar
    title="Tipos de indexação"
    rightActive
    textRight="Bruto"
    textLeft="Líquido"
  />
);

export const LeftActive = () => (
  <ButtonBar
    title="Tipos de indexação"
    leftActive
    textRight="Bruto"
    textLeft="Líquido"
  />
);

export const MidActive = () => (
  <ButtonBar title="Tipos de indexação" leftActive midButton />
);
