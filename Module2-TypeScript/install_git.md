# Install Git:

## Windows

1. Download the Git Installer for Windows: Go to the official Git website at https://git-scm.com/ and click on the "Download for Windows" link.

2. Run the Installer: Once the download is complete, run the installer.

3. Installation Settings:

   - During installation, you can choose the default settings for most options. However, pay attention to the following settings:
      - Adjusting your PATH environment: Choose "Use Git from the Windows Command Prompt" or "Use Git and optional Unix tools from the Windows Command Prompt" (if you want Unix tools).
      - Choosing the default editor: If you're familiar with Vim, you can keep it. If not, you might prefer to choose another editor (like VSCode).
Continue and finish the installation.

Verify Installation: Open a command prompt or terminal and type:

```
git --version
```
This should display the version of Git you installed, confirming that the installation was successful.

# Configure GitHub in VSCode

1. Install Visual Studio Code: If you haven't already, download and install VSCode from https://code.visualstudio.com/.

2. In a terminal init a git local repo with the command 

```
git init
```

3. To test a commit/push

 - Create a test file index.js with some code
 - then "git add ." , then use the Commit/Push button to push the file

If you have the error : <br>  

```
Make sure you configure "user.name" and "user.email" in Git
```

Follow these steps : 


   - Open Command Prompt or Terminal: Depending on your OS, open your command line interface.

   - Configure Git User Name:

```bash
git config --global user.name "Your Name"
```

Replace "Your Name" with your actual name. This doesn’t have to be your real name; it can be any name you choose to associate with your commits (e.g., a username).

Configure Git User Email:

```bash
git config --global user.email "youremail@example.com"
```

Replace "youremail@example.com" with the email you've used for your GitHub account (or any other email you wish to use).

Verify the Configuration:
To ensure the values were set correctly, you can use the following commands:

```bash
git config --global user.name   # This will display the configured name
git config --global user.email  # This will display the configured email
```

Proceed with Your Operations: After setting up the name and email, you can proceed with your git add, git commit, and git push operations.
