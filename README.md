# docker-devtools

[![](https://imagelayers.io/badge/devigner/devtools:latest.svg)](https://imagelayers.io/?images=devigner/devtools:latest 'Get your own badge on imagelayers.io')

- latest [Dockerfile](https://github.com/devigner/docker-devtools/blob/master/Dockerfile)

---

## Run

    docker run -v $HOME/:/home/dev/ -v `pwd`:/src -u `id -u` devigner/devtools <command>

---

## Create /usr/local/bin/devtools:

    #!/bin/bash
    docker run -v $HOME/:/home/dev/ -v `pwd`:/src -u `id -u` devigner/devtools $@

---

## Options

### npm

    devtools npm install

### jspm

    devtools jspm install

### gulp

    devtools gulp

### grunt

    devtools grunt

### compass

    devtools compass

---


### version check


    devtools versions


Should output:


    → Gulp
    [07:14:13] CLI version 1.2.1

    → Grunt
    grunt-cli: The grunt command line interface (v1.2.0)

    Fatal error: Unable to find local grunt.

    If you're seeing this message, grunt hasn't been installed locally to
    your project. For more information about installing and configuring grunt,
    please see the Getting Started guide:

    http://gruntjs.com/getting-started

    → Sass
    Sass 3.4.22 (Selective Steve)

    → NPM
    3.8.9

    → node
    v6.2.0

    → jspm
    0.16.34
    Running against global jspm install

