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
	iconName
}) => {
	return (
		<a
			{...(isFrontend ? { href: link } : {})}
			onClick={onClick}
			className={`sp-smart-button is-${variant} is-hover-${hoverEffect} ${
				isIconEnabled ? "sp-has-icon" : ""
			} ${className}`}
			data-text={children}
			{...(openNewTab ? { target: "_blank" } : {})}
		>
			<span className="sp-smart-button-inner">{children}</span>
			{isIconEnabled && <SelectedIcon name={iconName} />}
		</a>
	);
};

export default Button;
