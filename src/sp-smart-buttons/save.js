import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";

export default function save({ attributes, clientId }) {
	const {
		direction,
		justify,
		alignItems,
		buttonGap,
		isFullWidthButtons,
		buttonGapUnit,
		marginUnit,
		magringControl,
		buttonCount,
	} = attributes;

	// const calculateButtonGap =
	// 	buttonGapUnit === "em" ? buttonGap / 16 : buttonGap; // if I want to convert units.
	const isFullWidthButton = isFullWidthButtons ? "has-full-width-buttons" : "";

	// tab options
	const options = ["horizontal", "vertical"];

	return (
		<div
			{...useBlockProps.save({
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
			<InnerBlocks.Content />
		</div>
	);
}
