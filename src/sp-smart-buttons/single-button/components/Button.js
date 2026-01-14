const Button = ({
	children = "Button",
	className="",
	link = "#",
	onClick,
	variant,
	hoverEffect = "default"
}) => {
	return (
		<a
			href={link}
			onClick={onClick}
			className={`sp-smart-button is-${variant} is-hover-${hoverEffect} ${className}`}
		>
			<span className="sp-smart-button-inner">{children}</span>
		</a>
	);
};

export default Button;
