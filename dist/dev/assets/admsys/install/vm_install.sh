#!/usr/bin/bash

VM_NAME="$1"

# TODO: preseed generate

declare -A args

shift # consume $1 (VM_NAME)
while [[ $# -gt 0 ]]; do

    if [[ "$fname" == "--headless" ]]; then
        HEADLESS="--type headless"
        shift
        continue
    fi

    args["$1"]="$2"
    shift
    shift
done

# TODO: default values...
# if [[ -n "${example_array["key1"]}" ]] 

# TODO...
ISO=~/Téléchargements/debian-12.8.0-amd64-DVD-1.iso
ADDON_ISO=~/Téléchargements/VBoxGuestAdditions_6.1.50.iso
PRESEED="${args['--preseed']}"

USER=zeus
USERFULL_NAME=Zeus
USER_PWD=1234
HOSTNAME="$VM_NAME"


# Install Debian

# used to patch iso
aux_base_path="$(mktemp -d --tmpdir unattended-install-XXXXX)"

VMREADY_SERVICE=$(cat <<- EOF
    [Unit]
    Description=VMReady
    After=sshd.target

    [Service]
    Type=simple
    User=root
    ExecStart=/usr/bin/VBoxControl guestproperty set VMReady true

    [Install]
    WantedBy=multi-user.target
EOF
)

POST_INSTALL=$(cat <<- CEOF
    echo "$VMREADY_SERVICE" > /target/etc/systemd/system/VMReady.service
    ln -s /etc/systemd/system/VMReady.service /target/etc/systemd/system/multi-user.target.wants/VMReady.service
CEOF
)

echo "$POST_INSTALL"


VBoxManage unattended install "$VM_NAME" --auxiliary-base-path "$aux_base_path"/ \
    --iso "$ISO" \
    --script-template="$PRESEED" \
    --install-additions --additions-iso="$ADDON_ISO" \
    --post-install-command="/target/bin/bash -c '$POST_INSTALL'" \
    --user="$USER" # required ?

# set in preseed template
# --user="$USER" --full-user-name="$USER" --password="$USER_PWD" --hostname="$HOSTNAME.localhost"

# POSTINSTALL="/tmp/debian_postinstall.sh"
# --post-install-template="$POSTINSTALL"
# todo: use post install cmd with bash -c "" instead

# Patch due to bug : https://superuser.com/questions/1453425/vboxmanage-unattended-installation-of-debian-ubuntu-waits-for-input
sed -i 's/^default vesa.*/default install/' "$aux_base_path"/isolinux-isolinux.cfg

# Start VM for install
VBoxManage startvm "$VM_NAME" $HEADLESS

# TODO: wait for shutdown
VBoxManage guestproperty wait "$VM_NAME" VMReady

rm -r "$aux_base_path"

# Brut... (can't detach non-headless)
VBoxManage controlvm "$VM_NAME" poweroff