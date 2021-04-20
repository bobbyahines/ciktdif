export default {
  title: "You Lose a Disc?",
  overline: "QUESTION:",
  summary: "Say Hello!",
  text:
    "Ask them if they've lost a disc, and what disc it was. Did they lose the disc you found?",
  options: [
    {
      id: 0,
      link: "/returnIt",
      color: "green",
      text: "Yes",
    },
    {
      id: 1,
      link: "/keepIt",
      color: "orange",
      text: "No",
    },
  ],
};
