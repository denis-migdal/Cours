#!/usr/bin/bash

ROOT=$(dirname $(readlink -f $0))
# ROOT="/tmp/auds/sujet/R 1-02 BDR/"

IP=$(ip addr | awk '/inet/ && /eth0/{sub(/\/.*$/,"",$2); print $2}')
PORT=8080

TOKEN="$IP"

HTOKEN=$( echo "$TOKEN" | md5sum | cut -d ' ' -f 1 )

#http.server is bugged
python3 -m http.server -b $IP $PORT 1>&2 2>/dev/null --directory "$ROOT" &
#python3 -m http.server -b $IP $PORT 1>&2 2>/dev/null &

#http.server is bugged
#chromium http://$IP:$PORT/?ds=$HTOKEN
# sujet/R\ 1-02\ BDR/
chromium http://$IP:$PORT/?ds=$HTOKEN 2>/dev/null
