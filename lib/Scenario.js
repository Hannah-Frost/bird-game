function Scenario() {
  this.early = [
    { text: "A magpie visits.", options: ["berry", "coin"], choice: { berry: { action: "- berry", outcome: "A berry has been removed." }, coin: { action: "- coin", outcome: "A coin has been removed." }, nothing: { action: "", outcome: "You did nothing." } } },
    { text: "There is a leak.", options: ["feather", "twig"], choice: { feather: { action: "- feather", outcome: "A feather has been removed." }, twig: { action: "- twig", outcome: "A twig has been removed." }, nothing: { action: "", outcome: "You did nothing." } } }
  ];
};

Scenario.prototype.selectEarlyScenario = function() {
  return this.early[Math.floor(Math.random() * 2)];
};
