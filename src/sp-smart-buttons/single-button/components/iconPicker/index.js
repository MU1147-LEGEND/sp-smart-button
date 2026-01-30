import { Button, TextControl } from "@wordpress/components";
import { useMemo, useState } from "@wordpress/element";
import * as FaIcons from "react-icons/fa";
import useDebounce from "../../hooks/useDebounce";

const IconPicker = ({
	value = "",
	onChange,
	label = "Select an Icon",
	placeholder = "Search icons...",
}) => {
	const safeValue = typeof value === "string" ? value : "";
	const [query, setQuery] = useState("");
	const debouncedQuery = useDebounce(query, 300);

	// first create all icons at once
	const allIcons = useMemo(() => {
		return Object.entries(FaIcons)
			.filter(
				([name, Comp]) => name.startsWith("Fa") && typeof Comp === "function",
			)
			.map(([name, Icon]) => ({ name, Icon }))
			.sort((a, b) => a.name.localeCompare(b.name));
	}, []);

	// search functionality with debounce
	const filteredIcons = useMemo(() => {
		const q = debouncedQuery.trim().toLowerCase();
		if (!q) return allIcons;
		return allIcons.filter((item) => item.name.toLowerCase().includes(q));
	}, [allIcons, debouncedQuery]);

	return (
		<div className="sp-icon-picker">
			<div className="sp-icon-picker-top">
				<span className="sp-icon-picker-title">{label}</span>

				<TextControl
					value={query}
					onChange={(val) => setQuery(String(val || ""))}
					placeholder={placeholder}
				/>
			</div>

			<div className="sp-icon-picker-grid">
				{filteredIcons.length === 0 ? (
					<div className="sp-icon-picker-empty">No icons found.</div>
				) : (
					filteredIcons.map(({ name, Icon }) => {
						const isActive = safeValue === name;

						return (
							<Button
								key={name}
								className={`sp-icon-picker-item ${isActive ? "is-active" : ""}`}
								onClick={() => onChange?.(name)}
								label={name}
								showTooltip
							>
								<Icon size={18} />
							</Button>
						);
					})
				)}
			</div>
		</div>
	);
};

export default IconPicker;
