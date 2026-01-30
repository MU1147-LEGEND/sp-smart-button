import InputBoxSides from "../../../components/inputBoxSides";
import ToolbarHeader from "../../../components/toolbarHeader";

const DEFAULT_VALUES = {
	top: 9,
	right: 19,
	bottom: 9,
	left: 19,
};

const PaddingControl = ({
	label = "Padding",
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

			<InputBoxSides value={value} onChange={onChange} />
		</div>
	);
};

export default PaddingControl;
