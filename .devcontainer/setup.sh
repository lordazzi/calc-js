#bin/bash

cd ..;

echo "Github name:"
read githubnome

echo "Github e-mail:"
read githubemail

echo "With no spaces, write a label to ssh key:"
read sshnome

mkdir .ssh

ssh-keygen -t ed25519 -C $sshnome -f ".ssh/id_ed25519"

echo "[user]
    email = $githubemail
    name = $githubnome

[core]
    editor = code --wait

[safe]
    directory = /calc-js" > .gitconfig

echo "now paste the content of .ssh/id_ed25519.pub into https://github.com/settings/ssh/new"