# op-duet-plugin

![Github Actions Status](https://github.com/decentraminds/jlab-op-duet-plugin/workflows/Build/badge.svg)

OP Duet Plugin


## Requirements

* Conda
* JupyterLab >= 1.0
* Node >= 10.15.0

## Install

```bash
conda create -n <name> python=3.8
conda activate <name>
conda install -c conda-forge jupyterlab==2.2.8 jupyter_contrib_nbextensions -y
```

```bash
jupyter labextension install op-duet-plugin
```

## Contributing

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to op-duet-plugin directory
# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension link .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
# jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

### Uninstall

```bash
jupyter labextension uninstall op-duet-plugin
```

