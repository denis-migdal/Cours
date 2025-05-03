<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf8"/>
        <title>Fiche (AdminSys)</title>
        <meta name="color-scheme" content="dark light">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link   href="/skeleton/index.css"  rel="stylesheet">
        <script  src="/skeleton/index.js"  type="module"     blocking="render" async></script>
    </head>
    <body>
        <main>

# Construire ASTerm

Cette fiche détaille le processus de création de ASTerm utilisé dans le cadre des TP.

! correct version in UCA session !

1. Copier ASTerm + install dans ~/scratch/public/S2_AdmSys/ (besoin d'un zip...)
2. Need debian & vbox guest addons iso 
3. ASTerm_create.sh
   1. Créer la VM (vm_create.sh)
   2. Créer le fichier de configuration preseed (preseed_create.sh)
   3. Installer la VM (vm_install.sh) - missing .iso
4. Distribuer la VM (ASTerm.install)
postinstall ???

## Notes:

Preseed => SSH connexion (minimal system, network, SSH)
Then configure over ssh

- doc dirs
  - https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s13.html
- GIT ETC
  - https://unix.stackexchange.com/questions/401126/run-a-command-before-after-ubuntu-apt-upgrade-unattended-upgrades
  - https://stackoverflow.com/questions/61512209/how-do-i-create-a-git-repo-from-multiple-directories
- preseed
  - https://wiki.debian.org/DebianInstaller/Preseed#Loading_the_preseeding_file_from_a_webserver
  - https://www.debian.org/releases/stable/i386/apbs02.en.html
  - https://d-i.debian.org/doc/installation-guide/en.amd64/apbs03.html
  - https://overcomputing.net/index.php/preseed-installation/
- preseed partitions
  - https://serverfault.com/questions/953322/preseed-automatic-partitioning
  - https://www.bishnet.net/tim/blog/2015/01/29/understanding-partman-autoexpert_recipe/
- disk encryption
  - https://www.linuxjournal.com/content/preseeding-full-disk-encryption
- ISO (7z to extract)
  - https://wiki.debian.org/DebianInstaller/Preseed/EditIso
  - https://stackoverflow.com/questions/17817673/7zip-iso-extraction
  - https://fr.linuxadictos.com/comment-extraire-des-fichiers-d%27une-image-iso.html
  - https://askubuntu.com/questions/136165/how-to-create-an-iso-image-from-a-bunch-of-files-on-the-file-system
  - https://stackoverflow.com/questions/31831268/genisoimage-and-uefi/75688552#75688552
  - https://linux.die.net/man/8/mkisofs
- mount
  - https://doc.ubuntu-fr.org/fuseiso
- disable root
  - https://unix.stackexchange.com/questions/383301/should-i-disable-the-root-account-on-my-debian-pc-for-security
## Création de la VM

Afin de créer automatiquement la VM, la commande <script type="c-bash">vboxmanage</script> est utilisée :

<script type="c-bash">
#!/usr/bin/bash

set -x

VM_NAME=ASTerm
VM_DIR=~/Data/ # ~/scratch/?
VM_RAM="4096"
VM_DISK="8192"
VM_DISK_PATH="$VM_DIR/$VM_NAME/${VM_NAME}_DISK.vdi"
VM_NB_CPU=4
VM_NETWORK=vboxnet0

# VM

VBoxManage createvm --name "$VM_NAME" --ostype "Debian_64" --register --basefolder "$VM_DIR"

# CPU

VBoxManage modifyvm $VM_NAME --cpus $VM_NB_CPU --ioapic on

# GPU

VBoxManage modifyvm $VM_NAME --graphicscontroller vmsvga --vram 128

# RAM

VBoxManage modifyvm $VM_NAME --memory $VM_RAM

# Cartes réseaux

VBoxManage modifyvm $VM_NAME --nic1 nat
VBoxManage modifyvm $VM_NAME --nic2 hostonly --hostonlyadapter2 $VM_NETWORK

# Disque

## Dynamically allocated by default (--variant=Standard)
VBoxManage createmedium disk --format VDI --size $VM_DISK --filename "$VM_DISK_PATH"

VBoxManage storagectl $VM_NAME --name "SATA Controller" --add sata --controller IntelAhci       
VBoxManage storageattach $VM_NAME --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium "$VM_DISK_PATH"

# DVD (for .iso)

VBoxManage storagectl $VM_NAME --name "IDE Controller" --add ide
</script>

## Installation de Debian

### .iso

Télécharger le .iso de la dernière version de Debian via [le site de Debian](https://cdimage.debian.org/debian-cd/current/amd64/iso-dvd/).

💡 L'iso est déjà téléchargé sur les postes de travail UCA.


Télécharger l'iso des addons invités via [le site de VirtualBox](https://download.virtualbox.org/virtualbox).

### preseed

Indiquer les options pour l'installation de Linux.

Par défaut fichier <script type="c-text">/usr/share/virtualbox/UnattendedTemplates/debian_preseed.cfg</script>.

Générer le fichier à partir d'un système existant (doit avoir été redémarré après installation):

<script type="c-bash">
    FILE="/tmp/preseed"
    echo "#_preseed_V1" > $FILE
    debconf-get-selections --installer >> $FILE
    # In the list of debconf questions you posted, each question with a comment
    # "for internal use" without "can be preseeded" should not be preseeded.
    #debconf-get-selections >> $FILE
    # debconf-set-selections -c preseed.cfg # check
</script>

⚠ Nécessite le paquet <script type="c-text">debconf-utils</script>

⚠ Va aussi copier des informations sensibles (e.g. mots de passes).

https://www.debian.org/releases/stable/s390x/apbs04.fr.html

💡 Fichier preseed dispo in assets (todo link)

### Installation

<script type="c-bash">
#!/usr/bin/bash

VM_NAME=ASTerm
ISO=~/Téléchargements/debian-*-amd64-DVD-1.iso
ADDON_ISO=~/Téléchargements/VBoxGuestAdditions_6.1.50.iso

USER=zeus
USERFULL_NAME=Zeus
USER_PWD=1234
HOSTNAME="$VM_NAME"

PRESEED="/tmp/debian_preseed.cfg"
POSTINSTALL="/tmp/debian_postinstall.sh"

# Install Debian

aux_base_path="$(mktemp -d --tmpdir unattended-install-XXXXX)"

VBoxManage unattended install "$VM_NAME" --iso $ISO --user=$USER --full-user-name="$USER" --password=$USER_PWD --hostname=$HOSTNAME.localhost --install-additions --additions-iso=$ADDON_ISO --time-zone=Europe/Paris --country="FR" --locale="fr_FR" --language=fr_FR  --auxiliary-base-path "$aux_base_path"/ --script-template="$PRESEED" --post-install-template="$POSTINSTALL"

# Patch due to bug : https://superuser.com/questions/1453425/vboxmanage-unattended-installation-of-debian-ubuntu-waits-for-input

sed -i 's/^default vesa.*/default install/' "$aux_base_path"/isolinux-isolinux.cfg

# Start VM for install
VBoxManage startvm $VM_NAME
# --type headless
</script>

## CMD

Cf assets

=> config....

#!/usr/bin/bash

apt update
apt install lsd tldr gdu micro trash-cli pipx

# browsr ?
pipx install browsr

https_proxy="http://proxyau.iut.uca.fr:8080/" tldr -u #root et user ?

# bashrc :
echo >> ~/.bashrc << EOF
alias ls="lsd --header"
export HISTTIMEFORMAT="[%F %T] "
INVITE_COLOR=32
export PS1='\[\e[${INVITE_COLOR}m\]╭[\t]-[\[\e[1m\]\h\[\e[22m\]]-[\[\e[1;34>
╰[\[\e[1m\] \u\[\e[22m\]]\$ \[\e[0m\]'

EOF

#lsd config...

https://wiki.debian.org/DebianInstaller/Preseed/EditIso

https://wiki.debian.org/DebianInstaller/Preseed#Loading_the_preseeding_file_from_a_webserver

https://overcomputing.net/index.php/preseed-installation/

+ port forwarding
+ preseed iso
+ patch iso
+ initial_install/ 

</main>
    </body>
</html>