import { useState } from "@wordpress/element";
import UnitDropdown from "../buttonGap/UnitDropdown";
import DeviceDropDown from "../responsiveViewDropDown";
import { Button } from "@wordpress/components";
import ResetIcon from "../buttonGap/icons/resetIcon";
import "./style.scss";

const ToolbarHeader = ({ label, unit, handleUnitChange, handleReset }) => {
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
					className="sp-smart-button-toolbar-reset"
				/>

				<UnitDropdown value={unit} onChange={handleUnitChange} />
			</div>
		</div>
	);
};

export default ToolbarHeader;
