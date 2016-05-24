#!/bin/bash
docker run -v $HOME/:/home/dev/ -v `pwd`:/src -u `id -u` -t devigner/devtools $@
