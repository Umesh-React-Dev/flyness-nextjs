/**
 * Converts refresh-icon.html → RefreshIconPage.tsx (real JSX + className)
 * and main CSS → SCSS. Does not wire into the live Next.js app.
 */
import fs from "fs";
import path from "path";

const root = path.resolve("src/assets/images");
const htmlPath = path.join(root, "refresh-icon.html");
const outDir = path.join(root, "refresh-icon");
const cssOutDir = path.join(outDir, "styles");

const cssSources = [
  "site-css.css.v63e4e9dd22a0de3f695617ba303fd5505b54f087",
  "home-css.css.v63e4e9dd22a0de3f695617ba303fd5505b54f087",
  "site-mobile-css.css.v63e4e9dd22a0de3f695617ba303fd5505b54f087",
  "bootstrap-css.css.v63e4e9dd22a0de3f695617ba303fd5505b54f087",
  "swiper-css.css.v63e4e9dd22a0de3f695617ba303fd5505b54f087",
  "fontawesome-css.css.v63e4e9dd22a0de3f695617ba303fd5505b54f087",
  "date-range-picker-css.css.v63e4e9dd22a0de3f695617ba303fd5505b54f087",
  "plugins-select2-css.css.v63e4e9dd22a0de3f695617ba303fd5505b54f087",
  "abtest-sticky-css.css.v63e4e9dd22a0de3f695617ba303fd5505b54f087",
  "styles__ltr.css",
  "flynas.cms.auth.css",
];

fs.mkdirSync(cssOutDir, { recursive: true });

function cssFileToScssName(name) {
  return name
    .replace(/\.css\.v[0-9a-f]+$/i, "")
    .replace(/\.css$/i, "")
    .replace(/-css$/i, "")
    .replace(/__ltr$/i, "-ltr")
    .replace(/\./g, "-")
    .toLowerCase();
}

const importedScss = [];
for (const file of cssSources) {
  const src = path.join(root, "refresh-icon_files", file);
  if (!fs.existsSync(src)) {
    console.warn("skip missing css:", file);
    continue;
  }
  const base = cssFileToScssName(file);
  const dest = path.join(cssOutDir, `_${base}.scss`);
  const css = fs.readFileSync(src, "utf8");
  const scss = `// Converted from refresh-icon_files/${file}\n// Selectors/structure kept identical to the source CSS.\n\n${css}\n`;
  fs.writeFileSync(dest, scss, "utf8");
  importedScss.push(base);
  console.log("scss:", path.relative(process.cwd(), dest));
}

fs.writeFileSync(
  path.join(cssOutDir, "index.scss"),
  `// Aggregated converted flynas reference styles (not imported by the live app).\n${importedScss
    .map((b) => `@use "./${b}";`)
    .join("\n")}\n`,
  "utf8",
);

const VOID = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

function escapeJsxText(text) {
  return text
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;");
}

