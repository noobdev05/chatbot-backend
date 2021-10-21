const questions = {
  0: "How often are you stressed?",
  1: "Avg. sleep hours in a day?",
  2: "Do you consume any intoxicant in order to overcome your problem?",
  3: "During the past 4 weeks, how often have/has your emotional problems interfered with your social activities, such as visiting friends, relatives, etcetera?",
  4: "During the past 4 weeks, have you had any problems with your work or daily life due to your physical health? ",
  5: "Have you ever experienced an ‘attack’ of fear, anxiety, or panic?",
  6: "have you ever considered consulting about mental health ?",
  7: "How did your appetite changed over the past few weeks?",
  8: "How often you express your feelings with your closed ones?",
  9: "Over the past month how frequently did you feel lonely?",
  10: "Did you get any sucidial thoughts lately?",
};

const options = [
  [5, 1, 0, 3],
  [0, 2, 4],
  [4, 2, 0],
  [5, 1, 0, 3],
  [4, 0, 2],
  [5, 2, 0],
  [4, 2, 1, 0],
  [3, 3, 0],
  [1, 2, 4],
  [4, 1, 0],
  [45, 0],
];
module.exports = {
  questions: questions,
  options: options,
};
