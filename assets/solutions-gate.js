(function () {
  var config = window.SOLUTIONS_CONFIG;
  if (!config) return;

  var params = new URLSearchParams(window.location.search);
  var accessToken = params.get("k");

  var deniedCard = document.getElementById("denied-card");
  var lockedCard = document.getElementById("locked-card");
  var waitingCard = document.getElementById("waiting-card");
  var downloadsCard = document.getElementById("downloads-card");
  var downloadLink = document.getElementById("download-link");
  var headerMessage = document.getElementById("header-message");

  downloadLink.href = config.pdfPath;

  var downloadLabel = document.getElementById("download-label");
  if (downloadLabel) {
    downloadLabel.textContent = config.pdfLabel;
  }

  function hideAll() {
    deniedCard.classList.add("hidden");
    lockedCard.classList.add("hidden");
    waitingCard.classList.add("hidden");
    downloadsCard.classList.add("hidden");
  }

  function show(card) {
    hideAll();
    card.classList.remove("hidden");
  }

  function isUnlocked() {
    return new Date() >= config.unlockTime;
  }

  function checkPdfAvailable(callback) {
    fetch(config.pdfPath, { method: "HEAD", cache: "no-store" })
      .then(function (response) {
        callback(response.ok);
      })
      .catch(function () {
        callback(false);
      });
  }

  function updateView() {
    if (accessToken !== config.accessToken) {
      show(deniedCard);
      return;
    }

    checkPdfAvailable(function (available) {
      if (available) {
        show(downloadsCard);
        if (headerMessage) {
          headerMessage.textContent = "Solution keys are available now.";
        }
        return;
      }

      if (!isUnlocked()) {
        show(lockedCard);
        return;
      } else {
        show(waitingCard);
      }
    });
  }

  updateView();
  setInterval(updateView, 30000);
})();
