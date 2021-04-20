export default {
  dark: false,
  title: "Maybe there's a Dropbox?",
  overline: "QUESTION:",
  summary: "Course Dropbox?",
  text:
    "Does the course have a managed dropbox? Sometimes a course's club or park service manages a dropbox as a sort " +
    "of lost and found. They're often located near the course's main signage, but sometimes the signs will tell " +
    "you of an offsite store/shop/restaurant with regular hours that acts as the dropbox.",
  html: false,
  options: [
    {
      id: 0,
      link: "/returnToDropBox",
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
