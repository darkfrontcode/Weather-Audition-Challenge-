# Weather ( Audition/Challenge )

[Live Code & Running ( Stackblitz )](https://stackblitz.com/edit/vite-pt41rt?file=src/application/application.component.tsx)

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

### Troubleshooting

If you are facing for problems related to CORS on running this app it would be probably due to vite-server and stackblitz cross-origin issues.

Follows below a simple documentation about it that explains how you can solve this problem temporarily.

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
