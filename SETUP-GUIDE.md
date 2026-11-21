# 48 Hour Film Hub: setup guide

What's in the folder:

| File | What it is | Upload to GitHub? |
|---|---|---|
| `index.html` | The hub. Same design as before, but it fills itself in from the sheet. | Yes |
| `sheet-config.js` | The one file you edit to connect the sheet. | Yes |
| `og-image.png` | The 1200×630 WhatsApp/social preview picture. | Yes |
| `data/` | A saved copy of every tab. Used until the sheet is connected, or if Google is unreachable. | Yes (the whole folder) |
| `setup/` | This guide, the spreadsheet file and the preview image's source. | No |

The Google Sheet **"48 Hour Film Hub — content"** is already in your Google Drive with every tab filled in:
https://docs.google.com/spreadsheets/d/10walFeqLZPRrfCzJraFUZmlSspZfYsscszcMyAjgcx4/edit

(If you ever need to rebuild it: Google Sheets → File → Import → Upload `setup/hub-content.xlsx` → "Replace spreadsheet".)

---

## Step 1. Put your GitHub username into the page (30 seconds)

WhatsApp needs the preview picture's full web address, and that address contains your GitHub username.
Open Terminal in this folder and run, swapping in your username:

```bash
sed -i '' 's/YOUR-GITHUB-USERNAME/eliudandima-stack/g' index.html
```

The site will live at `https://eliudandima-stack.github.io/48-hour-hub/`. If you name the repo something other than `48-hour-hub`, change that part in `index.html` too (search for `48-hour-hub`).

## Step 2. Create the GitHub repo and upload (5 minutes)

1. Go to https://github.com and sign in (or **Sign up**; the free plan is enough).
2. Top right **+** → **New repository**.
3. Repository name: `48-hour-hub`. Leave it **Public** (free GitHub Pages needs a public repo). Don't tick any of the "Add a README / .gitignore / license" boxes. Click **Create repository**.
4. On the empty repo page, click the link **uploading an existing file**.
5. In Finder, open the `48-Hours` folder, select `index.html`, `sheet-config.js`, `og-image.png` and the `data` folder, and drag them all onto the upload area. Wait until all 16 files are listed (13 of them inside `data/`).
6. Scroll down and click **Commit changes**.

## Step 3. Turn on GitHub Pages (2 minutes)

1. In the repo, click **Settings** (top tab bar) → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, pick `main` and `/ (root)`, then **Save**.
4. Wait 1 to 2 minutes and refresh the page. A box appears: "Your site is live at https://eliudandima-stack.github.io/48-hour-hub/". Open it.

The site already works at this point, using the saved copy in `data/`.

## Step 4. Publish the sheet and connect it (5 minutes)

1. Open the sheet (link above).
2. **File → Share → Publish to web**.
3. In the first dropdown keep **Entire document**. In the second choose **Comma-separated values (.csv)**. Click **Publish**, then **OK**.
4. Copy the link it shows (it starts with `https://docs.google.com/spreadsheets/d/e/2PACX-`).
5. Now collect each tab's number: click the **Settings** tab at the bottom of the sheet, and look at the browser's address bar. It ends in `#gid=` followed by a number, e.g. `#gid=1873249001`. Copy that number. Do the same for all 13 tabs.
6. On GitHub, open `sheet-config.js` in the repo and click the **pencil** (Edit) icon.
7. Paste the publish link between the quotes after `publishedUrl:`, and each number between the quotes next to its tab's name. It should end up looking like:

   ```js
   publishedUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT.../pubhtml",
   tabs: {
     "Settings":    "0",
     "Sections":    "1873249001",
     ...
   ```
8. Click **Commit changes** (twice). Wait a minute, then reload the site.

To check it's really reading the sheet: change a word in the sheet, wait about 5 minutes (Google refreshes published data every few minutes), and reload the site.

