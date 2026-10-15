# Whiskerly for Android

Your cat-narrated calendar, tasks and notes as a real Android app, with reminders that arrive even when the app is closed.

## Build it on GitHub

1. Sign in at github.com and create a new repository (the **+** menu, then **New repository**). Name it `whiskerly`. Private is fine.
2. On the new repository page, click **uploading an existing file**. Drag in **everything inside** this folder (not the folder itself), then click **Commit changes**.
3. Check that the file `.github/workflows/build-apk.yml` arrived. Some computers hide folders whose names start with a dot, so it may be missing. If it is, click **Add file > Create new file**, type `.github/workflows/build-apk.yml` as the name, paste in the contents of `WORKFLOW-COPY.yml`, and commit.
4. Open the **Actions** tab. A build starts automatically and takes about 5 to 8 minutes. A green tick means it worked.
5. On the repository's main page, open **Releases** on the right. The newest release has `Whiskerly.apk` attached.

## Install it on your phone

1. On your Android phone, open the repository in your browser (sign in to GitHub if it is private), go to **Releases**, and tap `Whiskerly.apk`.
2. Open the downloaded file. Android will ask you to allow installing apps from your browser. Allow it, then tap **Install**.
3. Open Whiskerly and allow notifications. Then tap **Enable alerts** on the Today screen. On newer phones this offers an "Alarms and reminders" setting: switch it on so reminders arrive exactly on time.

## Bring your data over

In the Claude version of Whiskerly, open **Backup** and tap **Copy**. In the phone app, open **Backup**, paste the code into the box, and tap **Import** twice. It's easiest to do this on your phone, with the Claude version open in the Claude app or your browser.

## Updating later

Replace `www/index.html` with a new version and commit. A fresh build and release appear automatically. Install the new APK over the old one and your data stays.

Use **Backup** now and then to keep a copy of your data somewhere safe. Uninstalling the app deletes its data.
