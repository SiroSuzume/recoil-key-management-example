module.exports = [
  {
    type: "input",
    name: "path",
    default: "src/recoil",
    message:
      "Which folder should recoil-hooks be placed in? ex: src/recoil/setting",
  },
  {
    type: "input",
    name: "key",
    message: "suffix to use as a key ex: detail",
  },
  {
    type: "input",
    name: "type",
    message: "type name for the value ex: string | undefined",
    default: "string | undefined",
  },
  {
    type: "input",
    name: "name",
    message: "name for atoms, selectors, and hooks ex: userDetail",
  },
  {
    type: "select",
    default: "atom",
    name: "recoilType",
    message: "Please select the type of Recoil",
    choices: ["atom", "selector", "atomFamily", "selectorFamily"],
  },
  {
    type: "select",
    name: "getterSetter",
    message: "Do you want to create getters and setters?",
    choices: ["getter", "setter", "both"],
    default: "both",
  },
];
