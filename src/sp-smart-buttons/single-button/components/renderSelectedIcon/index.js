import * as FaIcons from "react-icons/fa";

const SelectedIcon = ({ name, size = 18 }) => {
	if (!name || typeof name !== "string") return null;

	const Icon = FaIcons[name];
	if (!Icon) return null;

	return (
		<span className="sp-smart-button-icon">
			<Icon size={size} />
		</span>
	);
};

export default SelectedIcon;
