import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import metadata from "./block.json";
import Edit from "./edit";
import save from "./save";
import { ReactComponent as Icon } from "./assets/icon.svg";

registerBlockType(metadata.name, {
	edit: Edit,
	icon: <Icon />,
	save,
});
