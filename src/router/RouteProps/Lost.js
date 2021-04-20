export default {
  dark: false,
  title: "You Lose a Disc?",
  overline: "QUESTION:",
  summary: "Say Hello!",
  text:
    "Ask them if they've lost a disc, and what disc it was. Did they lose the disc you found?",
  html: false,
  options: [
    {
      id: 0,
      link: "/returnIt",
      color: "green",
      text: "Yes",
    },
    {
      id: 1,
      link: "/dropBox",
      color: "orange",
      text: "No",
    },
  ],
};
