exports.cmd = 'em++ -Os src/app/wasm/text-to-ascii/text-to-ascii.cpp -s WASM=1 -o src/assets/wasm/text-to-ascii.js --preload-file src/app/wasm/text-to-ascii/text-to-ascii.font.txt -s EXTRA_EXPORTED_RUNTIME_METHODS="[\'ccall\']"';