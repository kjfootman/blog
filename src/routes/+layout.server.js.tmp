import fs from 'fs';
import YAML from 'yaml'

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
    const file = fs.readFileSync('static/menu.yaml', 'utf8');

    return {
        menu: YAML.parse(file)
    }
}