function convertAttrs(attrString) {
  if (!attrString) return "";

  let s = attrString;

  // Normalize boolean / empty attrs later via regex on tokens
  s = s.replace(/(^|\s)class=/gi, "$1className=");
  s = s.replace(/(^|\s)for=/gi, "$1htmlFor=");
  s = s.replace(/(^|\s)autocomplete=/gi, "$1autoComplete=");
  s = s.replace(/(^|\s)charset=/gi, "$1charSet=");
  s = s.replace(/(^|\s)crossorigin=/gi, "$1crossOrigin=");
  s = s.replace(/(^|\s)tabindex=/gi, "$1tabIndex=");
  s = s.replace(/(^|\s)readonly(\s|=|$)/gi, "$1readOnly$2");
  s = s.replace(/(^|\s)maxlength=/gi, "$1maxLength=");
  s = s.replace(/(^|\s)minlength=/gi, "$1minLength=");
  s = s.replace(/(^|\s)colspan=/gi, "$1colSpan=");
  s = s.replace(/(^|\s)rowspan=/gi, "$1rowSpan=");
  s = s.replace(/(^|\s)cellpadding=/gi, "$1cellPadding=");
  s = s.replace(/(^|\s)cellspacing=/gi, "$1cellSpacing=");
  s = s.replace(/(^|\s)frameborder=/gi, "$1frameBorder=");
  s = s.replace(/(^|\s)allowfullscreen(\s|=|$)/gi, "$1allowFullScreen$2");
  s = s.replace(/(^|\s)nomodule(\s|=|$)/gi, "$1noModule$2");
  s = s.replace(/(^|\s)srcset=/gi, "$1srcSet=");
  s = s.replace(/(^|\s)usemap=/gi, "$1useMap=");
  s = s.replace(/(^|\s)enctype=/gi, "$1encType=");
  s = s.replace(/(^|\s)datetime=/gi, "$1dateTime=");
  s = s.replace(/(^|\s)contenteditable=/gi, "$1contentEditable=");
  s = s.replace(/(^|\s)spellcheck=/gi, "$1spellCheck=");
  s = s.replace(/(^|\s)autoplay(\s|=|$)/gi, "$1autoPlay$2");
  s = s.replace(/(^|\s)playsinline(\s|=|$)/gi, "$1playsInline$2");
  s = s.replace(/(^|\s)checked(\s|=|$)/gi, "$1defaultChecked$2");
  s = s.replace(/(^|\s)selected(\s|=|$)/gi, "$1defaultSelected$2");
  s = s.replace(/(^|\s)value=/gi, "$1defaultValue=");

  // style="a:b" → style={{ a: "b" }} (best-effort; keep string if complex)
  s = s.replace(/\sstyle="([^"]*)"/gi, (_, css) => {
    const decls = css
      .split(";")
      .map((d) => d.trim())
      .filter(Boolean)
      .map((d) => {
        const i = d.indexOf(":");
        if (i < 0) return null;
        let prop = d.slice(0, i).trim();
        let val = d.slice(i + 1).trim();
        prop = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        if (prop === "float") prop = "cssFloat";
        // Keep URL/string values quoted
        const num = /^-?\d+(\.\d+)?(px|em|rem|%|vh|vw|s|ms)?$/.test(val);
        if (num && !/[a-z%]/i.test(val.replace(/^-?\d+(\.\d+)?/, ""))) {
          // unitless number
          const n = parseFloat(val);
          return `${prop}: ${Number.isFinite(n) ? n : JSON.stringify(val)}`;
        }
        return `${prop}: ${JSON.stringify(val)}`;
      })
      .filter(Boolean);
    if (!decls.length) return "";
    return ` style={{ ${decls.join(", ")} }}`;
  });

  // Drop event handler attrs / invalid names that break JSX
  s = s.replace(/\son[a-z]+="[^"]*"/gi, "");
  s = s.replace(/\sxmlns(:[a-z0-9]+)?="[^"]*"/gi, "");

  // aria / data attrs are fine as-is

  // Convert bare boolean attributes: disabled → disabled={true}
  s = s.replace(
    /(^|\s)(disabled|required|checked|selected|readOnly|allowFullScreen|autoPlay|playsInline|defaultChecked|defaultSelected|multiple|muted|loop|controls|defer|async|hidden|open|reversed|default|noValidate|formNoValidate|autoFocus)(\s|>|$)/g,
    "$1$2={true}$3",
  );

  return s;
}

