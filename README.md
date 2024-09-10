### Manushi Installation Guide
![image](https://github.com/user-attachments/assets/f977d218-6a8c-4c2f-924f-45f938716f2f)


### How to deploy to localhost
node server.js

npm run start

### Application
Welcome to the Manushi application! Below are the instructions to install Manushi on different Linux distributions using the provided package files.
Available Packages

    manushi_0.1.0_amd64.deb: For Debian-based distributions (Ubuntu, Debian, Pop!_OS, etc.)
    manushi-0.1.0-1.x86_64.rpm: For RPM-based distributions (Fedora, CentOS, RHEL, etc.)
    manushi_0.1.0_amd64.AppImage: A portable AppImage that works on most Linux distributions without installation.

### Installation Instructions
1. Debian-based Distributions (Ubuntu, Debian, Pop!_OS, etc.)

If you're using a Debian-based distribution, you can install the .deb package with the following steps:
Steps:

    Download the .deb package file: manushi_0.1.0_amd64.deb.

    Open your terminal and navigate to the folder containing the .deb file.

    Run the following command to install the package:

```bash
sudo dpkg -i manushi_0.1.0_amd64.deb
```

If there are any missing dependencies, resolve them with:

```bash
    sudo apt-get install -f
```

Once completed, you should be able to find and run the Manushi application from your application launcher.
2. RPM-based Distributions (Fedora, CentOS, RHEL, etc.)

If you're using an RPM-based distribution, you can install the .rpm package with the following steps:
Steps:

    Download the .rpm package file: manushi-0.1.0-1.x86_64.rpm.

    Open your terminal and navigate to the folder containing the .rpm file.

    Run the following command to install the package:

    For Fedora/RHEL/CentOS:

```bash
sudo rpm -i manushi-0.1.0-1.x86_64.rpm
```

For Fedora (with DNF):

```bash
sudo dnf install manushi-0.1.0-1.x86_64.rpm
```

If there are any missing dependencies, resolve them by running:

```bash
    sudo dnf install -y <missing_package>
```

Once installed, you should be able to launch the Manushi application from your application launcher.
3. AppImage (Universal Linux Package)

If you are using any Linux distribution and prefer a portable solution, you can use the .AppImage file.
Steps:

    Download the AppImage file: manushi_0.1.0_amd64.AppImage.

    Make the file executable by running the following command in your terminal:

```bash
chmod +x manushi_0.1.0_amd64.AppImage
```
To launch the application, run:

```bash
    ./manushi_0.1.0_amd64.AppImage
```
No installation is necessary. The AppImage runs as a self-contained application and does not modify your system.

### Uninstallation Instructions
For Debian-based Distributions:

To remove the installed .deb package:

```bash
sudo apt remove manushi
```
For RPM-based Distributions:

To remove the installed .rpm package:

```bash
sudo rpm -e manushi
```
For AppImage:

Simply delete the .AppImage file as no installation occurs.

<hr />


Team details, relevant links, tasks completed, tech stack, key features, and steps to run the project locally.

## Team Details

*Team Name:* Manushi

*Team Leader:* [@sumit-8305](https://github.com/sumit-8305) - Sumit

*Team Members:*

- *MEMBER_1* - 2023UEA6505 - [@chikoyeat](https://github.com/chikoyeat) - MANAV
- *MEMBER_2* - 2023UCB6541 - [@asim-sidiqi](https://github.com/asim-sidiqi) - Asim Ahmad Siddiqui
- *MEMBER_3* - 2023UEA6569 - [@Sattei](http://github.com/sattei) - Satyam Singh
- *MEMBER_4* - 2023UEA6571 - [@grizzleyyybear](https://github.com/grizzleyyybear) - Mrinal Sharma
- *MEMBER_5* - 2023UEA6536 - [@sumit-8305](https://github.com/sumit-8305) - Sumit
- *MEMBER_6* - 2023UCI6539 - [@rajashre-e](http://guthub.com/rajashre-e) - Rajashree Sengupta

Thank you for installing Manushi! If you encounter any issues, feel free to open a ticket in the repository or contact us for support.
