import _Vue from "vue";
import icons from "../../dist/icons.json";

import {
  IconData,
  IconsList,
  BasicComponent,
  EmptyObject,
  MultiLevelObject
} from "../types";

type TiComponentOptions =
  | {
      size: number;
      stroke: number;
      color: string;
      strokeColor: string;
    }
  | EmptyObject;

type Props = {
  icon: {};
  size: {};
  spin: {};
  stroke: {};
  color: {};
  strokeColor: {};
};

const generateComponents = (args: TiComponentOptions) => {
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
  const components: MultiLevelObject = { ti };

  // Same props as the global `fi`
  const props: Props = { ...ti.props };

  delete props.icon;

  // Definition of component per icon
  Object.keys(icons as IconData).forEach((icon: string) => {
    const titleCaseName: string = `Ti-${icon}`.replace(/(-\w)/g, m =>
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
        ${(icons as IconData)[icon]}
      </svg>
      `
    };
  });

  return components;
};

export default {
  install(Vue: typeof _Vue, options: TiComponentOptions = {}): void {
    Vue.mixin(
      _Vue.extend({
        components: generateComponents(options)
      })
    );
  }
};
