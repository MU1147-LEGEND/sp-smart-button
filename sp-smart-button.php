<?php

/**
 * Plugin Name:       Sp Smart Button
 * Description:       A smart button block.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Mohammad Ullah
 * Author URI: 		  https://mohammad-frontend-dev.vercel.app
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sp-smart-button
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

function create_block_sp_smart_button_block_init()
{
	register_block_type(
		__DIR__ . '/build/sp-smart-buttons'
	);
	register_block_type(
		__DIR__ . '/build/sp-smart-buttons/single-button'
	);
}
add_action('init', 'create_block_sp_smart_button_block_init');


// creating new custom category
function shapedp_new_category($cats)
{
	// create a new array element with anything as its index
	$new = array(
		'key' => array(
			'slug'  => 'shapedplugin',
			'title' => 'ShapedPlugin'
		)
	);

	$position = 0;

	$cats = array_slice($cats, 0, $position, true) + $new + array_slice($cats, $position, null, true);

	// reset array indexes
	$cats = array_values($cats);

	return $cats;
}

add_filter('block_categories_all', 'shapedp_new_category');
