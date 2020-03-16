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

  const componentContent = `<script>
    export let size = ${defaultPropsValues.size};
    export let spin = false;
    export let color = "${defaultPropsValues.color}";
    export let stroke = "${defaultPropsValues.stroke}";
    export let strokeColor = "${defaultPropsValues.strokeColor}";
  </script>

  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-${icon}"
    class:spin={spin} width={size} height={size}
    viewBox="0 0 64 64" fill={color} stroke={strokeColor}
    stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round">
    ${content}
  </svg>`.replace(/\n  /g, '\n')

  components.push(icon)

  fs.writeFileSync(
    path.resolve(__dirname, path.join(DIST_DIR, `${icon}.svelte`)), componentContent
  )
}

// The default base components
const Ti = `<script>
  ${components.map(component => {
    const componentName = `Ti${pascalCase(component)}`
    return `import ${componentName} from "./${component}.svelte";`
  }).join("\n")}

  export let icon;
  export let size = ${defaultPropsValues.size};
  export let spin = false;
  export let color = "${defaultPropsValues.color}";
  export let stroke = "${defaultPropsValues.stroke}";
  export let strokeColor = "${defaultPropsValues.strokeColor}";

  const iconComponentMap = {
    ${components.map(icon => {
      const componentName = `Ti${pascalCase(icon)}`
      return `"${icon}": ${componentName},`
    }).join("\n")}
  };
</script>

  <svelte:component this={iconComponentMap[icon]}
    size={size}
    stroke={stroke}
    color={color}
    stroke-color={strokeColor}
    spin={spin}/>
`

fs.writeFileSync(
  path.resolve(__dirname, path.join(DIST_DIR, 'ti.svelte')), Ti
)

// And the main index.js file
fs.writeFileSync(
  path.resolve(__dirname, path.join(DIST_DIR, 'index.js')),
  `import Ti from "./ti.svelte"
  export default Ti

  ${components.map(component => {
    const componentName = `Ti${pascalCase(component)}`
    return `
    import ${componentName} from "./${component}.svelte"
    export { ${componentName} }`
  }).join("\n")}
`)
