---
title: Installing Arch Hyprland and ML4W
editUrl: false
---

* Downloaded ArchLinux iso from ArchLinux website
* Downloaded Oracle Virtualbox with extensions and installed both
* Created a new VM
* Started VM, selected default medium install option, presented with root\@archiso prompt
* 2 options for installers: archinstall and archfi, I like archinstall
* ML4W MyLinuxForWork: <https://github.com/mylinuxforwork/dotfiles>

### archinstall

* archinstall
  * Language: English -> English (100%) ->
  * Mirrors: Mirror region -> Canada
  * Locales: keyb layout: us -> locale language: en\_CA -> Locale encoding: UTF-8
  * Disk config: Partitioning -> Use a best-effort default partition layout -> ATA Box -> btrfs (butterfs) -> use BTRFS subvolumes with a default structure? Yes. -> Would you like to use compression or disable CoW? Use compression. Note: Layout is now displayed, looks good -> Back
  * Disk Encryption: Encryption type -> None
  * Bootloader: Grub
  * Swap: True
  * Hostname: archvm0
  * Root password: ThankYou20
  * User account:  Add a user -> username: housecatvm -> password: letmein2024 -> be a superuser (sudo)? Yes. -> Confirm and exit
  * Profile: Type -> Minimal
  * Audio: No audio server (NOTE: Tried pipewire, kept crashing the install)
  * Kernels: linux
  * Additional packages: (none)
  * Network config: Copy ISO network configuration to installation
  * Timezone: America/Toronto
  * Automatic time sync (NTP): True
  * Optional repositories: git wget nano neovim htop powertop
  * Select: Install -> Enter key
* would you like to chroot into the newly created installation and... No
* exit
* Switched to Oracle VirturalBox Manager, selected the VM -> Settings -> Storage -> Controller: IDE -> Clicked ISO/disc then under Attributes clicked CD icon drop down -> Remove disc from virtual drive -> OK
* Back to VM, used command: shutdown -h now

### Install paru (pacman helper)

* Started VM from manager, selected Arch in VM (default option)
* install git: sudo pacman -S git
* install paru: git clone <https://aur.archlinux.org/paru.git>
* cd paru
* makepkg -si
* entered user password to install, selected 1, and Y, build takes 10 minutes or so, after build, enter user password again and Y prompt

### Install pipewire (outside of archinstall)

* Installed pipewire: sudo pacman -S pipewire pipewire-alsa
* Entered password and Y-prompt

### Install ML4W

* paru -S ml4w-hyprland
* Y and Y prompts
* ml4w-hyprland-setup
  * install required packages for ML4W dotfiles? Yes
* Downloads and installs huge amount of dependencies and packages, all automated. This takes a longer time.
* Diagnostic?: Yes
* Proceed? Yes
* ML4W dotfiles installed in \~/dotfiles? Yes
* Backup shellrc files? No
* Install KVM environment variables? Yes
* Install QEMU guest agent? Yes
* Install SDDM? Install sddm
* SDDM Theme: Install the sequoia theme? Yes
* Keyboard: Layout: us
* Are you using a laptop and would like to enable the laptop presets? Yes
* Replace .bashrc file with ML4W dotfiles? Yes
* Download additional wallpapers? Yes
* Do you want to install the ML4W dotfiles now? Yes
* Reboot? Yes.
* (Reboot happens)
* Select ArchLinux in grub
* SDDM is styled, logged-in with username/password above
* Presented with Options screen:
  * xdg-desktop-portal-gtk (Note: required for dark theme!)
  * switch browser to chromium, enter password, Y-prompt
  * Now use CANCEL
* Close ML4W Welcome, in waybar at the top right, click the ML4W icon, select Settings App -> System -> Monitor Variations -> Monitors -> 1920x1080.conf
* Power icon on waybar -> restart
* login using SDDM and username/password above
