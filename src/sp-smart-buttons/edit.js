import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import DirectionToggle from "./components/DirectionToggle";
import HorizontalAlignmentControl from "./components/horizontalAlignment/HorizontalAlignmentControl";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { direction, align } = attributes;

	return (
		<div {...useBlockProps({ className: `sp-smart-buttons is-${direction} align-${align}` })}>
			<InspectorControls>
				<PanelBody title={__("General", "sp-smart-button")}>
					<h3>Button Alignment</h3>
					<DirectionToggle
						value={direction}
						onChange={(val) => setAttributes({ direction: val })}
					/>
					{direction === "horizontal" && (
						<div className="horizonta-alignment-wrapper">
							<h3 style={{ marginTop: "15px" }}>Horizontal Alignment</h3>
							<HorizontalAlignmentControl
								value={align}
								onChange={(val) => setAttributes({ align: val })}
							/>
						</div>
					)}
				</PanelBody>
			</InspectorControls>

			<InnerBlocks
				allowedBlocks={["sp/single-button"]}
				orientation={direction}
			/>
		</div>
	);
}
