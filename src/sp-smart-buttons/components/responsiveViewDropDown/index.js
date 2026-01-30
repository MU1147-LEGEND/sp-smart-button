import { useState } from "@wordpress/element";
import DesktopIcon from "../icons/DesktopIcon";
import PhoneIcon from "../icons/PhoneIcon";

const DEVICES = [
	{
		label: "Desktop",
		value: "desktop",
		Icon: DesktopIcon,
	},
	{
		label: "Phone",
		value: "phone",
		Icon: PhoneIcon,
	},
];

const DeviceDropDown = ({ value = "desktop", onChange }) => {
	const [open, setOpen] = useState(false);

	const activeDevice =
		DEVICES.find((device) => device.value === value) || DEVICES[0];

	return (
		<div
			className="sp-smart-button-device-dropdown"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<div className="sp-smart-button-device-value">
				<activeDevice.Icon />
			</div>

			{open && (
				<div className="sp-smart-button-device-menu">
					{DEVICES.map(({ value, Icon, label }) => (
						<button
							key={value}
							type="button"
							className={`sp-smart-button-device-item ${
								value === activeDevice.value ? "is-active" : ""
							}`}
							onClick={() => onChange(value)}
						>
							<Icon />
							<span>{label}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default DeviceDropDown;
