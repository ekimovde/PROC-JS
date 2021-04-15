export let SetText = {
  text: "",
};

export const addText = (text) => {
  SetText.text = text;
};

export const outSetText = (writer) => {
  writer.write(`Text: ${this.text}, `);
};
