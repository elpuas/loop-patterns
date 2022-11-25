<?php
/**
 * Plugin Name:       Loop Patterns
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       loop-patterns
 *
 * @package LoopPatterns
 */

namespace LoopPatterns;

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

$asset_file_time = plugin_dir_path( __FILE__ ) . '/build/index.asset.php';
$block_asset_dependencies = [ 'wp-i18n', 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ];

/**
 * Register Scripts
 *
 * @return void
 */
function block_assets_scripts_enqueue() {

	wp_enqueue_script( 'loop-patterns-scripts', plugins_url( 'build/index.js', __FILE__ ), $block_asset_dependencies, filemtime( $asset_file_time ), true );
	wp_enqueue_style( 'loop-patterns-styles', plugins_url( 'build/index.css', __FILE__ ), [ 'wp-edit-blocks' ], filemtime( $asset_file_time ) );
}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_assets_scripts_enqueue' );

/**
 * Register Frontend Scripts
 *
 * @return void
 */
function block_assets_scripts_enqueue_frontend() {
	wp_enqueue_style( 'loop-patterns-styles-frontend', plugins_url( 'build/index.css', __FILE__ ), [ 'wp-edit-blocks' ], filemtime( $asset_file_time ) );
}

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\block_assets_scripts_enqueue_frontend' );
