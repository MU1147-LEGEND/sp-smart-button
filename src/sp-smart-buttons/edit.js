import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import ButtonGap from "./components/buttonGap";
import HorizontalAlignmentControl from "./components/horizontalAlignment/HorizontalAlignmentControl";
import MarginControl from "./components/marginControl";
import TabToggle from "./components/tabToggle";
import VerticalAlignmentControl from "./components/VerticalAlignment/VerticalAlignmentControl";
import "./editor.scss";
import { useSelect } from "@wordpress/data";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		direction,
		justify,
		alignItems,
		buttonGap,
		isFullWidthButtons,
		buttonGapUnit,
		marginUnit,
		magringControl,
	} = attributes;

	const buttonCount = useSelect(
		(select) => {
			const block = select("core/block-editor").getBlock(clientId);
			return block?.innerBlocks?.length;
		},
		[clientId],
	);

	// const calculateButtonGap =
	// 	buttonGapUnit === "em" ? buttonGap / 16 : buttonGap; // if I want to convert units.
	const isFullWidthButton = isFullWidthButtons ? "has-full-width-buttons" : "";

	// tab options
	const options = ["horizontal", "vertical"];

	return (
		<div
			{...useBlockProps({
				className: `sp-smart-buttons is-${direction} align-${justify} align-${alignItems} ${isFullWidthButton}`,
				style: {
					// injecting button gap value
					"--sp-button-gap": `${buttonGap}${buttonGapUnit}`,
					// injecting margins value css var
					"--sp-margin-top": `${magringControl.top}${marginUnit}`,
					"--sp-margin-right": `${magringControl.right}${marginUnit}`,
					"--sp-margin-bottom": `${magringControl.bottom}${marginUnit}`,
					"--sp-margin-left": `${magringControl.left}${marginUnit}`,
					// button count
					"--sp-btn-count": buttonCount,
				},
			})}
		>
			<InspectorControls>
				<PanelBody title={__("General", "sp-smart-button")}>
					<h3>Button Alignment</h3>
					<TabToggle
						value={direction}
						onChange={(val) => setAttributes({ direction: val })}
						tabOptions={options}
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
					{/* margin control */}
					<MarginControl
						unit={marginUnit}
						onChange={(val) => {
							setAttributes({ magringControl: val });
						}}
						value={magringControl}
						handleUnitChange={(newUnit) =>
							setAttributes({ marginUnit: newUnit })
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
