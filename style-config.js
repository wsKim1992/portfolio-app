import { formats, transformGroups } from "style-dictionary/enums";
import yaml from "yaml";

export default {
	hooks: {
		parsers: {
			"yaml-parser": {
				pattern: /\.yaml$/,
				parser: ({ contents }) => yaml.parse(contents),
			},
		},
	},
	parsers: ["yaml-parser"],
	source: [`src/assets/design/**/*.yaml`],
	platforms: {
		css: {
			transformGroup: transformGroups.css,
			transforms: ["attribute/cti", "color/hex", "size/rem"],
			buildPath: "src/assets/css/",
			files: [
				{
					destination: "variables.css",
					format: formats.cssVariables,
				},
			],
		},
	},
};
