import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
	GradientPicker,
	Panel,
	PanelBody,
	RangeControl,
	TextControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import BoxShadowControl from "../components/boxShadowControl";
import TabToggle from "../components/tabToggle";
import SpToggleControl from "../components/toggleControl";
import ToolbarHeader from "../components/toolbarHeader";
import selectedIcon from "./assets/selected.svg";
import BorderRadiusControl from "./components/borderRadiusControl";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";
import ColorControl from "./components/colorControlButton";
import IconLibraryPopup from "./components/iconLibraryPopup";
import PaddingControl from "./components/paddingControl";
import RangeControlMarks from "./components/rangeControlMarks";
import TypographyPopover from "./components/TypographyPopover";
import "./single-button-editor.scss";
import { useEffect, useState } from "@wordpress/element";
import SpSelectControl from "../components/spSelectControl";
import CustomIconPicker from "./components/customIconPicker";
import PanelBanner from "../components/bannerShowPanel";

export default function Edit({ attributes, setAttributes }) {
	const [openPanel, setOpenPanel] = useState("general");
	const {
		text,
		btnUrl,
		variant,
		hoverEffect,
		generalStyleTab,
		textColor,
		bgColor,
		hoverStyles,
		borderWidth,
		borderWidthUnit,
		borderRadiusControl,
		paddingControl,
		paddingUnit,
		buttonLabelTabs,
		typography,
		ghostBgColor,
		ghostTextColor,
		borderColor,
		openNewTab,
		gradColor,
		gradTextColor,
		isBoxShadowEnabled,
		boxShadow,
		isIconEnabled,
		iconSrcTab,
		iconName,
		iconSize,
		iconStyleTabs,
		iconColor,
		iconGap,
		iconPosition,
		customIcon,
	} = attributes;

	const handleButtonClick = (btnVariant) => {
		setAttributes({ variant: btnVariant });
	};
	const handlePanelToggle = (panelName) => {
		setOpenPanel((prev) => (prev === panelName ? "" : panelName));
	};

	// change icon color for ghost buttons (only first time)
	useEffect(() => {
		if (variant === "ghost" && iconColor === "#FFF") {
			setAttributes({ iconColor: "#000" });
		}
	}, [variant]);

	// tab options
	const options = ["normal", "hover"];
	const btnLblTabOptions = ["normal", "hover"];
	const iconSrcOptions = ["library", "custom"];
	const iconStyleTabOptions = ["normal", "hover"];
	const iconPositionOptions = [
		{ label: "Left", value: "left" },
		{ label: "Right", value: "right" },
		{ label: "Top", value: "top" },
		{ label: "Bottom", value: "bottom" },
	];

	const variants = ["default", "ghost", "gradient"];
	const hoverEffects = [
		{
			effect: "Default",
			value: "default",
		},
		{
			effect: "Raise",
			value: "raise",
		},
		{
			effect: "Grad Shadow",
			value: "gradient",
		},
		{
			effect: "Shine",
			value: "shine",
		},
		{
			effect: "Multi Layers",
			value: "multi-layers",
		},
		{
			effect: "Flip",
			value: "flip",
		},
	];

	const ghostHoverEffects = [
		{
			effect: "Default",
			value: "default",
		},
		{
			effect: "Slide Right",
			value: "slide-right",
		},
		{
			effect: "Slide Skew",
			value: "slide-skew",
		},
		{
			effect: "Slide Top",
			value: "slide-top",
		},
		{
			effect: "Neo Follow",
			value: "neo-follow",
		},
		{
			effect: "Draw Outline",
			value: "draw-outline",
		},
	];

	// calculate border width and give width if w is zero when selecting ghost variant
	const effectiveBorderWidth =
		variant === "ghost" && borderWidth === 0 ? 1 : borderWidth;

	const effectiveBorderWidthHover =
		variant === "ghost" && hoverStyles.borderWidth === 0
			? 1
			: hoverStyles.borderWidth;

	// generate shadow css value
	const shadowString = isBoxShadowEnabled
		? `${boxShadow.x}px ${boxShadow.y}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`
		: "";
	const shadowStringHover = hoverStyles.isBoxShadowEnabled
		? `${hoverStyles?.boxShadow?.x}px ${hoverStyles?.boxShadow?.y}px ${hoverStyles?.boxShadow?.blur}px ${hoverStyles?.boxShadow?.spread}px ${hoverStyles?.boxShadow?.color}`
		: "";

	return (
		<div
			{...useBlockProps({
				className: `sp-parent has-hover-${hoverEffect}`,
				style: {
					"--primary-background": `${bgColor}`,
					"--primary-text-color": `${textColor}`,
					"--primary-font-size": `${typography.fontSize}px`,
					"--ghost-text-color": `${ghostTextColor}`,
					"--ghost-background": `${ghostBgColor}`,
					"--sp-gradient-bg": gradColor,
					"--sp-gradient-text-color": gradTextColor,
					"--sp-border-w": `${effectiveBorderWidth}${borderWidthUnit}`,
					"--sp-border-color": `${borderColor}`,
					// border radius inject dynamically
					"--sp-radius-top_left": `${borderRadiusControl.top_left}px`,
					"--sp-radius-top_right": `${borderRadiusControl.top_right}px`,
					"--sp-radius-bottom_right": `${borderRadiusControl.bottom_right}px`,
					"--sp-radius-bottom_left": `${borderRadiusControl.bottom_left}px`,
					// button padding inject
					"--sp-padding-top": `${paddingControl.top}${paddingUnit}`,
					"--sp-padding-right": `${paddingControl.right}${paddingUnit}`,
					"--sp-padding-bottom": `${paddingControl.bottom}${paddingUnit}`,
					"--sp-padding-left": `${paddingControl.left}${paddingUnit}`,
					// box shadow style
					"--sp-box-shadow": `${shadowString}`,
					"--sp-box-shadow-hover": `${shadowStringHover}`,
					// icon gap style
					"--sp-icon-gap": `${iconGap}px`,

					// hover styles
					// button hover background color
					"--sp-hover-bg-color": `${hoverStyles.bgColor}`,
					"--sp-hover-ghost-bg-color": `${hoverStyles.ghostBgColor}`,
					"--sp-hover-ghost-text-color": `${hoverStyles.ghostTextColor}`,
					"--sp-hover-gradient": hoverStyles.gradColor,
					"--sp-hover-gradient-text-color": hoverStyles.gradTextColor,
					"--sp-hover-text-color": `${hoverStyles.txtColor}`,
					"--sp-border-w-hover": `${effectiveBorderWidthHover}${hoverStyles.borderWidthUnit}`,
					"--sp-border-color-hover": `${hoverStyles.borderColor}`,
					// border radius
					"--sp-radius-top_left-hover": `${hoverStyles.borderRadiusControl.top_left}${hoverStyles.borderRadiusUnit}`,
					"--sp-radius-top_right-hover": `${hoverStyles.borderRadiusControl.top_right}${hoverStyles.borderRadiusUnit}`,
					"--sp-radius-bottom_right-hover": `${hoverStyles.borderRadiusControl.bottom_right}${hoverStyles.borderRadiusUnit}`,
					"--sp-radius-bottom_left-hover": `${hoverStyles.borderRadiusControl.bottom_left}${hoverStyles.borderRadiusUnit}`,
				},
			})}
		>
			<InspectorControls>
				<PanelBanner label="Smart Button" />
				<Panel>
					{/* button style */}
					<PanelBody
						title={__("General", "sp-smart-button")}
						opened={openPanel === "general"}
						onToggle={() => handlePanelToggle("general")}
					>
						<>
							<h3>Buttons Style</h3>
							<div className="inspector-variant-wrapper">
								{variants.map((value) => (
									<ButtonContainer
										key={value}
										variant={variant}
										currentVariant={value}
										handleButtonClick={handleButtonClick}
										selectedIcon={selectedIcon}
									/>
								))}
							</div>
						</>

						<h3>Hover Effects</h3>
						<div className="inspector-hover-styles-wrapper">
							{(variant === "default" &&
								hoverEffects.map((effect) => (
									<div key={effect.value} className="inspector-hover-styles">
										<span
											className="btn-container"
											style={{
												// "--primary-background": `${bgColor}`,
												"--primary-text-color": `${textColor}`,
											}}
										>
											<Button
												variant={variant}
												// className={`is-hover-${effect.value}`}
												hoverEffect={effect.value}
												onClick={() => {
													setAttributes({ hoverEffect: effect.value });
												}}
											/>

											{/* showing selected tick */}
											{effect.value === hoverEffect && (
												<span className={`selected-icon`}>
													<img src={selectedIcon} alt="" />
												</span>
											)}
										</span>
										<p>{effect.effect}</p>
									</div>
								))) ||
								(variant === "ghost" &&
									ghostHoverEffects.map((effect) => (
										<div key={effect.value} className="inspector-hover-styles">
											<span
												className="btn-container"
												// injecting variables on inspector section
												style={{
													"--primary-text-color": `${textColor}`,
													"--primary-background": `${bgColor}`,
													"--ghost-background": `${ghostBgColor}`,
													"--sp-hover-bg-color": `${hoverStyles.bgColor}`,
													"--sp-hover-text-color": `${hoverStyles.txtColor}`,
												}}
											>
												<Button
													variant={variant}
													// className={`is-hover-${effect.value}`}
													hoverEffect={effect.value}
													onClick={() => {
														setAttributes({ hoverEffect: effect.value });
													}}
												/>
												{/* showing selected tick */}
												{effect.value === hoverEffect && (
													<span className={`selected-icon`}>
														<img src={selectedIcon} alt="" />
													</span>
												)}
											</span>
											<p>{effect.effect}</p>
										</div>
									)))}
						</div>

						{/* ----------Normal/hover tab toggler--------- */}
						<TabToggle
							value={generalStyleTab}
							tabOptions={options}
							onChange={(newOption) =>
								setAttributes({ generalStyleTab: newOption })
							}
						/>

						{generalStyleTab === "normal" && (
							<>
								{variant === "default" && (
									<ColorControl
										label={__("Background Color", "sp-smart-button")}
										value={bgColor}
										onChange={(newBgColor) =>
											setAttributes({ bgColor: newBgColor })
										}
										onReset={() => setAttributes({ bgColor: "#2563eb" })}
									/>
								)}
								{variant === "ghost" && (
									<ColorControl
										label={__("Background Color", "sp-smart-button")}
										value={ghostBgColor}
										onChange={(newBgColor) =>
											setAttributes({ ghostBgColor: newBgColor })
										}
										onReset={() => {
											setAttributes({ ghostBgColor: "#fff" });
										}}
									/>
								)}

								{variant === "gradient" && (
									<div className="gradient-wrapper">
										<h3>Gradient Background</h3>
										<GradientPicker
											value={gradColor}
											onChange={(newGrad) =>
												setAttributes({ gradColor: newGrad })
											}
										/>
									</div>
								)}

								{/* box shadow control */}
								{hoverEffect !== "gradient" &&
									hoverEffect !== "multi-layers" && (
										<>
											<SpToggleControl
												label={__("Box Shadow", "sp-smart-button")}
												isToggle={isBoxShadowEnabled}
												onChange={(value) => {
													setAttributes({ isBoxShadowEnabled: value });
												}}
											/>

											{isBoxShadowEnabled && (
												<>
													<BoxShadowControl
														label="Box Shadow"
														value={boxShadow}
														onChange={(newShadow) =>
															setAttributes({ boxShadow: newShadow })
														}
													/>
												</>
											)}
										</>
									)}

								{/* box shadow end */}

								{/* border color */}
								{hoverEffect !== "multi-layers" && (
									<>
										<ColorControl
											label={__("Border Color", "sp-smart-button")}
											value={borderColor}
											onChange={(newColor) =>
												setAttributes({ borderColor: newColor })
											}
											onReset={() => setAttributes({ borderColor: "#000" })}
										/>

										<ToolbarHeader
											label={__("Border Width", "sp-smart-button")}
											unit={borderWidthUnit}
											handleReset={() => {
												setAttributes({
													borderWidthUnit: "px",
													borderWidth: 0,
												});
											}}
											handleUnitChange={(newUnit) => {
												setAttributes({ borderWidthUnit: newUnit });
											}}
										/>
										<RangeControlMarks
											value={borderWidth}
											step={1}
											max={10}
											marks={true}
											onChange={(value) =>
												setAttributes({
													borderWidth: value,
												})
											}
										/>
									</>
								)}
								{hoverEffect !== "draw-outline" && (
									<BorderRadiusControl
										value={borderRadiusControl}
										onChange={(value) =>
											setAttributes({ borderRadiusControl: value })
										}
									/>
								)}

								<h3 style={{ marginTop: "15px" }}>Button Link</h3>
								<TextControl
									value={btnUrl}
									onChange={(newUrl) => setAttributes({ btnUrl: newUrl })}
									placeholder="https://example.com"
								/>

								<SpToggleControl
									label={__("Open in New Tab", "sp-smart-button")}
									isToggle={openNewTab}
									onChange={(value) => {
										setAttributes({ openNewTab: value });
									}}
								/>

								{/* padding control single button */}
								<PaddingControl
									unit={paddingUnit}
									onChange={(val) => {
										setAttributes({ paddingControl: val });
									}}
									value={paddingControl}
									handleUnitChange={(newUnit) =>
										setAttributes({ paddingUnit: newUnit })
									}
								/>
							</>
						)}

						{generalStyleTab === "hover" && (
							<>
								{variant === "default" && (
									<ColorControl
										label={__("Background Color", "sp-smart-button")}
										value={hoverStyles.bgColor}
										onChange={(newHoverBgColor) =>
											setAttributes({
												hoverStyles: {
													...hoverStyles,
													bgColor: newHoverBgColor,
												},
											})
										}
										onReset={() =>
											setAttributes({
												hoverStyles: { ...hoverStyles, bgColor: "#0751AE" },
											})
										}
									/>
								)}
								{variant === "ghost" && (
									<ColorControl
										label={__("Background Color", "sp-smart-button")}
										value={hoverStyles.ghostBgColor}
										onChange={(newHoverBgColor) =>
											setAttributes({
												hoverStyles: {
													...hoverStyles,
													ghostBgColor: newHoverBgColor,
												},
											})
										}
										onReset={() =>
											setAttributes({
												hoverStyles: {
													...hoverStyles,
													ghostBgColor: "#FFF",
												},
											})
										}
									/>
								)}

								{variant === "gradient" && (
									<div className="gradient-wrapper">
										<h3>Gradient Background Hover</h3>
										<GradientPicker
											value={hoverStyles.gradColor}
											onChange={(newGrad) =>
												setAttributes({
													hoverStyles: {
														...hoverStyles,
														gradColor: newGrad,
													},
												})
											}
										/>
									</div>
								)}

								{/* box shadow control */}
								{hoverEffect !== "gradient" &&
									hoverEffect !== "multi-layers" && (
										<>
											<SpToggleControl
												label={__("Box Shadow Hover", "sp-smart-button")}
												isToggle={hoverStyles.isBoxShadowEnabled}
												onChange={(value) => {
													setAttributes({
														hoverStyles: {
															...hoverStyles,
															isBoxShadowEnabled: value,
														},
													});
												}}
											/>

											{hoverStyles.isBoxShadowEnabled && (
												<>
													<BoxShadowControl
														label="Box Shadow Hover"
														value={hoverStyles.boxShadow}
														onChange={(newShadow) =>
															setAttributes({
																hoverStyles: {
																	...hoverStyles,
																	boxShadow: newShadow,
																},
															})
														}
													/>
												</>
											)}
										</>
									)}

								{/* box shadow end */}

								<ColorControl
									label={__("Border Color", "sp-smart-button")}
									value={hoverStyles.borderColor}
									onChange={(newBorderColor) =>
										setAttributes({
											hoverStyles: {
												...hoverStyles,
												borderColor: newBorderColor,
											},
										})
									}
									onReset={() =>
										setAttributes({
											hoverStyles: {
												...hoverStyles,
												borderColor: "#000",
											},
										})
									}
								/>

								{/* border width part */}
								<ToolbarHeader
									label={__("Border Width", "sp-smart-button")}
									unit={hoverStyles.borderWidthUnit}
									handleReset={() => {
										setAttributes({
											hoverStyles: {
												...hoverStyles,
												borderWidthUnit: "px",
												borderWidth: 0,
											},
										});
									}}
									handleUnitChange={(newUnit) => {
										setAttributes({
											hoverStyles: { ...hoverStyles, borderWidthUnit: newUnit },
										});
									}}
								/>
								<RangeControlMarks
									value={hoverStyles.borderWidth}
									step={1}
									max={10}
									marks={true}
									onChange={(value) =>
										setAttributes({
											hoverStyles: {
												...hoverStyles,
												borderWidth: value,
											},
										})
									}
								/>

								{/* border radius part */}
								{hoverEffect !== "draw-outline" && (
									<BorderRadiusControl
										value={hoverStyles.borderRadiusControl}
										unit={hoverStyles.borderRadiusUnit}
										handleUnitChange={(newUnit) => {
											setAttributes({
												hoverStyles: {
													...hoverStyles,
													borderRadiusUnit: newUnit,
												},
											});
										}}
										onChange={(value) =>
											setAttributes({
												hoverStyles: {
													...hoverStyles,
													borderRadiusControl: value,
												},
											})
										}
									/>
								)}
							</>
						)}
					</PanelBody>

					{/* button Label */}
					<PanelBody
						title={__("Button Label", "sp-smart-button")}
						opened={openPanel === "btnLabel"}
						onToggle={() => handlePanelToggle("btnLabel")}
					>
						<h3>Button Label</h3>
						<TextControl
							value={text}
							placeholder="Button label"
							onChange={(newText) => {
								setAttributes({ text: newText });
							}}
						/>

						{/* typography controls */}
						<TypographyPopover
							typography={typography}
							onChange={(newTypography) => {
								setAttributes({
									typography: {
										...typography,
										...newTypography,
									},
								});
							}}
						/>

						{/* normal/hover tabs */}
						<TabToggle
							value={buttonLabelTabs}
							tabOptions={btnLblTabOptions}
							onChange={(newOption) =>
								setAttributes({ buttonLabelTabs: newOption })
							}
						/>

						{buttonLabelTabs === "normal" && variant === "default" && (
							// text color setting
							<ColorControl
								label={__("Color", "sp-smart-button")}
								value={textColor}
								onChange={(newTxtColor) =>
									setAttributes({ textColor: newTxtColor })
								}
								onReset={() => setAttributes({ textColor: "#FFF" })}
							/>
						)}
						{buttonLabelTabs === "hover" && variant === "default" && (
							// text color setting
							<ColorControl
								label={__("Color", "sp-smart-button")}
								value={hoverStyles.txtColor}
								onChange={(newTxtColor) =>
									setAttributes({
										hoverStyles: {
											...hoverStyles,
											txtColor: newTxtColor,
										},
									})
								}
								onReset={() => setAttributes({ textColor: "#FFF" })}
							/>
						)}

						{/* ghost text color style */}
						{buttonLabelTabs === "normal" && variant === "ghost" && (
							// text color setting
							<ColorControl
								label={__("Color", "sp-smart-button")}
								value={ghostTextColor}
								onChange={(newTxtColor) =>
									setAttributes({ ghostTextColor: newTxtColor })
								}
								onReset={() => setAttributes({ ghostTextColor: "#FFF" })}
							/>
						)}
						{/* hover ghost variant color setting */}
						{buttonLabelTabs === "hover" && variant === "ghost" && (
							// text color setting
							<ColorControl
								label={__("Color", "sp-smart-button")}
								value={hoverStyles.ghostTextColor}
								onChange={(newTxtColor) =>
									setAttributes({
										hoverStyles: {
											...hoverStyles,
											ghostTextColor: newTxtColor,
										},
									})
								}
								onReset={() =>
									setAttributes({
										hoverStyles: {
											...hoverStyles,
											ghostTextColor: "#FFF",
										},
									})
								}
							/>
						)}

						{/* gradient button text style */}
						{buttonLabelTabs === "normal" && variant === "gradient" && (
							// text color setting
							<ColorControl
								label={__("Color", "sp-smart-button")}
								value={gradTextColor}
								onChange={(newTxtColor) =>
									setAttributes({ gradTextColor: newTxtColor })
								}
								onReset={() => setAttributes({ gradTextColor: "#FFF" })}
							/>
						)}
						{buttonLabelTabs === "hover" && variant === "gradient" && (
							// text color setting
							<ColorControl
								label={__("Color", "sp-smart-button")}
								value={hoverStyles.gradTextColor}
								onChange={(newTxtColor) =>
									setAttributes({
										hoverStyles: {
											...hoverStyles,
											gradTextColor: newTxtColor,
										},
									})
								}
								onReset={() =>
									setAttributes({
										hoverStyles: {
											...hoverStyles,
											gradTextColor: "#000",
										},
									})
								}
							/>
						)}
					</PanelBody>

					{/* button icon */}
					<PanelBody
						title={__("Icon", "sp-smart-button")}
						opened={openPanel === "icon"}
						onToggle={() => handlePanelToggle("icon")}
					>
						<SpToggleControl
							label={__("Icon", "sp-smart-button")}
							isToggle={isIconEnabled}
							onChange={(value) => setAttributes({ isIconEnabled: value })}
						/>

						{isIconEnabled && (
							<>
								<TabToggle
									value={iconSrcTab}
									tabOptions={iconSrcOptions}
									onChange={(newTab) => setAttributes({ iconSrcTab: newTab })}
								/>

								{iconSrcTab === "library" && (
									<IconLibraryPopup
										value={iconName}
										onChange={(newIconName) =>
											setAttributes({
												iconName: String(newIconName || ""),
											})
										}
									/>
								)}
								{iconSrcTab === "custom" && (
									<CustomIconPicker
										value={customIcon}
										onChange={(val) => setAttributes({ customIcon: val })}
									/>
								)}

								{/* icon size */}
								<div className="sp-control">
									<ToolbarHeader
										label={__("Icon Size")}
										handleReset={() => setAttributes({ iconSize: 18 })}
										hasUnit={false}
									/>
									<RangeControl
										value={iconSize}
										onChange={(newSize) => setAttributes({ iconSize: newSize })}
										min={8}
										max={50}
									/>
								</div>

								{/* normal/hover toggler */}
								<TabToggle
									value={iconStyleTabs}
									tabOptions={iconStyleTabOptions}
									onChange={(newOption) =>
										setAttributes({ iconStyleTabs: newOption })
									}
								/>
								{/* icon normal state styles */}
								{iconStyleTabs === "normal" && (
									<>
										<ColorControl
											label={__("Color", "sp-smart-button")}
											value={iconColor}
											onChange={(newColor) =>
												setAttributes({ iconColor: newColor })
											}
											onReset={() => setAttributes({ iconColor: "#FFF" })}
										/>
									</>
								)}
								{/* icon hover state styles */}
								{iconStyleTabs === "hover" && (
									<ColorControl
										label={__("Color", "sp-smart-button")}
										value={hoverStyles.iconColor}
										onChange={(newColor) =>
											setAttributes({
												hoverStyles: {
													...hoverStyles,
													iconColor: newColor,
												},
											})
										}
										onReset={() =>
											setAttributes({
												hoverStyles: {
													...hoverStyles,
													iconColor: "#000",
												},
											})
										}
									/>
								)}

								<div className="sp-control">
									<ToolbarHeader
										label={__("Icon Gap")}
										handleReset={() => setAttributes({ iconGap: 12 })}
										hasUnit={false}
									/>
									<RangeControl
										value={iconGap}
										onChange={(newGap) => setAttributes({ iconGap: newGap })}
										min={0}
										max={100}
									/>
								</div>

								<SpSelectControl
									label="Icon Position"
									value={iconPosition}
									options={iconPositionOptions}
									onChange={(val) => setAttributes({ iconPosition: val })}
								/>
							</>
						)}
					</PanelBody>
				</Panel>
			</InspectorControls>

			{/* child button render */}
			<Button
				variant={variant}
				hoverEffect={hoverEffect}
				link={btnUrl}
				openNewTab={openNewTab}
				isIconEnabled={isIconEnabled}
				iconName={iconName}
				customIcon={customIcon}
				iconSize={iconSize}
				iconColor={iconColor}
				iconColorHover={hoverStyles.iconColor}
				iconPosition={iconPosition}
				iconSrcTab={iconSrcTab}
			>
				{text}
			</Button>
		</div>
	);
}
