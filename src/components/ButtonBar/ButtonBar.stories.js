import ButtonBar from ".";

export default {
  title: "Component/ButtonBar",
  component: ButtonBar,
};

export const Primary = () => (
  <ButtonBar
    title="Tipos de indexação"
    textRight="PRÉ"
    textMid="POS"
    textLeft="FIXADO"
  />
);
