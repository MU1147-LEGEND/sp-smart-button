const Button = ({
	children = "Button",
	className="",
	link = "#",
	onClick,
	variant,
}) => {
	return (
		<a
			href={link}
			onClick={onClick}
			className={`wp-block-smart-button is-${variant} ${className}`}
		>
			{children}
		</a>
	);
};

export default Button;
