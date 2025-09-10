const quotes = {
  frustrated: [
    "Every setback is a setup for a comeback.",
    "Frustration is fuel—channel it into progress.",
    "Even the best code starts with broken logic."
  ],
  focused: [
    "Stay locked in. Distraction is the enemy of greatness.",
    "Focus turns effort into excellence.",
    "One bug at a time. One win at a time."
  ],
  curious: [
    "Curiosity is the engine of innovation.",
    "Ask boldly. Learn relentlessly.",
    "Every 'why' leads to a better 'how'."
  ],
  tired: [
    "Rest is part of the process, not a pause from it.",
    "Even machines need cooldowns—so do you.",
    "Recharge now, conquer later."
  ],
  confident: [
    "You’ve got this. Your skills speak louder than doubt.",
    "Confidence is earned—yours is well-deserved.",
    "Code like you mean it. Present like you own it."
  ]
};

document.getElementById("getQuote").addEventListener("click", () => {
  const mood = document.getElementById("mood").value;
  const quoteEl = document.getElementById("quote");

  if (!mood || !quotes[mood]) {
    quoteEl.textContent = "Please select a mood to get inspired.";
    return;
  }

  const moodQuotes = quotes[mood];
  const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
  quoteEl.textContent = `"${randomQuote}"`;
});
