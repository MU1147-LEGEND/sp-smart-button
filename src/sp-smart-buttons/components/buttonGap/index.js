import { RangeControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
import ToolbarHeader from "../toolbarHeader/index.js";

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
			<ToolbarHeader
				label={label}
				unit={buttonGapUnit}
				handleUnitChange={handleUnitChange}
				handleReset={handleReset}
			/>

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
