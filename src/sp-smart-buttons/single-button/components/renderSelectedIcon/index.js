import * as FaIcons from "react-icons/fa";

const SelectedIcon = ({ name, size = 16 }) => {
	if (!name || typeof name !== "string") return null;
	const Icon = FaIcons[name];
	if (!Icon) return null;
	return <Icon size={size} />;
};

export default SelectedIcon;
