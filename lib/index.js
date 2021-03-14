'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url_prefix = process.env.RAW_GITHUBUSERCONTENT_LOCAL_URL ||
	process.env.npm_config_imagemin_local_url ||
	process.env.IMAGEMIN_LOCAL_URL ||
	'https://raw.githubusercontent.com/imagemin';

const url = `${url_prefix}/pngquant-bin/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
	.src(`${url}macos/pngquant`, 'darwin')
	.src(`${url}linux/x86/pngquant`, 'linux', 'x86')
	.src(`${url}linux/x64/pngquant`, 'linux', 'x64')
	.src(`${url}freebsd/x64/pngquant`, 'freebsd', 'x64')
	.src(`${url}win/pngquant.exe`, 'win32')
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'pngquant.exe' : 'pngquant');
