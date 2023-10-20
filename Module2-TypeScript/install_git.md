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

2. Open VSCode and navigate to the Extensions view by clicking on the square icon in the sidebar or pressing Ctrl + Shift + X.

3. Search and Install the "GitHub Pull Requests and Issues" extension: This extension allows you to interact with GitHub directly from VSCode.

4. Restart VSCode after installing the extension.

5. Connect VSCode to GitHub:

   - Click on the source control icon in the sidebar (or press Ctrl + Shift + G).
   -You'll see a "Sign in to GitHub" option. Click on it.
    - Follow the prompts to authenticate with GitHub. This might involve getting a code from your browser and entering it in VSCode.

6. Configure Git inside VSCode:

   - Press Ctrl + , to open settings.
   - Search for "git" in the search bar. You can configure various Git settings from here, like enabling auto-fetch or setting your default commit message.


7. Clone Repositories & Work:

    - To clone a repository, press F1, type Git: Clone, and then paste the URL of the GitHub repository.
   - Make your changes, stage, commit, and push/pull—all directly from VSCode!

   
That's it! Now you have Git installed on Windows and GitHub integrated with your Visual Studio Code. Happy coding!