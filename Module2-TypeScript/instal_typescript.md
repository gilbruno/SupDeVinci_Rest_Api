# Installation Guide for NVM and Node.js

## MacOS & Linux:

### Install NVM:

1. Open your terminal.
2. Install NVM using the following `curl` command:

   ```sh
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
   ```

   _Note: Always refer to the [official NVM repository](https://github.com/nvm-sh/nvm) for the latest version and installation script._

3. Restart your terminal or run:

   ```sh
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
   ```

### Install Node.js:

1. Once NVM is installed, you can install Node.js by running:

   ```sh
   nvm install node
   ```

2. To use the installed version, run:

   ```sh
   nvm use node
   ```

## Windows:

### Install NVM:

1. For Windows, there's a separate project called 'nvm-windows'. First, you should uninstall any existing versions of Node.js before proceeding.
2. Download the installer from [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
3. Run the installer.
4. Follow the on-screen instructions.

### Install Node.js:

1. Open the command prompt or PowerShell.
2. Install Node.js using:

   ```sh
   nvm install latest
   ```

3. To switch to the installed version:

   ```sh
   nvm use <version>
   ```

   Replace `<version>` with the version number you installed.

---

Remember, it's important to always refer to the official repositories or websites for the most up-to-date instructions and versions:

- NVM: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- NVM-Windows: [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

<br><br>


# Installing Visual Studio Code (VS Code)

Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux, and macOS. Below are the installation instructions for these platforms:

## 1. MacOS

### Prerequisites:
- A Mac running macOS 10.10 (Yosemite) or later.

### Steps:
1. Go to the [official VS Code download page](https://code.visualstudio.com/Download).
2. Click on the **Mac** download link.
3. Once the `.zip` file is downloaded, unzip it.
4. Drag `Visual Studio Code.app` to the `Applications` folder, making it available in the Launchpad.
5. To launch VS Code, open Launchpad and click on the Visual Studio Code icon.

*Optional*: Add to the Dock by right-clicking on the icon in the Dock and choosing `Options > Keep in Dock`.

## 2. Windows

### Prerequisites:
- A computer running Windows 7 or later.

### Steps:
1. Go to the [official VS Code download page](https://code.visualstudio.com/Download).
2. Click on the **Windows** download link.
3. Once the `.exe` file is downloaded, run the installer.
4. Follow the prompts to complete the installation.
5. Once installed, launch VS Code by searching for it or by clicking on its icon on the Desktop.

## 3. Linux (Debian/Ubuntu)

### Prerequisites:
- A Debian or Ubuntu-based Linux distribution.

### Steps:
1. Update packages and install dependencies:
   
   ```bash
   sudo apt update
   sudo apt install software-properties-common apt-transport-https wget


2. Import the Microsoft GPG key:

```sh
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
```

3. Add the Visual Studio Code repository:

```sh
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
```

4. Install Visual Studio Code:


```sh
sudo apt update
sudo apt install code
```

# Installing TypeScript locally

1. Init _NPM_

```sh
npm init -y
```

2. Install TS package 

```sh
npm install --save-dev typescript
```

3. Create ts.config

```sh
npx tsconfig.json
```

By default, ts files must be in _src_ dir according to _tsconfig.json_

4. Update _package.json_

in _scripts_, add : 

```json
"build": "npx tsc"
```

5. Create a TS test file


6. Compile it


```json
npm run build
```

The Js file created is visible in the _dist_ dir according to _tsconfig_ file 