function htmlToJsx(html) {
  let out = "";
  let i = 0;
  while (i < html.length) {
    if (html[i] === "<") {
      // comment
      if (html.startsWith("<!--", i)) {
        const end = html.indexOf("-->", i + 4);
        i = end < 0 ? html.length : end + 3;
        continue;
      }
      // doctype / processing
      if (html.startsWith("<!", i) || html.startsWith("<?", i)) {
        const end = html.indexOf(">", i);
        i = end < 0 ? html.length : end + 1;
        continue;
      }

      const close = html.indexOf(">", i);
      if (close < 0) {
        out += escapeJsxText(html.slice(i));
        break;
      }

      const raw = html.slice(i + 1, close);
      const selfClosing = raw.endsWith("/");
      const inner = selfClosing ? raw.slice(0, -1).trim() : raw.trim();

      if (inner.startsWith("/")) {
        const tag = inner.slice(1).trim().split(/\s+/)[0].toLowerCase();
        if (!["script", "style", "noscript", "iframe", "svg", "path", "use"].includes(tag)) {
          // keep closing for non-skipped; svg handled separately below
        }
        // Always emit closing for normal flow; skipped open tags won't exist
        const name = inner.slice(1).trim().split(/\s+/)[0];
        out += `</${name}>`;
        i = close + 1;
        continue;
      }

      const space = inner.search(/\s/);
      const tagName = (space < 0 ? inner : inner.slice(0, space)).toLowerCase();
      const attrsRaw = space < 0 ? "" : inner.slice(space);

      // Skip heavy/non-UI tags from the dump
      if (["script", "noscript", "style", "iframe", "link", "meta"].includes(tagName)) {
        if (VOID.has(tagName) || selfClosing) {
          i = close + 1;
          continue;
        }
        // find matching close
        const re = new RegExp(`</${tagName}\\s*>`, "i");
        const rest = html.slice(close + 1);
        const m = rest.match(re);
        i = m ? close + 1 + m.index + m[0].length : close + 1;
        continue;
      }

      // Skip SVG trees (often malformed in saves) — keep a placeholder comment
      if (tagName === "svg") {
        const endSvg = html.toLowerCase().indexOf("</svg>", close);
        i = endSvg < 0 ? close + 1 : endSvg + 6;
        out += "{/* svg omitted */}";
        continue;
      }

      const attrs = convertAttrs(attrsRaw);
      if (VOID.has(tagName) || selfClosing) {
        out += `<${tagName}${attrs} />`;
      } else {
        out += `<${tagName}${attrs}>`;
      }
      i = close + 1;
      continue;
    }

    // text node
    let j = html.indexOf("<", i);
    if (j < 0) j = html.length;
    const text = html.slice(i, j);
    if (text.trim()) {
      out += escapeJsxText(text);
    } else {
      out += text.replace(/[^\n]/g, ""); // keep newlines only for whitespace-only
    }
    i = j;
  }
  return out;
}

let html = fs.readFileSync(htmlPath, "utf8");
const bodyMatch = html.match(/<body\b([^>]*)>([\s\S]*)<\/body>/i);
if (!bodyMatch) throw new Error("Could not find <body>");

const bodyAttrs = convertAttrs(bodyMatch[1]);
let bodyInner = bodyMatch[2];

// Drop Grammarly / tracker noise attributes later via convert
const jsxBody = htmlToJsx(bodyInner);

const tsx = `"use client";

/**
 * Reference conversion of refresh-icon.html → TSX.
 * Same markup structure; HTML class → className.
 * Not imported by the live app — existing Header/page structure is unchanged.
 */
import "./styles/index.scss";

export default function RefreshIconPage() {
  return (
    <div${bodyAttrs.replace(/className=/i, " className=").replace(/^/, "").trim() ? bodyAttrs : ""}>
${jsxBody}
    </div>
  );
}
`;

// Fix body attrs formatting
const bodyClass = (bodyMatch[1].match(/class(?:Name)?="([^"]*)"/i) || [])[1] || "";
const tsxFixed = `"use client";

/**
 * Reference conversion of refresh-icon.html → TSX.
 * Same markup structure; HTML class → className.
 * Not imported by the live app — existing Header/page structure is unchanged.
 */
import "./styles/index.scss";

export default function RefreshIconPage() {
  return (
    <div className=${JSON.stringify(bodyClass)}>
${jsxBody}
    </div>
  );
}
`;

const tsxPath = path.join(outDir, "RefreshIconPage.tsx");
fs.writeFileSync(tsxPath, tsxFixed, "utf8");
console.log("tsx:", path.relative(process.cwd(), tsxPath), `(${tsxFixed.length} chars)`);
console.log("scss files:", importedScss.length);
console.log("Live app not modified.");
