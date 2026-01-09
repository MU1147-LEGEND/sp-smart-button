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
import VerticalAlignmentControl from "./components/VerticalAlignment/VerticalAlignmentControl";
import { ToggleControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { direction, align, alignItems } = attributes;

	return (
		<div
			{...useBlockProps({
				className: `sp-smart-buttons is-${direction} align-${align} align-${alignItems}`,
			})}
		>
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

					{direction === "vertical" && (
						<div className="vertical-alignment-wrapper">
							<h3 style={{ marginTop: "15px" }}>Horizontal Alignment</h3>
							<VerticalAlignmentControl
								value={alignItems}
								onChange={(val) => setAttributes({ alignItems: val })}
							/>
						</div>
					)}

					{/* full width button */}
					<div className="full-width-button-wrapper">
						<span className="full-width-button-label">Full Width Buttons</span>
						<ToggleControl />
					</div>
				</PanelBody>
			</InspectorControls>

			<InnerBlocks
				allowedBlocks={["sp/single-button"]}
				orientation={direction}
			/>
		</div>
	);
}
