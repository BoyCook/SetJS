## Description

Set implementation in JavaScript

## Usage

	var data = new Set();
	data.add('item');

## Including in node.js app

You can include the module from GitHub directly by adding the following to your `package.json` and then doing `npm install`

    "dependencies": {
        "set-js": "https://github.com/BoyCook/SetJS/tarball/master"
    }

## Tests

Displaying results in the terminal (common usage):

    make test

Running all the tests (calls test-ci and test-cov - best used by CI server):

    make test-all

Produce xUnit style XML report file:

    make test-ci

Running the tests with coverage and producing HTML Mocha coverage report file:

    make test-cov
