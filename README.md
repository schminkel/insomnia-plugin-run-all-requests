[![Version](https://img.shields.io/badge/npmjs-1.0.1-red)](https://www.npmjs.com/package/insomnia-plugin-run-all-requests)
[![Version](https://img.shields.io/badge/Insomnia_Plugin_Hub-1.0.1-purple)](https://insomnia.rest/plugins/insomnia-plugin-run-all-requests)
[![Version](https://img.shields.io/badge/Github-1.0.1-black)](https://github.com/schminkel/insomnia-plugin-run-all-requests)
![GitHub Repo stars](https://img.shields.io/github/stars/schminkel/insomnia-plugin-run-all-requests)

﻿If you like this plugin, [leave it a :star: on Github!](https://github.com/schminkel/insomnia-plugin-run-all-requests)

# Insomnia plugin: insomnia-plugin-run-all-requests

<img src="/assets/icon.png" width="150" height="150">

Insomnia plugin that provides the action 'Run All Requests' on a folder that contains requests.

This allows you to easily run all requests in a given folder, and see the results (http response code, response time, etc) in a list with a single click.

In addition, the plugin validates the response code of each request, and displays a warning if any of the request results do not match the expected response code.
To configure the expected response code, add the response code to the request name in brackets, e.g. `Get User [200]`.
If the response code of the request does not match the expected response code from the name, the request will be marked with 'Failed' in the list.

## Action on request folder

![Action on the folder](/assets/action-on-folder.png)

## 'Run All Requests' Overview / Result / Validation Modal

![List of requests to run](/assets/overview-result-request-list.png)

## Plugin Installation

Go to `Application -> Preferences -> Plugins` and enter `insomnia-plugin-run-all-requests` in the `npm package name` field and click on the button `Install Plugin`.

This will download and install the plugin. After installation, you will see the plugin in the list of installed plugins
and the action "Run All Requests" will be available in the context menu of a folder, no restart required.

![Installation](/assets/installation.png)

## Compatibility

- Tested with Insomnia v2023.5.8 [(download here)](https://github.com/schminkel/insomnia_2023.5.8/releases/tag/v2023.5.8.1)
