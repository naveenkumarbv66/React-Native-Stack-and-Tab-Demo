## ExpoNavigation

A React Native application bootstrapped with Expo and organized using Expo Router. It demonstrates nested navigation via tabs, stacks, and linkable screens under the `app/` directory.

### Features
- **Expo Router** with `tabs`, `stacks`, `link` group, and `dynamic routes`
- Cross‑platform: iOS, Android, and Web
- Optimized Metro bundling for web
- Dynamic routing with parameter passing

### Requirements
- Node.js LTS (recommended)
- npm (or yarn/pnpm)
- iOS: Xcode + iOS Simulator (macOS)
- Android: Android Studio + Android Emulator
- Web: Modern browser

### Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server (choose one):
   ```bash
   npm run start
   npm run ios
   npm run android
   npm run web
   ```

When the Expo Dev Tools open, press the platform button (iOS/Android/Web) or use the CLI prompts.

### Available Scripts
Scripts are defined in `package.json`:
- `start`: Starts the Expo dev server
- `ios`: Starts the dev server and opens the iOS simulator
- `android`: Starts the dev server and opens the Android emulator
- `web`: Starts the dev server for web

### Project Structure
```
app/
  (dynamicRoutes)/
    _layout.tsx
    [name].tsx
    index.tsx
  (link)/
    forgotPasswordScreen.jsx
    index.jsx
    registerScreen.jsx
  (stack)/
    _layout.tsx
    index.jsx
    screenFour.jsx
    screenOne.jsx
    screenThree.jsx
    screenTwo.jsx
  (tab)/
    _layout.jsx
    index.jsx
    tabOne.jsx
    tabThree.jsx
    tabTwo.jsx
  +not-found.tsx
  index.jsx
assets/
```

Key points:
- `app/index.jsx`: Root route.
- `app/(tab)/_layout.jsx`: Declares a tab navigator and tab screens.
- `app/(stack)/_layout.tsx`: Declares a stack navigator and its screens.
- `app/(dynamicRoutes)/_layout.tsx`: Declares a stack navigator for dynamic routes.
- `app/(dynamicRoutes)/[name].tsx`: Dynamic route that accepts a `name` parameter.
- `app/(dynamicRoutes)/index.tsx`: Entry point for dynamic routes with navigation examples.
- `app/(link)/*`: Simple linkable screens (e.g., login/register/forgot password flows).
- `app/+not-found.tsx`: 404 route for unmatched paths.

### Dynamic Routes
The app includes dynamic routing capabilities that allow passing parameters through URLs:

#### Implementation
- **`app/(dynamicRoutes)/[name].tsx`**: A dynamic route that accepts a `name` parameter
- **`app/(dynamicRoutes)/index.tsx`**: Entry point with navigation examples
- **`app/(dynamicRoutes)/_layout.tsx`**: Stack navigator configuration for dynamic routes

#### Usage Examples
```typescript
// Direct URL navigation
<Link href="/Kumar">Pass String (Kumar)</Link>

// Object-based navigation with parameters
<Link href={{
    pathname: '/[name]',
    params: { name: 'Naveen' },
}}>Pass String (Naveen)</Link>
```

#### Parameter Access
In the dynamic route component, access parameters using `useLocalSearchParams()`:
```typescript
import { useLocalSearchParams } from 'expo-router';

const { name } = useLocalSearchParams();
```

### Navigation & Deep Linking
This project uses Expo Router (see `app.json` → `plugins: ["expo-router"]`). The configured scheme is `ExpoNavigation`, which enables deep linking such as:

```text
ExpoNavigation://
```

For more on file‑based routing, see Expo Router docs.

### Configuration
- Entry point: `expo-router/entry` (defined in `package.json` → `main`)
- App metadata: `app.json`
- TypeScript support: `tsconfig.json` present with `typescript` dev dependency

### Tech Stack
- Expo `~54`
- Expo Router `~6`
- React `19`
- React Native `0.81`

### Troubleshooting
- Stuck bundler or stale cache:
  ```bash
  rm -rf node_modules && npm install
  npx expo start -c
  ```
- iOS simulator not launching: Ensure Xcode and Command Line Tools are installed, and an iOS Simulator device is available.
- Android emulator not launching: Open Android Studio > Device Manager, start a virtual device, then run `npm run android`.

### Useful Links
- Expo: `https://docs.expo.dev/`
- Expo Router: `https://expo.dev/router`
- React Native: `https://reactnative.dev/`

---
If you run into issues, please include your OS, Node version, device/emulator, and error logs when reporting.


