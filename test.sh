#!/bin/bash
set -e

SELENIUM_VERSION="2.42.2"

function start_selenium {
	sudo start xvfb
	wget "http://selenium.googlecode.com/files/selenium-server-standalone-$SELENIUM_VERSION.jar" --quiet
	java -jar "selenium-server-standalone.$SELENIUM_VERSION.jar" > /dev/null 2>&1 &
}

start_selenium
./grailsw test-app functional:
