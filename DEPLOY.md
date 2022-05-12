## Proccess to follow while deploy to new EC2 Instance

1. Start new EC-3 instance and downlod the key file in your computer
2. Select your instance from deshboard and click security group
3. Add inbound rule to allow All Traffic(ipv4)
4. Open your terminal and navigate where you have downloaded your pem file and run

```bash
ssh -i your_file_name.pem ec2-user@<-- YOUR INSTANCE PUBLIC IP -->
# Example
ssh -i Eather_Server_3.pem ec2-user@52.66.143.30
# If it throws error try running
chmod 400 Eather_Server_3.pem
```

By now you should have connection with your instance

## Configure your instance

1. Install git

```bash
sudo yum install git -y
```

2. Clone your repo

```bash
git clone https://github.com/----YOUR_REPO_LOCATION---.git
```

3. Install NVM and configure (run the commands)

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
# Export nvm path
. ~/.nvm/nvm.sh
```

4. Install Node (for avoiding node issues make sure you install node version that you used in local development )

```
 nvm install v16.13.0
```

5. Now(if you have) you need to add your .env or secret files (that are need to run the server)

```bash
touch .env
# open using vim
vim .env
# vim insert mode
i
# copy and paste from your local file in terminal
:x
# vim save and exit
```

6. Start your server

```bash
# Install packages 
yarn install
# Start your server
yarn (or) npm start
```

## Firewall configuration (for http access)

1. Install package

```bash
# System config
sudo yum install system-config-firewall
# httpd
sudo yum install httpd
# start the service
sudo service httpd start
```

## Common Errors

1. Reached heap limit Allocation failed - JavaScript heap out of memory

```bash
export NODE_OPTIONS="--max-old-space-size=8192"
```
2. Access the server on http port

```http
http://3.110.130.198:4000/graphql
```