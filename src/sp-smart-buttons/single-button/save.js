import { useBlockProps } from "@wordpress/block-editor";
import Button from "./components/Button";

export default function save({ attributes }) {
	const {
		text,
		btnUrl,
		variant,
		hoverEffect,
		generalStyleTab,
		textColor,
		bgColor,
		hoverStyles,
		borderWidth,
		borderWidthUnit,
		borderRadiusControl,
		paddingControl,
		paddingUnit,
		buttonLabelTabs,
		typography,
		ghostBgColor,
		ghostTextColor,
		borderColor,
		openNewTab,
		gradColor,
		gradTextColor,
	} = attributes;

	// calculate border width and give width if w is zero when selecting ghost variant
	const effectiveBorderWidth =
		variant === "ghost" && borderWidth === 0 ? 1 : borderWidth;

	const effectiveBorderWidthHover =
		variant === "ghost" && hoverStyles.borderWidth === 0
			? 1
			: hoverStyles.borderWidth;

	return (
		<div
			{...useBlockProps.save({
				className: `sp-parent has-hover-${hoverEffect}`,
				style: {
					"--primary-background": `${bgColor}`,
					"--primary-text-color": `${textColor}`,
					"--ghost-text-color": `${ghostTextColor}`,
					"--ghost-background": `${ghostBgColor}`,
					"--sp-gradient-bg": gradColor,
					"--sp-gradient-text-color": gradTextColor,
					"--sp-border-w": `${effectiveBorderWidth}${borderWidthUnit}`,
					"--sp-border-color": `${borderColor}`,
					// border radius inject dynamically
					"--sp-radius-top_left": `${borderRadiusControl.top_left}px`,
					"--sp-radius-top_right": `${borderRadiusControl.top_right}px`,
					"--sp-radius-bottom_right": `${borderRadiusControl.bottom_right}px`,
					"--sp-radius-bottom_left": `${borderRadiusControl.bottom_left}px`,
					// button padding inject
					"--sp-padding-top": `${paddingControl.top}${paddingUnit}`,
					"--sp-padding-right": `${paddingControl.right}${paddingUnit}`,
					"--sp-padding-bottom": `${paddingControl.bottom}${paddingUnit}`,
					"--sp-padding-left": `${paddingControl.left}${paddingUnit}`,

					// hover styles
					// button hover background color
					"--sp-hover-bg-color": `${hoverStyles.bgColor}`,
					"--sp-hover-ghost-bg-color": `${hoverStyles.ghostBgColor}`,
					"--sp-hover-ghost-text-color": `${hoverStyles.ghostTextColor}`,
					"--sp-hover-gradient": hoverStyles.gradColor,
					"--sp-hover-text-color": `${hoverStyles.txtColor}`,
					"--sp-border-w-hover": `${effectiveBorderWidthHover}${hoverStyles.borderWidthUnit}`,
					"--sp-border-color-hover": `${hoverStyles.borderColor}`,
					// border radius
					"--sp-radius-top_left-hover": `${hoverStyles.borderRadiusControl.top_left}${hoverStyles.borderRadiusUnit}`,
					"--sp-radius-top_right-hover": `${hoverStyles.borderRadiusControl.top_right}${hoverStyles.borderRadiusUnit}`,
					"--sp-radius-bottom_right-hover": `${hoverStyles.borderRadiusControl.bottom_right}${hoverStyles.borderRadiusUnit}`,
					"--sp-radius-bottom_left-hover": `${hoverStyles.borderRadiusControl.bottom_left}${hoverStyles.borderRadiusUnit}`,
				},
			})}
		>
			<Button
				variant={variant}
				hoverEffect={hoverEffect}
				link={btnUrl}
				openNewTab={openNewTab}
				isFrontend={true}
			>
				{text}
			</Button>
		</div>
	);
}
