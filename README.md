# shop-datalayer-test-harness

a test harness to allow testing of data layer calls to sitecat. 

uses [regurgitator](http://github.com/talmeym/regurgitator-all) to host the app.

instructions:

- clone, mvn clean install
- deploy resulting war on context / in a tomcat
- map url "datalayer-test-harness" to localhost in hosts file.
- goto http://datalayer-test-harness:[port]/index.html to simulate datalayer activity.
- click on "Site Cat Call" button or visit /result to see sitecat call attributes. 
