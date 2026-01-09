import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import DirectionToggle from "./components/DirectionToggle";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { direction } = attributes;
	console.log(direction);
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__("General", "sp-smart-button")}>
					<h3>Button Alignment</h3>
					<DirectionToggle
						value={direction}
						onChange={(val) => setAttributes({ direction: val })}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={["sp/single-button"]}
				template={[["sp/single-button"]]}
				orientation="horizontal"
			/>
		</div>
	);
}
