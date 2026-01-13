import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		direction,
		align,
		alignItems,
		buttonGap,
		isFullWidthButtons,
		buttonGapUnit,
	} = attributes;

	const isFullWidthButton = isFullWidthButtons ? "has-full-width-buttons" : "";

	return (
		<div
			{...useBlockProps.save({
				className: `sp-smart-buttons is-${direction} align-${align} align-${alignItems} ${isFullWidthButton}`,
				style: {
					"--sp-button-gap": `${buttonGap}${buttonGapUnit}`,
				},
			})}
		>
			<InnerBlocks.Content />
		</div>
	);
}
