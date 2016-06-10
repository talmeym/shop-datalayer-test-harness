# shop-datalayer-test-harness

a test harness to allow testing of data layer calls to sitecat. 

uses [regurgitator](http://github.com/talmeym/regurgitator-all) to host the app.

instructions:

- clone, mvn clean install
- deploy resulting war on context / in a tomcat
- visit http://[harness-url]/index.html to simulate datalayer activity.
- click on "Site Cat Call" button to visit /result to see sitecat call attributes. 
