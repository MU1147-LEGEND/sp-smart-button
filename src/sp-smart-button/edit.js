import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { Panel, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import selectedIcon from "./assets/selected.svg";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { variant } = attributes;

	const handleButtonClick = (btnVariant) => {
		setAttributes({ variant: btnVariant });
	};
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<Panel>
					{/* button style */}
					<PanelBody title={__("General", "sp-smart-button")}>
						<h3>Buttons Style</h3>
						<div className="inspector-variant-wrapper">
							<ButtonContainer
								variant={variant}
								currentVariant={"default"}
								handleButtonClick={handleButtonClick}
								selectedIcon={selectedIcon}
							/>
							<ButtonContainer
								variant={variant}
								currentVariant={"ghost"}
								handleButtonClick={handleButtonClick}
								selectedIcon={selectedIcon}
							/>
							<ButtonContainer
								variant={variant}
								currentVariant={"gradient"}
								handleButtonClick={handleButtonClick}
								selectedIcon={selectedIcon}
							/>
						</div>
					</PanelBody>

					{/* button text */}
					<PanelBody
						title={__("Button Label", "sp-smart-button")}
						initialOpen={false}
					>
						<h3>Button Label</h3>
					</PanelBody>

					{/* button icon */}
					<PanelBody title={__("Icon", "sp-smart-button")} initialOpen={false}>
						<h3>Icon</h3>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<Button
				// className={`wp-block-smart-button is-${variant}`}
				variant={variant}
			>
				Click Me
			</Button>
		</div>
	);
}
