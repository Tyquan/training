/*
    write	a	simple	program	that	strips	all	null	bytes	(bytes	with	a	value	of	zero)	from	our	file, and	saves	them	in	a	new	file	called	clean.dat.
*/

const fs = require('fs')

const cwd = process.cwd();
const bytes = fs.readFileSync(path.join(cwd, 'file.dat'));

fs.appendFileSync(path.join(cwd, 'log.txt'), (new Date) + '' + (bytes.length - clean.length) + 'bytes removed\n');