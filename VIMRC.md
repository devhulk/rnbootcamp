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
These are examples of switches within vi that you can flip and have added functionality. ```:syntax on``` gives you the ability to have text highlighting, and ```:set mouse=a``` gives you the ability to click around vi with your mouse for those times when using a mouse makes sense. What if we want to add functionality that isn't currently a part of vi? Well that brings us to our next section Vim Plugins.

## Vim Plugins

### Purpose
Give you added functionality like having a file tree open next to your working file, or code completion.

### Instructions for Installing Plugins
Plugins require some placement of different repositories in different folders so vi can have access to your config when you put certain commands in your .vimrc. To abstract this a little bit we use a plugin manager for vi called [Vundle](https://github.com/VundleVim/Vundle.vim).

 Install this before proceeding. The first plugin we are going to install is ```nerdtree```.

Once your finished folowing all the [Vundle](https://github.com/VundleVim/Vundle.vim) instructions. Do the following to get  [NERDTree](https://github.com/scrooloose/nerdtree) installed. 
```
git clone https://github.com/scrooloose/nerdtree.git ~/.vim/bundle/nerdtree
```
in .vimrc
```
:let mapleader = "-"
Plugin 'scrooloose/nerdtree'
Plugin 'jistr/vim-nerdtree-tabs'


map <Leader>n <plug>NERDTreeTabsToggle<CR>

autocmd vimenter * NERDTree
aumd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 1 && isdirectory(argv()[0]) && !exists("s:std_in") | exe 'NERDTree' argv()[0] | wincmd p | ene | endif
```
Then run this in vi...
```
:PluginInstall
```
Now when you open vi NERDTree should open automatically. Now you can also toggle the tree by typing ```-n```.

There are many plugins that you can look up and configure, this is just a common example, hope this gives you enough information to figure out how to customize your vi enviornment the way you want to!




