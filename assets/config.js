window.SURVEY_GATE_CONFIG = {
  formId: "1FAIpQLSeJbrBZmq1iRj2Jm_7bFAk5h5a3RaoHRJ_FTDkRhX40WdYrlw",
  storageKey: "phys23-final-survey-completed",
  pdfPath: "assets/practice-final-1.pdf",
  pdfLabel: "Download Practice Final (Part 1)"
};

window.SOLUTIONS_CONFIG = {
  // Required query param: ?k=<accessToken>
  accessToken: "phys23-may25",

  // Published PDF path — file is added to main by GitHub Actions at unlock time
  pdfPath: "practice-final-1-keys.pdf",
  pdfLabel: "Download Practice Final Part 1 Keys",

  // Month is 0-indexed: 4 = May
  unlockTime: new Date(2026, 4, 25, 10, 0, 0),
  unlockLabel: "Sunday, May 25 at 10:00 AM"
};
