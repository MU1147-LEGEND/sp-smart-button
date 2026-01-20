import InputBoxes from "../inputBoxSides";
import ToolbarHeader from "../toolbarHeader";
import "./style.scss";

const DEFAULT_VALUES = {
	top: 10,
	right: 8,
	bottom: 10,
	left: 8,
};

const MarginControl = ({
	label = "Margin",
	value = DEFAULT_VALUES,
	unit = "px",
	onChange,
	handleUnitChange,
}) => {
	const handleReset = () => {
		onChange(DEFAULT_VALUES);
		handleUnitChange("px");
	};
	return (
		<div className="sp-smart-button-spacing">
			<ToolbarHeader
				label={label}
				unit={unit}
				handleUnitChange={handleUnitChange}
				handleReset={handleReset}
			/>

			<InputBoxes value={value} onChange={onChange} />
		</div>
	);
};

export default MarginControl;
