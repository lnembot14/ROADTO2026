const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "WorldCup2026_Roadmap.pdf");

const sections = [
  {
    type: "title",
    text: "World Cup 2026 Project Roadmap",
  },
  {
    type: "body",
    text: "Recommended next feature: Player detail pages",
  },
  {
    type: "body",
    text:
      "Why this is the best next step: your app already links to player detail routes, but those routes do not exist yet. Building them closes a real product gap while teaching routing, reusable data structures, dynamic pages, and component composition.",
  },
  {
    type: "heading",
    text: "4-Week Roadmap",
  },
  {
    type: "subheading",
    text: "Week 1: Stabilize the app structure",
  },
  {
    type: "body",
    text:
      "Goal: make the project feel like one React app instead of part React and part static HTML.",
  },
  {
    type: "bullet",
    text: "Move Cities, Stadiums, and Timeline into React routes instead of separate HTML pages.",
  },
  {
    type: "bullet",
    text: "Replace plain anchor tags for internal navigation with Link or NavLink.",
  },
  {
    type: "bullet",
    text: "Fix the countdown interval cleanup.",
  },
  {
    type: "bullet",
    text: "Move hardcoded content into small data files where possible.",
  },
  {
    type: "bullet",
    text: "Put EmailJS keys into environment variables instead of keeping them inline in the component.",
  },
  {
    type: "body",
    text:
      "Learning focus: React Router basics, useEffect cleanup, component vs data separation, and environment variables.",
  },
  {
    type: "body",
    text: "Definition of done: all main navigation works inside React, there are no broken internal links, and lint is clean.",
  },
  {
    type: "subheading",
    text: "Week 2: Build the player detail system",
  },
  {
    type: "body",
    text:
      "Goal: turn Players to Watch into a complete feature, not just a gallery.",
  },
  {
    type: "bullet",
    text: "Create a players data file with each player's slug, image, country, club, position, and short profile.",
  },
  {
    type: "bullet",
    text: "Add a dynamic route like /players/:slug.",
  },
  {
    type: "bullet",
    text: "Build one reusable player detail page component.",
  },
  {
    type: "bullet",
    text: "Show a not-found state for invalid slugs.",
  },
  {
    type: "bullet",
    text: "Add a back link and optional next-player navigation.",
  },
  {
    type: "body",
    text:
      "Learning focus: route params, rendering from data, reusable page templates, and handling missing states.",
  },
  {
    type: "body",
    text: "Definition of done: every player card opens a working detail page, and adding a new player only requires updating the data file.",
  },
  {
    type: "subheading",
    text: "Week 3: Add one strong fan feature",
  },
  {
    type: "body",
    text:
      "Recommended pick: Favorites saved to localStorage.",
  },
  {
    type: "body",
    text:
      "Why: it is learnable, makes the app interactive, and teaches state, persistence, and user-centered product thinking.",
  },
  {
    type: "bullet",
    text: "Let users favorite players.",
  },
  {
    type: "bullet",
    text: "Persist favorites after refresh with localStorage.",
  },
  {
    type: "bullet",
    text: "Add a simple favorites section or page.",
  },
  {
    type: "body",
    text:
      "Learning focus: local state vs persisted state, localStorage, and deriving UI from saved data.",
  },
  {
    type: "body",
    text: "Definition of done: favorites persist after refresh and are visible in the UI.",
  },
  {
    type: "subheading",
    text: "Week 4: Polish and ship",
  },
  {
    type: "body",
    text:
      "Goal: make the product presentable and reliable.",
  },
  {
    type: "bullet",
    text: "Improve responsive layout, especially the slider and player cards.",
  },
  {
    type: "bullet",
    text: "Add loading, success, and error states to the email form.",
  },
  {
    type: "bullet",
    text: "Improve accessibility: button labels, alt text review, and keyboard navigation.",
  },
  {
    type: "bullet",
    text: "Clean up text typos and naming consistency.",
  },
  {
    type: "bullet",
    text: "Write a stronger README with features, stack, screenshots, and what you learned.",
  },
  {
    type: "bullet",
    text: "Deploy the app and treat the deployed version as the real milestone.",
  },
  {
    type: "body",
    text:
      "Learning focus: responsive CSS, accessibility fundamentals, product polish, and deployment workflow.",
  },
  {
    type: "body",
    text: "Definition of done: the mobile experience is solid, the main features feel intentional, and the project is deployed and shareable.",
  },
  {
    type: "heading",
    text: "How to use AI without letting it carry the project",
  },
  {
    type: "bullet",
    text: "Use AI for explanations, debugging help, code review, and tradeoff analysis.",
  },
  {
    type: "bullet",
    text: "Avoid asking AI to build whole features before you try.",
  },
  {
    type: "bullet",
    text: "Do not keep code you cannot explain line by line.",
  },
  {
    type: "bullet",
    text: "A good pattern: try first, get stuck, ask one narrow question, implement the fix yourself, then explain what changed.",
  },
  {
    type: "heading",
    text: "Best build habit",
  },
  {
    type: "body",
    text:
      "For each feature: define the user outcome in one sentence, sketch the components, routes, and data you need, build the smallest version that works, test it manually, then ask AI for review or explanation after you have code.",
  },
  {
    type: "heading",
    text: "Best next task",
  },
  {
    type: "bullet",
    text: "Create a playersData file.",
  },
  {
    type: "bullet",
    text: "Add a /players/:slug route.",
  },
  {
    type: "bullet",
    text: "Build one PlayerDetail component.",
  },
  {
    type: "bullet",
    text: "Make all player cards use that route.",
  },
  {
    type: "bullet",
    text: "Add a not-found state.",
  },
];

