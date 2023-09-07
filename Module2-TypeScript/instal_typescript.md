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
```
