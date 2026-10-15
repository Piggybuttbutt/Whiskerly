// Applies Whiskerly branding, permissions and version numbers to the generated Android project.
const fs = require("fs");
const path = require("path");
const A = "android/app/src/main";

const copyDir = (s, d) => {
  fs.mkdirSync(d, { recursive: true });
  for (const f of fs.readdirSync(s)) {
    const sp = path.join(s, f), dp = path.join(d, f);
    fs.statSync(sp).isDirectory() ? copyDir(sp, dp) : fs.copyFileSync(sp, dp);
  }
};
const removeSplash = d => {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) removeSplash(p);
    else if (f === "splash.png") fs.unlinkSync(p);
  }
};

// Icons, notification icon and launch screen
removeSplash(path.join(A, "res"));
copyDir("android-extras/res", path.join(A, "res"));

// Permissions for reminders
const mf = path.join(A, "AndroidManifest.xml");
let m = fs.readFileSync(mf, "utf8");
const perms = [
  "android.permission.POST_NOTIFICATIONS",
  "android.permission.SCHEDULE_EXACT_ALARM",
  "android.permission.RECEIVE_BOOT_COMPLETED",
  "android.permission.WAKE_LOCK",
  "android.permission.VIBRATE"
];
const add = perms.filter(p => !m.includes(p)).map(p => `    <uses-permission android:name="${p}" />`).join("\n");
if (add) m = m.replace("<application", add.trimStart() + "\n\n    <application");
fs.writeFileSync(mf, m);

// Black status and navigation bars
const sf = path.join(A, "res/values/styles.xml");
let st = fs.readFileSync(sf, "utf8");
st = st.replace(/(<style name="AppTheme\.NoActionBar"[^>]*>)/, `$1
        <item name="android:statusBarColor">#1b1520</item>
        <item name="android:navigationBarColor">#1b1520</item>
        <item name="android:windowLightStatusBar">false</item>`);
fs.writeFileSync(sf, st);

// Version number goes up with every build, so updates install cleanly
const gf = "android/app/build.gradle";
const n = parseInt(process.env.RUN_NUMBER || "1", 10);
let g = fs.readFileSync(gf, "utf8");
g = g.replace(/versionCode \d+/, `versionCode ${n}`).replace(/versionName "[^"]*"/, `versionName "1.0.${n}"`);
fs.writeFileSync(gf, g);

console.log(`Configured Whiskerly 1.0.${n}`);
