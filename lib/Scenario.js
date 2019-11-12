function Scenario() {
  this.early = [
    { text: "A magpie visits.", options: ["berry", "coin"], choice: {
      berry: ["-berry", "You chose to use a berry."], coin: ["-coin", "You chose to use a coin."], nothing: ["", "You chose to do nothing."] } },
    { text: "There is a leak.", options: ["feather", "twig"], choice: {
      feather: ["-feather,+twig", "You chose to use a feather."], twig: ["-twig", "You chose to use a twig."], nothing: ["", "You chose to do nothing."] } }
  ];
};

Scenario.prototype.selectEarlyScenario = function() {
  return this.early[Math.floor(Math.random() * 2)];
};
