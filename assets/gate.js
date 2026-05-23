(function () {
  var config = window.SURVEY_GATE_CONFIG;
  if (!config) return;

  var iframe = document.getElementById("survey-frame");
  var downloadSection = document.getElementById("download-section");
  var loadCount = 0;

  iframe.src =
    "https://docs.google.com/forms/d/e/" +
    config.formId +
    "/viewform?embedded=true";

  function showDownload() {
    downloadSection.classList.add("visible");
    try {
      localStorage.setItem(config.storageKey, "1");
    } catch (e) {}
  }

  if (localStorage.getItem(config.storageKey) === "1") {
    showDownload();
  }

  iframe.addEventListener("load", function () {
    loadCount++;
    // First load = the form. Second load = submission confirmation page.
    if (loadCount >= 2) {
      showDownload();
    }
  });
})();
