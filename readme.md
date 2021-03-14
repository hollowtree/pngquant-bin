# pngquant-bin ![GitHub Actions Status](https://github.com/imagemin/pngquant-bin/workflows/test/badge.svg?branch=master)

> [`pngquant`](https://github.com/kornelski/pngquant) is a PNG compressor that significantly reduces file sizes by converting images to a more efficient 8-bit PNG format

You probably want [`imagemin-pngquant`](https://github.com/imagemin/imagemin-pngquant) instead.


## Install

```
$ npm install pngquant-bin
```

### Downloading From a Custom Source
By default, this package will download pngquant-bin from GitHub. To use a custom source, set the npm config property `imagemin_local_url`. The downloader will append `/<name>/<version>/vendor/<dist>`.

```
$ npm install pngquant-bin --imagemin_local_url=https://mymirror.local/path
```

Or add property into your `.npmrc` file([https://docs.npmjs.com/files/npmrc](https://docs.npmjs.com/files/npmrc))

```
imagemin_local_url=https://mymirror.local/path
```

Another option is to use the environment variable `IMAGEMIN_LOCAL_URL`.

```
$ IMAGEMIN_LOCAL_URL=https://mymirror.local/path npm install pngquant-bin
```


## Usage

```js
const {execFile} = require('child_process');
const pngquant = require('pngquant-bin');

execFile(pngquant, ['-o', 'output.png', 'input.png'], err => {
	console.log('Image minified!');
});
```


## CLI

```
$ npm install --global pngquant-bin
```

```
$ pngquant --help
```


## Updating pre-compiled binaries

The Linux binaries are statically linked so they should work on all Linux distributions. To recompile them:

1. `sudo apt-get install libpng-dev`
2. `./configure CFLAGS=-static && make && cp pngquant pngquant-64`
3. Repeat the above commands, but in a 32-bin docker container started with: docker run -ti -v `pwd`:/source i386/debian:9.3 bash
