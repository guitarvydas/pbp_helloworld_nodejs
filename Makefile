# This is very rudimentary and should be rewritten.
NAME=helloworld

all:
	node ./pbp/das/das2json.mjs $(NAME).drawio
	cat pbp/kernel/kernel0d.js hello.js world.js main.js >helloworld.mjs
	node helloworld.mjs '.' '' main $(NAME).drawio.json

init:
	npm install yargs prompt-sync ohm-js @xmldom/xmldom
