function Scenario() {
  this.early = [
    { text: "A magpie visits.", options: ["berry", "coin"] },
    { text: "There is a leak.", options: ["twig", "feather"] }
  ];
};

Scenario.prototype.selectEarlyScenario = function() {
  return this.early[Math.floor(Math.random() * 2)];
};
