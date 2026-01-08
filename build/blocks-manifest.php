<?php
// This file is generated. Do not modify it manually.
return array(
	'sp-smart-button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'sp/smart-button',
		'version' => '0.1.0',
		'title' => 'Sp Smart Button',
		'category' => 'shapedplugin',
		'icon' => 'smiley',
		'description' => 'A smart button block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'sp-smart-button',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'default' => 'Click me'
			),
			'url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'default'
			)
		)
	)
);
