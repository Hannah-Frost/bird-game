function Scenario() {
  this.early = [
    { text: "A magpie visits.", options: ["berry", "coin"], choice: { berry: ["- berry", "A berry has been removed."], coin: ["- coin", "A coin has been removed."], nothing: ["", "You did nothing."] } },
    { text: "There is a leak.", options: ["feather", "twig"], choice: { feather: ["- feather", "A feather has been removed."], twig: ["- twig", "A twig has been removed."], nothing: ["", "You did nothing."] } }
  ];
};

Scenario.prototype.selectEarlyScenario = function() {
  return this.early[Math.floor(Math.random() * 2)];
};
