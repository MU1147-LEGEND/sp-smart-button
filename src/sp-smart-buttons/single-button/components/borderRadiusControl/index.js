import InputBoxCorners from "../../../components/inputBoxCorners";
import ToolbarHeader from "../../../components/toolbarHeader";

const DEFAULT_VALUES = {
	top_left: 2,
	top_right: 2,
	bottom_right: 2,
	bottom_left: 2,
};

const BorderRadiusControl = ({
	label = "Border Radius",
	value = DEFAULT_VALUES,
	unit = "px",
	onChange,
	handleUnitChange,
}) => {
	const handleReset = () => {
		onChange(DEFAULT_VALUES);
	};
	return (
		<div className="sp-smart-button-spacing">
			<ToolbarHeader
				label={label}
				unit={unit}
				handleUnitChange={handleUnitChange}
				handleReset={handleReset}
			/>

			<InputBoxCorners value={value} onChange={onChange} />
		</div>
	);
};

export default BorderRadiusControl;
