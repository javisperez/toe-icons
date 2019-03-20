import icons from "../../dist/icons.json";

const generateComponents = options => {
  const defaults = {
    size: 24,
    stroke: 0,
    color: "currentColor",
    strokeColor: "currentColor"
  };

  const localOptions = {
    ...defaults,
    ...options
  };

  // The base component
  const ti = {
    name: "ti",

    props: {
      icon: { type: String, required: true },
      size: { default: localOptions.size },
      spin: { type: Boolean, default: false },
      color: { default: localOptions.color },
      stroke: { default: localOptions.stroke },
      strokeColor: { default: localOptions.strokeColor }
    },

    template: `<svg :is="'ti-'+icon" :size="size" :stroke="stroke" :color="color" :stroke-color="strokeColor" :spin="spin"></svg>`
  };

  // All the rest of components
  const components = {
    ti
  };

  // Same props as the global `fi`
  const props = { ...ti.props };

  delete props.icon;

  // Definition of component per icon
  Object.keys(icons).forEach(icon => {
    const name = `ti-${icon}`;

    components[name] = {
      name,
      props,
      template: `
      <svg xmlns="http://www.w3.org/2000/svg" class="ti ti-${icon}"
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
    Vue.mixin({
      components: generateComponents(options)
    });
  }
};
