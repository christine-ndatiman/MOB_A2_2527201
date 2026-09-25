My name is NDATIMANA Christine.

# NCPortfolio

## Student information

- **Full name:** NDATIMANA Christine
- **Registration number:** 25/27201
- **App name:** NCPortfolio
- **Verification code:** MOB-A2-7201
- **Course:** SWE 3409 - Mobile Application Development
- **Institution:** INES Ruhengeri

## Purpose

NCPortfolio is a personal mobile portfolio application for the SWE 3409 Individual Assignment 2. It presents the student's profile, skills, education, and projects, and lets the student edit profile information.

## Main features

- Home screen with student identity, headline, biography, and verification code
- Skills and education or training screen
- Two project entries, each opening a separate Project Detail screen; the current project descriptions are placeholders
- Bottom-tab navigation and nested project-detail navigation
- Profile editor with validation messages shown beside fields that need attention
- Local profile persistence using AsyncStorage
- Profile image selection from the gallery or camera, with preview, replace, and remove actions
- About screen with application and release information
- Core portfolio functionality is designed to work offline without remote data or image services

## Technology stack

- React Native
- Expo SDK 57
- TypeScript
- React Navigation
- AsyncStorage
- Expo Image Picker
- Expo Font
- Ionicons from `@expo/vector-icons`
- EAS Build

**Android package:** `rw.ac.ines.ug2527201.ncportfolio`

## Project structure

- `src/` - application screens, components, profile context, data, and types
- `assets/` - application icon assets
- `docs/MOB_A2_2527201_UIUX.pdf` - UI/UX documentation
- `evidence/MOB_A2_2527201_TEST_LOG.pdf` - assignment test log
- `evidence/MOB_A2_2527201_DECLARATION.pdf` - assignment declaration
- `evidence/AI_USE.md` - AI use statement
- `app.json` - Expo application configuration
- `eas.json` - EAS Build profiles

## Setup and development

Run commands from the project folder. Install dependencies and start the app in Expo Go:

```cmd
npm.cmd install
npx.cmd expo start --go
```

## TypeScript and Expo validation

Run these checks from the project folder:

```cmd
npx.cmd tsc --noEmit
npx.cmd expo-doctor
```

TypeScript passed. The latest Expo Doctor run reported 20/21 checks because the installed Expo version (`57.0.27`) does not match the version currently expected by the installed SDK (`~57.0.28`). Resolve this version mismatch and rerun Expo Doctor before submission.

## Testing status

Development functionality has been tested successfully in Expo Go. Final standalone APK installation and final APK Airplane Mode testing are pending until the EAS build is available. No physical-device APK installation or APK testing is claimed here.

## Android preview build

After signing in to EAS, build the Android preview APK with:

```cmd
eas.cmd build -p android --profile preview
```

## Documentation

- [UI/UX documentation](docs/MOB_A2_2527201_UIUX.pdf)
- [Test log](evidence/MOB_A2_2527201_TEST_LOG.pdf)
- [Declaration](evidence/MOB_A2_2527201_DECLARATION.pdf)
- [AI use statement](evidence/AI_USE.md)

## GitHub release

- **Release tag:** `v1.0.0`
- **APK filename:** `MOB_A2_2527201.apk`
- **Demo video filename:** `MOB_A2_2527201_DEMO.mp4`
- **Release URL:** pending
- **APK URL:** pending

No release links are available yet. The standalone APK build and release evidence are pending. A GitHub release will not be created until the final APK is available.

## Limitations

The skill descriptions, biography, headline, and project entries in the app are placeholders and need Christine's genuine details before they can be presented as personal experience. Expo Doctor currently reports one Expo package version mismatch. The final standalone APK build, APK installation, APK Airplane Mode test, and associated release evidence remain pending.