# docker-devtools

[![](https://imagelayers.io/badge/devigner/cs-tools:latest.svg)](https://imagelayers.io/?images=devigner/cs-tools:latest 'Get your own badge on imagelayers.io')

[Docker Hub](https://hub.docker.com/r/devigner/cs-tools/)

---

## Run

    docker run -v $HOME/:/home/dev/ -v `pwd`:/src -u `id -u` -t devigner/cs-tools <command>

---

## Create /usr/local/bin/cs-tools:

    #!/bin/bash
    docker run -v $HOME/:/home/dev/ -v `pwd`:/src -u `id -u` -t devigner/cs-tools $@

---

## TODO

- Get JSPM to run without errors
- ~~Get output in colors~~
- Get NPM output be less verbose

---

## Options

### npm

    cs-tools npm install

### jspm

    cs-tools jspm install

### gulp

    cs-tools gulp

### grunt

    cs-tools grunt

### compass

    cs-tools compass

---


### version check


    cs-tools versions


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

