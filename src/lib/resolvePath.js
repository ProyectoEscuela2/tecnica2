const path = require('node:path');

const accessDirDefault = "/src/assets/static";

export function resolvePath(dirname, filename) {
	path.resolve(accessDirDefault, dirname, filename);
}
