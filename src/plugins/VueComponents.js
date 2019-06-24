import _Vue from "vue";
import icons from "../../dist/icons.json";
const generateComponents = args => {
  const options = {
    size: 24,
    stroke: 0,
    color: "currentColor",
    strokeColor: "currentColor",
    ...args
  };
  // The base component
  const ti = {
    name: "ti",
    props: {
      icon: {
        type: String,
        required: true
      },
      size: {
        type: [String, Number],
        default: options.size
      },
      spin: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: options.color
      },
      stroke: {
        type: [String, Number],
        default: options.stroke
      },
      strokeColor: {
        type: String,
        default: options.strokeColor
      }
    },
    template: `<svg :is="'ti-'+icon" :size="size" :stroke="stroke" :color="color" :stroke-color="strokeColor" :spin="spin"></svg>`
  };
  // All the rest of components
  const components = { ti };
  // Same props as the global `fi`
  const props = { ...ti.props };
  delete props.icon;
  // Definition of component per icon
  Object.keys(icons).forEach(icon => {
    const titleCaseName = `Ti-${icon}`.replace(/(-\w)/g, m =>
      m[1].toUpperCase()
    );
    components[titleCaseName] = {
      name: titleCaseName,
      props,
      template: `
      <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-${icon}"
        :class="{'spin': spin}" :width="size" :height="size"
        viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
        :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
        ${icons[icon]}
      </svg>
      `
    };
  });
  return components;
};
export default {
  install(Vue, options = {}) {
    Vue.mixin(
      _Vue.extend({
        components: generateComponents(options)
      })
    );
  }
};
//# sourceMappingURL=VueComponents.js.map
