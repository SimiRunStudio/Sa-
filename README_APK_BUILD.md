# Asmaron Supreme v19 — Android / APK-ready source

This package wraps the supplied React Native UI source in an Expo project configuration so it can be built for Android.

## Build a preview APK (recommended)

1. Install Node.js LTS and Git on a computer.
2. Extract this ZIP.
3. Open a terminal in this folder and run:

   ```bash
   npm install
   npx eas login
   npx eas build --platform android --profile preview
   ```

4. EAS will provide a build URL. Download the generated APK from that URL and install it on an Android device.

## Build locally (requires Android Studio + Android SDK)

```bash
npm install
npx expo prebuild --platform android
npx expo run:android
```

For a locally signed release APK, configure Android signing in the generated native Android project and build with Gradle.

## Scope and limitations

- This is a React Native UI project prepared for Android builds, not a prebuilt APK.
- The original UI source, references, feature matrix, schema and product documents are preserved.
- The original feature matrix lists 356 records. Those records are specifications/catalog entries; they do not mean all 356 features are implemented.
- Existing visible UI controls retain the behavior in the source. This packaging step does not add AI services, real voice recognition, backend accounts, sync, real rewards, or persistent feature implementations.
- No APK was generated in this environment because Android SDK/Gradle build tooling and EAS account authentication are not available here.
