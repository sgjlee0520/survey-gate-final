(function () {
  var config = window.SOLUTIONS_CONFIG;
  if (!config) return;

  var lockedCard = document.getElementById("locked-card");
  var downloadsCard = document.getElementById("downloads-card");

  function updateTimeLock() {
    var unlocked = new Date() >= config.unlockTime;
    lockedCard.classList.toggle("hidden", unlocked);
    downloadsCard.classList.toggle("hidden", !unlocked);
  }

  updateTimeLock();
  setInterval(updateTimeLock, 1000);
})();
