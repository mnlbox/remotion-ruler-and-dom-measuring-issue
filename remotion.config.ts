// All configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli
// ! The configuration file does only apply if you render via the CLI !

import {Config} from "@remotion/cli/config";

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig((currentConfiguration) => {
	return {
		...currentConfiguration,
		module: {
			...currentConfiguration.module,
			rules: [
				...(currentConfiguration.module?.rules
					? currentConfiguration.module.rules
					: []),
				{
					test: /\.s[ac]ss$/i,
					use: [
						{loader: 'style-loader'},
						{loader: 'css-loader'},
						{loader: 'sass-loader', options: {sourceMap: true}},
					],
				},
			],
		},
	};
});
