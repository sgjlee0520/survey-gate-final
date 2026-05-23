(function () {
  var config = window.SOLUTIONS_CONFIG;
  if (!config) return;

  var params = new URLSearchParams(window.location.search);
  var accessToken = params.get("k");

  var deniedCard = document.getElementById("denied-card");
  var passcodeCard = document.getElementById("passcode-card");
  var lockedCard = document.getElementById("locked-card");
  var waitingCard = document.getElementById("waiting-card");
  var downloadsCard = document.getElementById("downloads-card");
  var passcodeForm = document.getElementById("passcode-form");
  var passcodeInput = document.getElementById("passcode-input");
  var passcodeError = document.getElementById("passcode-error");
  var downloadLink = document.getElementById("download-link");

  downloadLink.href = config.pdfPath;

  var downloadLabel = document.getElementById("download-label");
  if (downloadLabel) {
    downloadLabel.textContent = config.pdfLabel;
  }

  function hideAll() {
    deniedCard.classList.add("hidden");
    passcodeCard.classList.add("hidden");
    lockedCard.classList.add("hidden");
    waitingCard.classList.add("hidden");
    downloadsCard.classList.add("hidden");
  }

  function show(card) {
    hideAll();
    card.classList.remove("hidden");
  }

  function isAuthed() {
    try {
      return sessionStorage.getItem(config.authStorageKey) === "1";
    } catch (e) {
      return false;
    }
  }

  function setAuthed() {
    try {
      sessionStorage.setItem(config.authStorageKey, "1");
    } catch (e) {}
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

    if (!isAuthed()) {
      show(passcodeCard);
      return;
    }

    if (!isUnlocked()) {
      show(lockedCard);
      return;
    }

    checkPdfAvailable(function (available) {
      if (available) {
        show(downloadsCard);
      } else {
        show(waitingCard);
      }
    });
  }

  passcodeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    passcodeError.classList.add("hidden");

    if (passcodeInput.value.trim() === config.passphrase) {
      setAuthed();
      updateView();
      return;
    }

    passcodeError.classList.remove("hidden");
    passcodeInput.value = "";
    passcodeInput.focus();
  });

  updateView();
  setInterval(updateView, 30000);
})();
