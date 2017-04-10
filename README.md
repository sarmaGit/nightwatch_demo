###System requirements:

1. node.js and npm
2. up-to-date chrome/firefox installed by default
3. java-jdk

###Install and how to use (quickway):
1. ```git clone https://github.com/sarmaGit/nightwatch_demo```
2. ```cd nightwatch_demo```
3. ```npm install -g nightwatch```
4. replace your nightwatch.json in ```C:\Users\[your_user]\AppData\Roaming\npm\node_modules\nightwatch\bin``` with cloned ```nightwatch_json\nightwatch.json```
5. ```nightwatch``` run all tests in default enviroment

```nightwatch [source] [option]```, omitting source and option will start default enviroment. 
You can run single test type ```nightwatch tests/sidekick.js``` or group ```nightwatch tests```.
To run parallel testing type ```nightwatch -e default,chrome```.
Read more about [cli argument](http://nightwatchjs.org/guide#running-tests).
