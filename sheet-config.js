/* Connects the hub to the Google Sheet.
   Until this is filled in, the site shows the copy saved in the data/ folder.

   1. In the sheet: File → Share → Publish to web → "Entire document" + "Comma-separated values (.csv)" → Publish.
      Paste the link it gives you between the quotes below.
   2. For each tab, click the tab in the sheet and copy the number after "gid=" in the browser's address bar.
      Paste it next to that tab's name. A tab left empty uses the saved copy in data/. */
window.HUB_SHEET = {
  publishedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRwLyToh5YJGc4k5jRl7GIUbRXfiHqeghV3-KKtNPzYGUI5K62BOeTf_srI8yYBCwMg53PX3Qq0ZdcT/pubhtml",
  tabs: {
    "Settings":    "967787834",
    "Sections":    "58865514",
    "Status":      "127856214",
    "Timeline":    "2100141254",
    "Deadlines":   "1602858468",
    "Clock":       "1819239765",
    "Crew":        "823001797",
    "Open roles":  "618559768",
    "Cast":        "2119504210",
    "Locations":   "863968843",
    "Departments": "344909769",
    "Questions":   "170723425",
    "Rules":       "2059655578"
  }
};
