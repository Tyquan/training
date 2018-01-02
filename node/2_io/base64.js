/*
In	this	recipe,	we're	going	to	take	some	input,	and	use	it	to	form	some	data	which	we'll	send	to	STDOUT, while	simultaneously	logging	to	STDERR.
*/

process.stdin.on('data', data => {
    process.stderr.write(`Converting: "${data}" to base64\n`);
    process.stdout.write(data.toString('base64') + '\n');
});