# diff-plugin

Git diff viewer plugin for [Quipu](https://quipu.cc). Renders unified diffs with line-level syntax highlighting for staged and working tree changes.

## Install

Open the Plugin Manager panel in Quipu (puzzle piece icon) → Available → Install.

## Build from source

```bash
npm install
npm run build
```

The build outputs `dist/index.js`. Copy `dist/index.js` and `manifest.json` to `~/.quipu/plugins/diff-plugin/`.
