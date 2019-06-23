$(document).ready(function() {
  var coop = new Coop();
  $('#eggAmount').text(coop.showEggs().length);
};
