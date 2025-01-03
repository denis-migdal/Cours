#!/usr/bin/bash

set -x

# TODO: VM_DIR

VM_NAME="$1"
VM_DIR=~/Data/ # ~/scratch/?
VM_RAM="4096"
VM_DISK="8192"
VM_DISK_PATH="$VM_DIR/$VM_NAME/${VM_NAME}_DISK.vdi"
VM_NB_CPU=4

# VM

VBoxManage unregistervm "$VM_NAME" --delete
VBoxManage createvm --name "$VM_NAME" --ostype "Debian_64" --register --basefolder "$VM_DIR"

# CPU

VBoxManage modifyvm "$VM_NAME" --cpus "$VM_NB_CPU" --ioapic on

# GPU

VBoxManage modifyvm "$VM_NAME" --graphicscontroller vmsvga --vram 128

# RAM

VBoxManage modifyvm "$VM_NAME" --memory "$VM_RAM"

# Cartes réseaux

VBoxManage modifyvm "$VM_NAME" --nic1 nat
# Redirections de ports
VBoxManage modifyvm "$VM_NAME" --natpf1 "guestssh,tcp,127.0.1.1,8022,,22"

# Disque

## Dynamically allocated by default (--variant=Standard)
VBoxManage createmedium disk --format VDI --size "$VM_DISK" --filename "$VM_DISK_PATH"

VBoxManage storagectl "$VM_NAME" --name "SATA Controller" --add sata --controller IntelAhci       
VBoxManage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium "$VM_DISK_PATH"

# DVD (for .iso)

VBoxManage storagectl "$VM_NAME" --name "IDE Controller" --add ide