const Button = ({
	children = "Button",
	className = "",
	link = "#",
	onClick,
	variant,
	hoverEffect = "default",
	openNewTab = true,
	isFrontend = false,
}) => {
	return (
		<a
			{...(isFrontend ? { href: link } : {})}
			onClick={onClick}
			className={`sp-smart-button is-${variant} is-hover-${hoverEffect} ${className}`}
			data-text={children}
			{...(openNewTab ? { target: "_blank" } : {})}
		>
			<span className="sp-smart-button-inner">{children}</span>
		</a>
	);
};

export default Button;