Publishing makes the sheet's contents readable by anyone with the link, exactly like the site itself. Keep phone numbers and anything private out of it.

## Step 5. Test the WhatsApp preview

Paste the site link into a WhatsApp chat (to yourself is fine) and wait for the card to appear before sending. WhatsApp remembers a link's preview, so if you pasted the link before the picture was uploaded, add `?v=2` to the end of the link to get a fresh one.

---

## How to edit the sheet

General rules for every tab:

- **One row = one item.** Add a row to add something, delete a row to remove it. Row order = order on the page.
- Leave the **header row (row 1) exactly as it is.** The site finds columns by those names. Don't rename or reorder tabs' headers. Tabs themselves can be in any order but keep their names.
- In any text you can write `*italic*` and `**bold**`.
- **Colours** (`colour` column): `green` = done, `amber` = in progress, `blue` = to do / next, `red` = urgent.

### Settings
`key | value | what_it_is`. Only edit the **value** column. The `what_it_is` column explains each row. `clock_start_date` drives the countdown: write it as `2026-12-04`.

### Sections
`id | nav_label | number | heading | intro`. The heading and intro paragraph of each numbered section, and the label in the top bar. Don't change the `id` column.

### Status ("Where we're at")
`stage | description | status | colour | icon`. `status` is the text in the pill (Done, In progress...). `icon` is one of: `story`, `crew`, `locations`, `casting`, `gear`, `clock`.

### Timeline ("The road to the clock")
`date | date_label | milestone | who | style`. `date` (as `2026-11-28`) places the "WE'RE HERE" marker; `date_label` is what's displayed. `style`: `big` for the amber dot, `tbc` for a dashed dot, or empty. Keep rows in date order.

### Deadlines ("Due this week")
`type | day | when | task | who`.
- `type` = `deadline`: goes in a day card. Rows with the same `day` share a card. Put the card's date/time in `when` on the first row of that day. `who` can list several people separated by commas; each becomes a chip. A chip that says `Everyone` turns red, and its card gets the red header.
- `type` = `later`: goes in the "Before the next face-to-face" box. `who` is shown in amber on the left.

### Clock ("The 48 hours")
`kind | label | text | hours | lead | highlight`.
- `phase` rows: the coloured bar. `hours` sets both the number and the bar's width. `highlight` = `yes` gives it the amber border.
- `step` rows: the numbered "How the first stretch runs" list.
- `rule` rows: the "Rules of the clock" list.

### Crew
`name | initials | role | department | lead_card`.
- Fill `lead_card` (e.g. "Production") to give someone a big lead card; `role` becomes the card's description. Leave `department` empty for leads.
- Everyone else: fill `department`. Department boxes appear in the order departments first show up. `initials` is optional (worked out from the name if empty).
- Someone in two departments = two rows.

### Open roles
`role | note | department`. Shown as red dashed tiles at the bottom of that department's box. A department name that isn't in Crew gets its own box (like Food + transport). When a role is filled, delete it here and add the person in Crew.

### Cast
`role | status | colour | description | in_the_running | figure`. `figure` picks the drawing: `lead`, `friend`, `older-child`, `younger-child`, `unknown`, or `adult` for a plain figure.

### Locations
`label | name | description | sketch | map_link`. `sketch` is `flat`, `homebase`, `road`, or empty for a map-pin drawing. Paste a Google Maps link into `map_link` and an "Open the pin" link appears on the card.

### Departments (the accordion)
`department | summary | point`. One row per bullet point. The `summary` (the grey line under the title) only needs to be on the first row of each department.

### Questions ("Still to decide")
`question | detail`. `detail` is the optional smaller grey line.

### Rules ("Ground rules")
`rule | detail`.

---

## Changing the code later

Edit files right on GitHub (pencil icon → Commit changes); the site updates in about a minute. To regenerate the preview picture, open `setup/og-image-source.html` in Chrome, edit it, and take a 1200×630 screenshot.
