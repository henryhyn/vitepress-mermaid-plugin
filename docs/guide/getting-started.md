---
mermaidTheme: base
---

# Getting Started

This section will help you add mermaid support for VitePress.

## Install

```bash
npm i vitepress-mermaid-plugin mermaid -D
```

## Setup it up

Add wrapper

```js
// .vitepress/config.js
import { withMermaid } from "vitepress-mermaid-plugin";

export default withMermaid({
    // your existing vitepress config...
    // optionally, you can pass MermaidConfig
    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    // optionally set additional config for plugin itself with MermaidPluginConfig
    mermaidPlugin: {
      class: "mermaid my-class", // set additional css classes for parent container 
    },
});
```

Code with ```mmd

```mmd
flowchart LR
  Start --> Stop
```

Visualize with ```mermaid

```mermaid
flowchart LR
  Start --> Stop
```
