import { Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import UnitDropdown from "../buttonGap/UnitDropdown";
import ResetIcon from "../icons/resetIcon";
import DeviceDropDown from "../responsiveViewDropDown";

const ToolbarHeader = ({
	label,
	unit,
	handleUnitChange,
	handleReset,
	hasUnit = true,
}) => {
	const [device, setDevice] = useState("desktop");
	return (
		<div className="sp-smart-button-toolbar-header">
			<div className="sp-smart-button-toolbar-label">
				<span>{label}</span>
				<DeviceDropDown
					value={device}
					onChange={(newDevice) => setDevice(newDevice)}
				/>
			</div>

			<div className="sp-smart-button-toolbar-actions">
				<Button
					icon={<ResetIcon />}
					label="Reset"
					onClick={handleReset}
					size="small"
					variant="tertiary"
					className="sp-reset-button-background-fix"
				/>
				{hasUnit && <UnitDropdown value={unit} onChange={handleUnitChange} />}
			</div>
		</div>
	);
};

export default ToolbarHeader;
