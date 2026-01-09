import Button from "./Button";

const ButtonContainer = ({
	variant,
	currentVariant,
	handleButtonClick,
	selectedIcon,
}) => {
	const variantLabel =
		currentVariant.charAt(0).toUpperCase() + currentVariant.slice(1);

	return (
		<div className="btn-label-wrapper">
			<span className="btn-container">
				<Button
					variant={currentVariant}
					onClick={() => {
						handleButtonClick(currentVariant);
					}}
				/>
				{variant === currentVariant && (
					<span className={`selected-icon`}>
						<img src={selectedIcon} alt="" />
					</span>
				)}
			</span>
			<p>{variantLabel}</p>
		</div>
	);
};

export default ButtonContainer;
