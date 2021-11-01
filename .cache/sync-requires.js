
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jackson/Workspaces/JS/yandhi.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/jackson/Workspaces/JS/yandhi.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jackson/Workspaces/JS/yandhi.github.io/src/pages/index.js"))
}

