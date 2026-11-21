/* Connects the hub to the Google Sheet.
   Until this is filled in, the site shows the copy saved in the data/ folder.

   1. In the sheet: File → Share → Publish to web → "Entire document" + "Comma-separated values (.csv)" → Publish.
      Paste the link it gives you between the quotes below.
   2. For each tab, click the tab in the sheet and copy the number after "gid=" in the browser's address bar.
      Paste it next to that tab's name. A tab left empty uses the saved copy in data/. */
window.HUB_SHEET = {
  publishedUrl: "",
  tabs: {
    "Settings":    "",
    "Sections":    "",
    "Status":      "",
    "Timeline":    "",
    "Deadlines":   "",
    "Clock":       "",
    "Crew":        "",
    "Open roles":  "",
    "Cast":        "",
    "Locations":   "",
    "Departments": "",
    "Questions":   "",
    "Rules":       ""
  }
};
