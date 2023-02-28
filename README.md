# Automated logins for stackoverflow
## What is this?
This is a little script to login automatically to StackOverflow every 24 hours. It's mostly for the badges you can earn because sometimes it can be very hard to remember to login on StackOverflow.

## Installation
1. Ensure that NodeJS is installed. Test it: <br> $ `node -v`<br>
If it returns a version number, NodeJS is installed. **If not, download NodeJS [here](https://nodejs.org/en/download/package-manager/)**
2. Clone the repository and navigate into it if git is installed:<br>
$ `git clone https://github.com/arellak/stackoverflow_automated_login.git`<br>
If git is not installed, download the zip file [here](https://github.com/arellak/stackoverflow_automated_login/archive/master.zip) and extract it. Then go into the folder.
3. Install the dependencies:<br>
$ `npm install`
4. Change the name of `config.template.json` to `config.json`.
5. Input your credentials into the new `config.json`.
6. Start the script:<br>
$ `npm run start`