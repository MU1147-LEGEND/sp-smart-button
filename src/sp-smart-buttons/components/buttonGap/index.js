import { useState } from "@wordpress/element";
import { RangeControl, Button } from "@wordpress/components";
import ResetIcon from "./icons/resetIcon.js";
import "./style.scss";
import UnitDropdown from "./UnitDropdown.js";

const ButtonGap = ({
	label = "Button Gap",
	min = 0,
	max = 50,
	step = 1,
	defaultValue = 12,
	onChange,
	buttonGapUnit,
	handleUnitChange,
}) => {
	const [value, setValue] = useState(defaultValue);

	const handleChange = (newValue) => {
		setValue(newValue);
		onChange?.(newValue);
	};

	const handleReset = () => {
		handleChange(12);
		handleUnitChange("px");
	};

	return (
		<div className="sp-smart-button-gap sp-control">
			<div className="sp-smart-button-gap-header">
				<span className="sp-smart-button-gap-label">{label}</span>

				<div className="sp-smart-button-gap-actions">
					<Button
						icon={<ResetIcon />}
						label="Reset"
						onClick={handleReset}
						size="small"
						variant="tertiary"
						className="sp-smart-button-gap-reset"
					/>

					<UnitDropdown value={buttonGapUnit} onChange={handleUnitChange} />
				</div>
			</div>

			<RangeControl
				value={value}
				onChange={handleChange}
				min={min}
				max={max}
				step={step}
				className="sp-smart-button-gap-range"
			/>
		</div>
	);
};

export default ButtonGap;
