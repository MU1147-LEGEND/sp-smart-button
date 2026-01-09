import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import { ReactComponent as Icon } from "./assets/icon.svg";
import metadata from "./block.json";
import Edit from "./edit";
import save from "./save";
import "./single-button";

registerBlockType(metadata.name, {
	edit: Edit,
	icon: <Icon />,
	save,
});
