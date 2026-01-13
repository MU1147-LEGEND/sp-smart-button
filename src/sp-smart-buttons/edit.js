import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import ButtonGap from "./components/buttonGap";
import DirectionToggle from "./components/DirectionToggle";
import HorizontalAlignmentControl from "./components/horizontalAlignment/HorizontalAlignmentControl";
import VerticalAlignmentControl from "./components/VerticalAlignment/VerticalAlignmentControl";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		direction,
		justify,
		alignItems,
		buttonGap,
		isFullWidthButtons,
		buttonGapUnit,
	} = attributes;

	// const calculateButtonGap =
	// 	buttonGapUnit === "em" ? buttonGap / 16 : buttonGap; // if I want to convert units.
	const isFullWidthButton = isFullWidthButtons ? "has-full-width-buttons" : "";

	return (
		<div
			{...useBlockProps({
				className: `sp-smart-buttons is-${direction} align-${justify} align-${alignItems} ${isFullWidthButton}`,
				style: {
					"--sp-button-gap": `${buttonGap}${buttonGapUnit}`,
				},
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
								value={justify}
								onChange={(val) => setAttributes({ justify: val })}
							/>
						</div>
					)}

					{direction === "vertical" && (
						<div className="vertical-alignment-wrapper">
							<h3 style={{ marginTop: "15px" }}>Vertical Alignment</h3>
							<VerticalAlignmentControl
								value={alignItems}
								onChange={(val) => setAttributes({ alignItems: val })}
							/>
						</div>
					)}

					{/* full width button */}
					<div className="full-width-button-wrapper">
						<span className="full-width-button-label">Full Width Buttons</span>
						<ToggleControl
							checked={isFullWidthButtons}
							onChange={(value) => {
								setAttributes({ isFullWidthButtons: value });
							}}
						/>
					</div>

					{/* Button Gap */}
					<ButtonGap
						defaultValue={buttonGap}
						onChange={(gap) => setAttributes({ buttonGap: gap })}
						buttonGapUnit={buttonGapUnit}
						handleUnitChange={(newUnit) =>
							setAttributes({ buttonGapUnit: newUnit })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<InnerBlocks
				allowedBlocks={["sp/single-button"]}
				orientation={direction}
			/>
		</div>
	);
}
