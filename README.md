
<h1 align="center">
  <br>
  Cybercode Online Member Tracker
  <br>
</h1>

<h4 align="center">A Node.JS HTML parser for tracking a gang's member's contributions and stats in CyberCode Online</h4>

<p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/HBarcus/cybercode-online-member-tracker

# Go into the repository
$ cd cybercode-online-member-tracker

# Install dependencies
$ npm install
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

After cloning the repository go to [CyberCode Online](https://cybercodeonline.com/) and navigate to your gang's page. Copy the page's source code by right clicking -> view page source -> Ctrl+A -> Ctrl+C

Paste the copied text into the pastedhtml.html file included in the repository by opening the file then presing Ctrl+A->Ctrl+C

```bash
# Run the app
$ node index.js
```

Your generated .csv and .excel file will be inside of the repositories root folder and named GangData.csv and and GangData.xlsx

## Credits

Author:
[Heath Barcus](https://github.com/HBarcus)

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [CSV to XLSX](https://www.npmjs.com/package/@aternus/csv-to-xlsx?activeTab=dependencies)

## License

MIT
