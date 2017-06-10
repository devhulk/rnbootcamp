# Vim Configuration
## Introduction

Vi has a lot of features that aren't activated right out of the box. You need to configure if you want to use these features or not. For example, vi supports syntax highlighting, if you want to flip this switch you can do it everytime you open vi by typing ```:syntax on``` or you can have a place that holds all these switches and handles that for you when you open your vi enviornment. That brings us to our next section...

## .vimrc breakdown

There are multiple names you can use to name your config file, a very common one is ```.vimrc```.
Heres what you need to do to create this file. I am going to go through how to install vim && macvim using brew. You probably already have a version of vi/vim already installed so you can try and skip to the second example.

### Install vi
```
brew install vim && brew install macvim
brew link macvim

```

### Create .vimrc
```
cd
touch .vimrc
vi .vimrc
```

### Basic Example Config
Within .vimrc...
```
:syntax on
:set mouse=a
```
