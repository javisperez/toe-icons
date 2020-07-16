const fs = require('fs');
const path = require('path');

const { DIST_DIR } = require('./constants')
const icons = require('@toe-icons/icons/dist/icons-content.json')

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR);
}

const components = []

// Helper function
function pascalCase(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).replace(/-(.?)/ig, (x) => x.slice(1, 2).toUpperCase())
}

const defaultPropsValues = {
  size: 24,
  stroke: 0,
  color: "currentColor",
  strokeColor: "currentColor",
}

// One file per component
for(const icon in icons) {
  const content = icons[icon]

  const name = `Ti${pascalCase(icon)}`

  const componentContent = `<script>
  export default {
    name: "${name}",

    props: {
      size: { type: [String, Number], default: ${defaultPropsValues.size} },
      spin: { type: Boolean, default: false },
      color: { type: String, default: "${defaultPropsValues.color}" },
      stroke: { type: [String, Number], default: "${defaultPropsValues.stroke}" },
      strokeColor: { type: String, default: "${defaultPropsValues.strokeColor}" }
    },
  }
  </script>

  <template>
    <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-${icon}"
      :width="size" :height="size"
      viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
      :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
      ${content}
    </svg>
  </template>`.replace(/\n  /g, '\n')

  components.push(icon)

  fs.writeFileSync(
    path.resolve(__dirname, path.join(DIST_DIR, `${icon}.vue`)), componentContent
  )
}

// And the main index.js file
fs.writeFileSync(
  path.resolve(__dirname, path.join(DIST_DIR, 'index.js')),
  `${components.map(component => {
    const componentName = `Ti${pascalCase(component)}`
    return `
    import ${componentName} from "./${component}.vue"
    export { ${componentName} }`
  }).join("\n")}

    // Helper to pass the default values to components
    function applyDefaultsToComponentProps(component, defaults) {
      return {
        ...component,

        props: {
          ...component.props,
          size: { type: [String, Number], default: defaults.size },
          color: { type: String, default: defaults.color },
          stroke: { type: [String, Number], default: defaults.stroke },
          strokeColor: { type: String, default: defaults.strokeColor }
        },
      }
    }

    // Vue Plugin
    export default {
      install(app, overrides = {}) {
        const options = {
          size: ${defaultPropsValues.size},
          stroke: ${defaultPropsValues.stroke},
          color: "${defaultPropsValues.color}",
          strokeColor: "${defaultPropsValues.strokeColor}",
          ...overrides
        }

        app.mixin({
          components: {
            ${components.map(component => {
              const componentName = `Ti${pascalCase(component)}`
              return `${componentName}: applyDefaultsToComponentProps(${componentName}, options)`
            }).join(",\n            ")}
          }
        });
      }
    };
`)
