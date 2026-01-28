import SelectedIcon from "./renderSelectedIcon";

const Button = ({
	children = "Button",
	className = "",
	link = "#",
	onClick,
	variant,
	hoverEffect = "default",
	openNewTab = true,
	isFrontend = false,
	isIconEnabled = false,
	iconName,
	customIcon,
	iconSize,
	iconColor,
	iconColorHover,
	iconPosition,
	iconSrcTab,
}) => {
	return (
		<a
			{...(isFrontend ? { href: link } : {})}
			onClick={onClick}
			className={`sp-smart-button is-${variant} is-hover-${hoverEffect} ${
				isIconEnabled ? `sp-has-icon icon-${iconPosition}` : ""
			} ${className}`}
			data-text={children}
			{...(openNewTab ? { target: "_blank" } : {})}
			style={{
				"--sp-icon-color": iconColor,
				"--sp-icon-color-hover": iconColorHover,
			}}
		>
			<span className="sp-smart-button-inner">{children}</span>
			{isIconEnabled && (
				<>
					{iconSrcTab === "library" && (
						<SelectedIcon name={iconName} size={iconSize} />
					)}
					{iconSrcTab === "custom" && (
						<span className="sp-smart-button-icon">
							<img
								src={customIcon.url}
								alt={customIcon.alt}
								width={`${iconSize}px`}
								height={`${iconSize}px`}
							/>
						</span>
					)}
				</>
			)}
		</a>
	);
};

export default Button;
