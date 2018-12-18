# Easy Link Opener

A WebExtension that, when you select and right click on a link, adds entries to Edge's context menu to open that link in a new tab or (private) window.

[![Edge](.github/edge-logo.png)](https://www.microsoft.com/store/apps/9MT68CJLB6HL)
-------------
Click above for the <br> Edge listing

## Packaging

_This section is mostly for myself, to have all packaging scripts in one place._ <br><br>
You might need to install the tools web-ext and ManifoldJS before:

```bash
npm install --global web-ext
npm install -g manifoldjs
```

```bash
cd ..
manifoldjs -l debug -p edgeextension -f edgeextension -m easy-link-opener/manifest.json
# Update the appxmanifest.xml and store assets with your/your extension's information before continuing.
manifoldjs -l debug -p edgeextension package easy\ link\ opener/edgeextension/manifest
```

## Authors

- **Fabian Große** - *Initial work* - [Saphareas](https://github.com/Saphareas)

## License

This project, unless otherwise noted, is licensed under the GPLv3 License - see the [LICENSE](LICENSE) file for details.
