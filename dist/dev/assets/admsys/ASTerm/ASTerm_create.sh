#!/usr/bin/bash

DIR=$(dirname $(readlink -f $0))

"$DIR"/../install/vm_create.sh ASTerm

PRESEED="$(mktemp --tmpdir preseed-XXXXX)"

"$DIR"/../install/preseed_create.sh > "$PRESEED"

# TODO: ADD preseed
"$DIR"/../install/vm_install.sh ASTerm --preseed "$PRESEED"

rm "$PRESEED"

#TODO: post install...