const page = {
  width: 612,
  height: 792,
  marginTop: 54,
  marginBottom: 54,
  marginLeft: 54,
  marginRight: 54,
};

const fonts = {
  title: { size: 22, leading: 28, font: "/F2" },
  heading: { size: 15, leading: 20, font: "/F2" },
  subheading: { size: 12, leading: 16, font: "/F2" },
  body: { size: 11, leading: 15, font: "/F1" },
  bullet: { size: 11, leading: 15, font: "/F1" },
};

function escapePdfText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapText(text, maxChars) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (test.length <= maxChars) {
      current = test;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function sectionToLines(section) {
  if (section.type === "title") {
    return [{ ...section, lines: wrapText(section.text, 36) }];
  }

  if (section.type === "heading") {
    return [{ ...section, lines: wrapText(section.text, 54) }];
  }

  if (section.type === "subheading") {
    return [{ ...section, lines: wrapText(section.text, 62) }];
  }

  if (section.type === "bullet") {
    const wrapped = wrapText(section.text, 74);
    return [{ ...section, lines: wrapped }];
  }

  return [{ ...section, lines: wrapText(section.text, 82) }];
}

function buildPages(items) {
  const pages = [];
  let currentPage = [];
  let y = page.height - page.marginTop;

  for (const item of items) {
    const style = fonts[item.type];
    const itemHeight = item.lines.length * style.leading + (item.type === "title" ? 10 : 6);

    if (y - itemHeight < page.marginBottom) {
      pages.push(currentPage);
      currentPage = [];
      y = page.height - page.marginTop;
    }

    currentPage.push(item);
    y -= itemHeight;
  }

  if (currentPage.length) {
    pages.push(currentPage);
  }

  return pages;
}

function renderPageContent(items) {
  const commands = ["BT"];
  let y = page.height - page.marginTop;

  for (const item of items) {
    const style = fonts[item.type];
    const x = item.type === "bullet" ? page.marginLeft + 14 : page.marginLeft;

    commands.push(`${style.font} ${style.size} Tf`);

    item.lines.forEach((line, index) => {
      if (item.type === "bullet" && index === 0) {
        commands.push(`1 0 0 1 ${page.marginLeft} ${y} Tm`);
        commands.push(`(\\267) Tj`);
        commands.push(`1 0 0 1 ${x} ${y} Tm`);
        commands.push(`(${escapePdfText(line)}) Tj`);
      } else {
        commands.push(`1 0 0 1 ${x} ${y} Tm`);
        commands.push(`(${escapePdfText(line)}) Tj`);
      }
      y -= style.leading;
    });

    y -= item.type === "title" ? 10 : 6;
  }

  commands.push("ET");
  return commands.join("\n");
}

const items = sections.flatMap(sectionToLines);
const pages = buildPages(items);

const objects = [];

function addObject(content) {
  objects.push(content);
  return objects.length;
}

const font1Id = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
const font2Id = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

const contentIds = [];
const pageIds = [];

for (const pageItems of pages) {
  const contentStream = renderPageContent(pageItems);
  const contentId = addObject(
    `<< /Length ${Buffer.byteLength(contentStream, "utf8")} >>\nstream\n${contentStream}\nendstream`
  );
  contentIds.push(contentId);
  pageIds.push(
    addObject(
      `<< /Type /Page /Parent PAGES_REF /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /Font << /F1 ${font1Id} 0 R /F2 ${font2Id} 0 R >> >> /Contents ${contentId} 0 R >>`
    )
  );
}

const kids = pageIds.map((id) => `${id} 0 R`).join(" ");
const pagesId = addObject(`<< /Type /Pages /Count ${pageIds.length} /Kids [${kids}] >>`);

for (const id of pageIds) {
  objects[id - 1] = objects[id - 1].replace("PAGES_REF", `${pagesId} 0 R`);
}

const catalogId = addObject(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);

let pdf = "%PDF-1.4\n";
const offsets = [0];

for (let i = 0; i < objects.length; i += 1) {
  offsets.push(Buffer.byteLength(pdf, "utf8"));
  pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
}

const xrefOffset = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";

for (let i = 1; i < offsets.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}

pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

fs.writeFileSync(outputPath, pdf, "binary");
console.log(`Created ${outputPath}`);
