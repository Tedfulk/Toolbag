# Intro

This serves as a quick reference guide and a way to share best practices.

## Table of Contents

- [Intro](#intro)
  - [Table of Contents](#table-of-contents)
    - [Switch to python version globally](#switch-to-python-version-globally)
    - [Switch to python version locally in a directory](#switch-to-python-version-locally-in-a-directory)
    - [Install python packages](#install-python-packages)
    - [See a list of all alaviable python versions to be installed](#see-a-list-of-all-alaviable-python-versions-to-be-installed)
    - [See a list of all installed python versions](#see-a-list-of-all-installed-python-versions)
    - [Switch to a python version with poetry](#switch-to-a-python-version-with-poetry)
    - [Build and publish in one line with poetry](#build-and-publish-in-one-line-with-poetry)
  
### Switch to python version globally

```bash
# Switch to python 3.10.13
pyenv global 3.10.13
```

### Switch to python version locally in a directory

```bash
# Switch to python 3.10.13
pyenv local 3.10.13
```

### Install python packages

```bash
# Install python packages
pip install -r requirements.txt
```

### See a list of all alaviable python versions to be installed

```bash
# See a list of all python versions to be installed
pyenv install --list
```

### See a list of all installed python versions

```bash
# See a list of all installed python versions
pyenv versions
```

### Switch to a python version with poetry

```bash
# Switch to python 3.10.13
poetry env use 3.10.13
```

### Build and publish in one line with poetry

```bash
# Build and publish in one line
poetry publish --build
```
