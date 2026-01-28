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
		isBoxShadowEnabled,
		boxShadow,
		isIconEnabled,
		iconSrcTab,
		iconName,
		iconSize,
		iconStyleTabs,
		iconColor,
		iconGap,
		iconPosition,
		customIcon,
	} = attributes;

	// calculate border width and give width if w is zero when selecting ghost variant
	const effectiveBorderWidth =
		variant === "ghost" && borderWidth === 0 ? 1 : borderWidth;

	const effectiveBorderWidthHover =
		variant === "ghost" && hoverStyles.borderWidth === 0
			? 1
			: hoverStyles.borderWidth;

	// generate shadow css value
	const shadowString = isBoxShadowEnabled
		? `${boxShadow.x}px ${boxShadow.y}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`
		: "";
	const shadowStringHover = hoverStyles.isBoxShadowEnabled
		? `${hoverStyles?.boxShadow?.x}px ${hoverStyles?.boxShadow?.y}px ${hoverStyles?.boxShadow?.blur}px ${hoverStyles?.boxShadow?.spread}px ${hoverStyles?.boxShadow?.color}`
		: "";
	return (
		<div
			{...useBlockProps.save({
				className: `sp-parent has-hover-${hoverEffect}`,
				style: {
					"--primary-background": `${bgColor}`,
					"--primary-text-color": `${textColor}`,
					"--primary-font-size": `${typography.fontSize}px`,
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
					// box shadow style
					"--sp-box-shadow": `${shadowString}`,
					"--sp-box-shadow-hover": `${shadowStringHover}`,
					// icon gap style
					"--sp-icon-gap": `${iconGap}px`,

					// hover styles
					// button hover background color
					"--sp-hover-bg-color": `${hoverStyles.bgColor}`,
					"--sp-hover-ghost-bg-color": `${hoverStyles.ghostBgColor}`,
					"--sp-hover-ghost-text-color": `${hoverStyles.ghostTextColor}`,
					"--sp-hover-gradient": hoverStyles.gradColor,
					"--sp-hover-gradient-text-color": hoverStyles.gradTextColor,
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
				isFrontend={true}
				variant={variant}
				hoverEffect={hoverEffect}
				link={btnUrl}
				openNewTab={openNewTab}
				isIconEnabled={isIconEnabled}
				iconName={iconName}
				customIcon={customIcon}
				iconSize={iconSize}
				iconColor={iconColor}
				iconColorHover={hoverStyles.iconColor}
				iconPosition={iconPosition}
				iconSrcTab={iconSrcTab}
			>
				{text}
			</Button>
		</div>
	);
}
