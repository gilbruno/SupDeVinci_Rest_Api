# Introduction

Follow these steps to install typescript

# Node

## Windows

To install Node Version Manager (NVM) and Node.js on Windows, you'll want to use nvm-windows, which is a dedicated version of NVM tailored for the Windows environment. Here's how to do it:


1. Install nvm-windows


    1.1 Install nvm-windows
Navigate to the nvm-windows GitHub repository's releases page or its official website. As of my last training data in September 2021, the official website was https://github.com/coreybutler/nvm-windows/releases.

    1.2 Download the latest nvm-setup.zip or nvm-setup.exe from the releases.

    1.3 Run the installer you downloaded. This will guide you through the installation process.

    1.4 After installation, restart your terminal or command prompt. To check if NVM is successfully installed, run:


    ```sh
    nvm version
    ```


2.  Install Node.js using 'nvm-windows'

    Now that you've installed nvm-windows, you can easily install Node.js:

    2.1 To see the available versions of Node.js, run:

    ```sh
    nvm list available
    ```

    2.2 <br>To install a specific version of Node.js, use the nvm install command followed by the version number. For example, to install Node.js version 14.17.0, you would run:

    ```sh
    nvm install 18.8.0 
    ```

    2.3 <br>After installation, you can set the installed version as the default using:

    ```sh
    nvm use 16.16.0 
    ```

    2.4 <br>Check the installed version of Node.js and npm:

    ```sh
    node -v
    ```

    2.5 <br>
    If you want to install another version of Node.js, simply repeat the nvm install command with the desired version. You can then switch between installed versions using the nvm use command.






