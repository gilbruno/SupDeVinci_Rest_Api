# Install SQLITE:

## Windows

1. Download SQLite:

   - Go to the SQLite download page at SQLite Download Page.
   - Under the “Precompiled Binaries for Windows” section, download the appropriate binaries for your system. For most users, the sqlite-tools-win32-x86-*.zip (or *-x64-*.zip for 64-bit) file will be sufficient. This contains the command-line interface (CLI) for SQLite that allows you to manage databases.

2. Extract the Files:

    - Once downloaded, extract the ZIP file to a directory on your computer that you can easily access. For example, you might extract it to C:\sqlite.

3. Add SQLite to Your PATH:

   - Adding SQLite to your PATH environment variable will allow you to access it from any command prompt or terminal window.
    - Right-click on 'This PC' or 'Computer' on the desktop or in File Explorer, and select 'Properties'.
   - Click on 'Advanced system settings'.
   - In the System Properties window, click the 'Environment Variables...' button.
   - In the Environment Variables window, under the 'System variables' section, find and select the 'Path' variable and click 'Edit...'.
   - In the 'Edit Environment Variable' window, click 'New' and add the path to the directory where you extracted SQLite (e.g., C:\sqlite).
   - Click 'OK' to close each of the open dialogs.

4. Verify Installation:

   - Open a command prompt window (you can search for cmd in the Start menu).
   - Type sqlite3 and press Enter. If SQLite is correctly installed and the path was set correctly, you should see the SQLite version and a command prompt like this: sqlite>. If you receive an error that sqlite3 is not recognized, restart your command prompt, and ensure that the path was entered correctly.

5. Using SQLite:

   - You can now use SQLite from the command line. For example, you can create a new SQLite database by typing sqlite3 mydatabase.db and pressing Enter. This will create a new SQLite database file named mydatabase.db and open the SQLite command-line interface for that database.

6. Install SQLite Extension in VSCode:

   - If you want to use SQLite within VSCode, don't forget to install the SQLite extension as well. Open VSCode, go to the Extensions view (Ctrl+Shift+X), search for SQLite, and install the extension.

Now you have SQLite installed on your Windows system and can start managing your databases.   

## Linux

### Ubuntu/Debian-based distributions

1. Update Package List:
Open a terminal and run the following command to make sure your package list is up to date:

```sh
sudo apt-get update
```

2. Install SQLite:
Install SQLite by executing the following command:

```sh
sudo apt-get install sqlite3 libsqlite3-dev
```

3. Verify Installation:
After the installation is complete, you can verify it by running:

```sh
sqlite3 --version
```
This command should return the installed version of SQLite.

### Fedora/Red Hat-based distributions:

1. Update Package List:

```sh
sudo dnf check-update
```

2. Install SQLite:

```sh
sudo dnf install sqlite sqlite-devel
```

3. Verify Installation:

```sh
sqlite3 --version
```

## MacOS

1. Install Homebrew:
If you don’t have Homebrew installed on your Mac, open the Terminal app and run the following command:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This command will download and install Homebrew on your machine.

2. Update Homebrew:
Before installing SQLite, it’s a good idea to make sure Homebrew is up to date. In the Terminal, run:

```sh
brew update
```

3. Install SQLite:
Now, you can install SQLite with Homebrew by running the following command:

```sh
brew install sqlite
```

Homebrew will download and install the SQLite database and its command-line interface.

4. Verify the Installation:
To ensure that SQLite is installed correctly, you can check its version by running:

```sh
sqlite3 --version
```

This command should return the version of SQLite that you have installed on your system.

5. Configure PATH (if necessary):
Homebrew typically handles the PATH configuration automatically, but if for some reason SQLite isn’t recognized, you may need to add it to your PATH manually. You can do this by adding the following line to your ~/.zshrc or ~/.bash_profile, depending on which shell you use (macOS Catalina and later use zsh by default):

```sh
export PATH="/usr/local/opt/sqlite/bin:$PATH"
```

After editing the file, apply the changes by running:

```sh
source ~/.zshrc
```

Or if you’re using bash:

```sh
source ~/.bash_profile
```

6. Restart Terminal:
After installation, it’s a good idea to close and reopen your Terminal to ensure all paths are updated and the _sqlite3_ command is recognized.

Once you have completed these steps, you should have SQLite installed and ready to use on your macOS system. You can begin using the sqlite3 command to interact with SQLite databases directly from your Terminal.
