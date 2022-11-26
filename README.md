# untl-metadata-documentation
Metadata documentation for the UNTL Metadata Format used by the UNT Libraries Digital Collections

## Getting started. 

Create a working directory for documentation. 

``` 
mkdir untl-metadata
cd untl-metadata
````

Create a virutal enviornment. 

```
python -m venv .venv
source .venv/bin/activate
python -m pip install sphinx
````

If you executed these instructions correctly, you should have the Sphinx command line tools available. You can do a basic verification running this command: 

`sphinx-build --version`
 
We will need the `Read the Docs` theme for our documentation.

`python -m pip install sphinx-rtd-theme`

Next you will clone the git repository. 

`git clone https://github.com/unt-libraries/untl-metadata-documentation.git`

To build the documentation you will navigate to the docs folder in this repository and execute the `make` command. 

```
cd untl-metadata-documentation/docs
make html
```

This should output something similar to this. 

```
Running Sphinx v5.3.0
making output directory... done
building [mo]: targets for 0 po files that are out of date
building [html]: targets for 6 source files that are out of date
updating environment: [new config] 6 added, 0 changed, 0 removed
reading sources... [100%] input-guidelines-descriptive
looking for now-outdated files... none found
pickling environment... done
checking consistency... done
preparing documents... done
writing output... [100%] input-guidelines-descriptive
generating indices... genindex done
writing additional pages... search done
copying static files... done
copying extra files... done
dumping search index in English (code: en)... done
dumping object inventory... done
build succeeded.

The HTML pages are in _build/html.
```

You can navigate to the folder `_build/html` on your local machine and open `index.html` in your browser to view the documentation.