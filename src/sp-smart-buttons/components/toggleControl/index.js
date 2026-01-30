import { ToggleControl as WPToggleControl } from "@wordpress/components";

const SpToggleControl = ({ isToggle = false, label = "", onChange }) => {
	return (
		<div className="toggle-control-button-wrapper">
			<span className="toggle-control-button-label">{label}</span>

			<WPToggleControl
				checked={isToggle}
				onChange={(value) => onChange?.(value)}
			/>
		</div>
	);
};

export default SpToggleControl;
