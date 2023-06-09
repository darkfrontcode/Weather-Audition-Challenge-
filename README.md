# Weather ( Audition/Challenge )

[Live Code & Running ( Stackblitz )](https://stackblitz.com/edit/vite-pt41rt?file=src/application/application.component.tsx)
<br />
[Github Repo](https://github.com/darkfrontcode/Weather-Audition-Challenge-)

### Screenshots

<p align="center">
	<img src="https://github.com/darkfrontcode/Weather-Audition-Challenge-/blob/main/screenshots/greetings.png">
	</br>
	<img src="https://github.com/darkfrontcode/Weather-Audition-Challenge-/blob/main/screenshots/fetching.png">
	</br>
	<img src="https://github.com/darkfrontcode/Weather-Audition-Challenge-/blob/main/screenshots/weather-forecast.png">
  </br>
	<img src="https://github.com/darkfrontcode/Weather-Audition-Challenge-/blob/main/screenshots/address-not-found.png">
  </br>
	<img src="https://github.com/darkfrontcode/Weather-Audition-Challenge-/blob/main/screenshots/bad-request.png">
</p>

### Instructions

Stackblitz:

[Live Code & Running ( Stackblitz )](https://stackblitz.com/edit/vite-pt41rt?file=src/application/application.component.tsx)

On the Stackblitz panel, after all npm tasks are finished, go to the "Open in New Tab" option on the "top-right" corner of the screen to run the application in a fully dedicated screen unplugged from the editor.

<p align="center">
	<img src="https://github.com/darkfrontcode/Weather-Audition-Challenge-/blob/main/screenshots/unplugged.png">
</p>

Package Scripts:

- start: Run all unit testing and start vite server in dev mode.
- test: Run jest watch mode.

### Troubleshooting

If you are facing problems related to CORS on running this app it would be probably due to vite-server and stackblitz cross-origin issues.

Below is a simple documentation about it that explains how you can solve this problem temporarily.

[What is CORS? ( DOC )](https://simplelocalize.io/blog/posts/what-is-cors/)

The easiest way though is to open a new chrome instance with CORS disabled as follows:

```
# Windows
chrome.exe --user-data-dir="C://chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials

# macOS
open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials

# Linux
google-chrome --user-data-dir="~/chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials
```
