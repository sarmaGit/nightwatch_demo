h1 System requirements:
1. node.js and npm
2. up-to-date chrome/firefox installed by default
***
h2 How to use:
1. ```git clone https://github.com/sarmaGit/nightwatch_demo```
2. ```cd nightwatch_demo```
3. ```npm install -g nightwatch```
4. ```nightwatch``` run default enviroment
5. find your 
***
```nightwatch [source] [option]```, omitting source and option will start default enviroment. 
You can run single test type ```nightwatch tests/sidekick.js``` or group ```nightwatch tests```.
To run parallel testing type ```nightwatch -e default,chrome```.
Read more about [cli argument](http://nightwatchjs.org/guide#running-tests).
