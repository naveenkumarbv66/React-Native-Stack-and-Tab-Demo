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

### React Hooks Demo

This project demonstrates the usage of three important React hooks in the context of React Native and Expo Router:

#### useEffect Hook

**Definition**: `useEffect` is a React hook that lets you perform side effects in functional components. It's equivalent to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined in class components.

**When to Use**:
- Data fetching from APIs
- Setting up subscriptions or timers
- Manually changing the DOM
- Cleanup operations
- Navigation options configuration

**Example from Project**:
```javascript
import { useEffect } from 'react';
import { useNavigation } from 'expo-router';

const MyComponent = () => {
    const navigation = useNavigation();
    
    useEffect(() => {
        // Configure navigation options when component mounts
        navigation.setOptions({ headerShown: false });
    }, [navigation]); // Dependency array ensures effect runs when navigation changes
    
    return <View>...</View>;
};
```

**Use Cases**:
- **Component Mount**: Run code when component first renders
- **Dependency Updates**: Re-run effect when specific values change
- **Cleanup**: Return a cleanup function to prevent memory leaks
- **Navigation Configuration**: Dynamically set navigation options

#### useNavigation Hook

**Definition**: `useNavigation` is an Expo Router hook that provides access to the navigation object, allowing you to programmatically control navigation behavior and access navigation state.

**When to Use**:
- Programmatic navigation control
- Accessing navigation state
- Setting navigation options dynamically
- Listening to navigation events
- Custom navigation logic

**Example from Project**:
```javascript
import { useNavigation } from 'expo-router';

const CustomScreen = () => {
    const navigation = useNavigation();
    
    useEffect(() => {
        // Dynamically hide header
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    
    return <View>...</View>;
};
```

**Use Cases**:
- **Dynamic Navigation Options**: Change header, title, or other screen options
- **Navigation State Access**: Get current route, params, or navigation history
- **Event Listeners**: Listen to focus, blur, or other navigation events
- **Custom Navigation Logic**: Implement complex navigation patterns

#### useRouter Hook

**Definition**: `useRouter` is an Expo Router hook that provides imperative navigation methods for programmatic navigation, including push, replace, back, dismiss, and other navigation actions.

**When to Use**:
- Programmatic navigation (push, replace, back)
- Modal dismissal
- Navigation with parameters
- Complex navigation flows
- Conditional navigation logic

**Example from Project**:
```javascript
import { useRouter } from 'expo-router';

const NavigationDemo = () => {
    const router = useRouter();
    
    const handleDismiss = (count) => {
        router.dismiss(count); // Dismiss specific number of screens
    };
    
    const handleGoToRoot = () => {
        router.dismissTo('/'); // Navigate to root screen
    };
    
    const handleDismissAll = () => {
        router.dismissAll(); // Dismiss all modals/screens
    };
    
    const handleCanDismiss = (count) => {
        if (router.canDismiss()) {
            router.dismiss(count); // Conditional dismissal
        }
    };
    
    return (
        <View>
            <Button title="Dismiss 3 screens" onPress={() => handleDismiss(3)} />
            <Button title="Go to Root" onPress={handleGoToRoot} />
            <Button title="Dismiss All" onPress={handleDismissAll} />
        </View>
    );
};
```

**Use Cases**:
- **Modal Management**: Dismiss modals with `dismiss()`, `dismissAll()`, `dismissTo()`
- **Programmatic Navigation**: Navigate without user interaction
- **Parameter Passing**: Pass data between screens
- **Conditional Navigation**: Navigate based on app state or user permissions
- **Deep Linking**: Handle external navigation requests

#### Hook Comparison

| Hook | Purpose | Primary Use Case | Returns |
|------|---------|------------------|---------|
| `useEffect` | Side effects | Component lifecycle management | None (void) |
| `useNavigation` | Navigation state/options | Access navigation object | Navigation object |
| `useRouter` | Imperative navigation | Programmatic navigation | Router object |

#### Best Practices

1. **useEffect**:
   - Always include dependency arrays
   - Clean up subscriptions and timers
   - Avoid infinite re-renders

2. **useNavigation**:
   - Use for accessing navigation state
   - Ideal for dynamic screen options
   - Don't use for navigation actions (use `useRouter` instead)

3. **useRouter**:
   - Use for programmatic navigation
   - Handle modal dismissal
   - Pass parameters between screens

### Useful Links
- Expo: `https://docs.expo.dev/`
- Expo Router: `https://expo.dev/router`
- React Native: `https://reactnative.dev/`
- React Hooks: `https://react.dev/reference/react`

---
If you run into issues, please include your OS, Node version, device/emulator, and error logs when reporting.


