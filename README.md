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

### React Navigation Stack Navigator Demo

This project demonstrates the usage of React Navigation's Stack Navigator with comprehensive navigation methods and parameter passing.

#### Stack Navigator Setup

**Definition**: A stack navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.

**Implementation**:
```javascript
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function CustomNavigationStackLayout() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen name="Stack Navigator Home" component={index} />
            <Stack.Screen name="Screen Two" component={snScreenTwo} />
            <Stack.Screen name="Screen Three" component={snScreenThree} />
            <Stack.Screen name="Screen Four" component={scScreenFour} />
        </Stack.Navigator>
    );
}
```

#### Navigation Methods

This project demonstrates all major React Navigation methods:

##### 1. navigation.navigate()
**Purpose**: Navigate to a screen, pushing it onto the stack if it's not already there.

**When to Use**:
- Standard navigation between screens
- Passing parameters to destination screen
- Conditional navigation

**Example from Project**:
```javascript
// From index.jsx
navigation.navigate('Screen Two', {
    itemName: 'From Screen One',
    itemId: 1,
});

// From snScreenTwo.jsx
navigation.navigate('Screen Three', {
    itemName: 'from Screen Two',
    itemId: 2,
});
```

##### 2. navigation.replace()
**Purpose**: Replace the current screen with a new one, removing the current screen from the stack.

**When to Use**:
- Login/logout flows
- Preventing back navigation to certain screens
- Replacing screens with updated data

**Example from Project**:
```javascript
// From snScreenThree.jsx
navigation.replace('Screen Four', {
    itemName: 'From Screen Three with replace',
    itemId: 33,
});
```

##### 3. navigation.push()
**Purpose**: Push a new screen onto the stack, even if it already exists.

**When to Use**:
- Allowing multiple instances of the same screen
- Deep navigation scenarios
- Modal-like behavior

**Example from Project**:
```javascript
// From snScreenThree.jsx
navigation.push('Screen Four', {
    itemName: 'From Screen Three with push',
    itemId: 333,
});
```

##### 4. navigation.pop()
**Purpose**: Remove the current screen from the stack and go back to the previous one.

**When to Use**:
- Simple back navigation
- Removing current screen from history
- Programmatic back button behavior

**Example from Project**:
```javascript
// From snScreenThree.jsx
navigation.pop();
```

##### 5. navigation.popTo()
**Purpose**: Pop back to a specific screen in the stack, removing all screens above it.

**When to Use**:
- Jumping back multiple screens
- Returning to a specific point in navigation
- Clearing intermediate screens

**Example from Project**:
```javascript
// From scScreenFour.jsx
navigation.popTo('Screen Two', { info: 'Used popTo to come back' });
```

##### 6. navigation.popToTop()
**Purpose**: Pop back to the first screen in the stack, removing all other screens.

**When to Use**:
- Returning to home screen
- Clearing entire navigation stack
- Logout scenarios

**Example from Project**:
```javascript
// From scScreenFour.jsx
navigation.popToTop();
```

##### 7. navigation.goBack()
**Purpose**: Go back to the previous screen (equivalent to pop() but more explicit).

**When to Use**:
- Explicit back navigation
- Custom back button implementation
- Conditional back navigation

**Example from Project**:
```javascript
// From scScreenFour.jsx
navigation.goBack();
```

#### Parameter Passing

**Receiving Parameters**:
```javascript
const MyScreen = ({ navigation, route }) => {
    const { itemName, itemId } = route.params;
    
    return (
        <View>
            <Text>{`Received itemName: ${itemName} and itemId: ${itemId}`}</Text>
        </View>
    );
};
```

**Navigation Methods Comparison**:

| Method | Stack Behavior | Use Case | Parameters |
|--------|----------------|----------|------------|
| `navigate()` | Pushes if not in stack, navigates if exists | Standard navigation | ✅ |
| `replace()` | Replaces current screen | Login flows, prevent back | ✅ |
| `push()` | Always pushes new screen | Multiple instances | ✅ |
| `pop()` | Removes current screen | Simple back | ❌ |
| `popTo()` | Goes to specific screen | Jump back multiple | ✅ |
| `popToTop()` | Goes to first screen | Return to home | ❌ |
| `goBack()` | Goes to previous screen | Explicit back | ❌ |

#### Advanced Navigation Features

This project also demonstrates advanced React Navigation features:

##### useNavigationState Hook

**Definition**: `useNavigationState` is a React Navigation hook that allows you to access the current navigation state and subscribe to its changes.

**When to Use**:
- Accessing current route information
- Getting previous route names
- Monitoring navigation state changes
- Custom header implementations
- Conditional rendering based on navigation state

**Example from Project**:
```javascript
import { useNavigationState } from '@react-navigation/native';

const MyScreen = ({ navigation }) => {
    // Get the previous route name
    const previousRouteName = useNavigationState(state => {
        const currentIndex = state.index;
        const routes = state.routes;
        
        if (currentIndex > 0) {
            const previousRoute = routes[currentIndex - 1];
            return previousRoute ? previousRoute.name : 'Back';
        }
        return 'Back';
    });
    
    return <View>...</View>;
};
```

**Use Cases**:
- **Dynamic Headers**: Show different header content based on navigation state
- **Previous Route Tracking**: Display the previous screen name in back buttons
- **Conditional Logic**: Execute different logic based on current route
- **State Monitoring**: Track navigation changes for analytics or debugging

##### Header Customization (headerRight & headerLeft)

**Definition**: React Navigation allows you to customize the header with custom left and right components.

**When to Use**:
- Adding custom buttons to headers
- Implementing custom back buttons
- Adding action buttons (save, edit, etc.)
- Platform-specific header behavior
- Custom header layouts

**Example from Project**:
```javascript
import { useLayoutEffect } from 'react';
import { TouchableOpacity, Text, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MyScreen = ({ navigation }) => {
    const [count, setCount] = useState(0);
    
    useLayoutEffect(() => {
        navigation.setOptions({
            // Custom right header with multiple buttons
            headerRight: () => (
                <View style={styles.headerButtonContainer}>
                    <TouchableOpacity onPress={() => setCount(c => c + 1)}>
                        <Text style={styles.headerButtonText}>+1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCount(c => c - 1)}>
                        <Text style={styles.headerButtonText}>-1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCount(0)}>
                        <Text style={styles.headerButtonText}>Reset</Text>
                    </TouchableOpacity>
                </View>
            ),
            
            // Custom left header (Android only)
            headerLeft: () =>
                Platform.OS === 'android' ? (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButtonContainer}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                        <Text style={styles.backButtonText}>{previousRouteName}</Text>
                    </TouchableOpacity>
                ) : undefined,
        });
    }, [navigation, previousRouteName]);
    
    return <View>...</View>;
};
```

**Use Cases**:
- **Action Buttons**: Add save, edit, or delete buttons to headers
- **Custom Back Buttons**: Implement custom back button with previous screen name
- **Platform-Specific UI**: Different header behavior for iOS vs Android
- **State Management**: Header buttons that interact with component state
- **Navigation Actions**: Quick navigation buttons in headers

##### useLayoutEffect Hook

**Definition**: `useLayoutEffect` is a React hook that runs synchronously after all DOM mutations but before the browser paints.

**When to Use**:
- Setting navigation options
- Measuring DOM elements
- Synchronous DOM updates
- Preventing visual flicker
- Header customization

**Example from Project**:
```javascript
import { useLayoutEffect } from 'react';

const MyScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <CustomHeaderComponent />,
            headerLeft: () => <CustomBackButton />,
        });
    }, [navigation]); // Dependency array ensures updates when navigation changes
    
    return <View>...</View>;
};
```

**Use Cases**:
- **Navigation Options**: Set header options before screen renders
- **DOM Measurements**: Measure elements before paint
- **Synchronous Updates**: Ensure updates happen before visual render
- **Header Customization**: Customize headers without visual flicker
- **State-Dependent Headers**: Update headers based on component state

#### Advanced Features Comparison

| Feature | Purpose | When to Use | Performance Impact |
|---------|---------|-------------|-------------------|
| `useNavigationState` | Access navigation state | Dynamic UI based on navigation | Low (optimized selector) |
| `headerRight` | Custom right header | Action buttons, state controls | Medium (re-renders on state change) |
| `headerLeft` | Custom left header | Custom back buttons, platform-specific UI | Medium (re-renders on navigation) |
| `useLayoutEffect` | Synchronous DOM updates | Header customization, measurements | High (blocks paint) |

#### Advanced Features Best Practices

1. **useNavigationState**:
   - Use selector functions to minimize re-renders
   - Only subscribe to the state you actually need
   - Handle edge cases (first screen, no previous route)

2. **Header Customization**:
   - Use `useLayoutEffect` to prevent visual flicker
   - Include proper dependency arrays
   - Consider platform differences (iOS vs Android)
   - Keep header components lightweight

3. **Performance Optimization**:
   - Memoize header components if they're expensive to render
   - Use `useCallback` for header button handlers
   - Avoid complex calculations in header components

#### Best Practices

1. **Parameter Naming**: Use consistent parameter names across screens
2. **Navigation Flow**: Plan your navigation stack to avoid deep nesting
3. **Back Button**: Consider using `goBack()` for explicit back navigation
4. **Replace vs Navigate**: Use `replace()` when you don't want users to go back
5. **Parameter Validation**: Always check if parameters exist before using them
6. **Header Performance**: Use `useLayoutEffect` for header updates to prevent flicker
7. **Navigation State**: Use `useNavigationState` for dynamic navigation-dependent UI
8. **Platform Considerations**: Implement platform-specific header behavior when needed

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
- React Navigation: `https://reactnavigation.org/`
- Stack Navigator: `https://reactnavigation.org/docs/stack-navigator/`
- Navigation State: `https://reactnavigation.org/docs/navigation-state/`
- Header Customization: `https://reactnavigation.org/docs/headers/`
- useLayoutEffect: `https://react.dev/reference/react/useLayoutEffect`

---
If you run into issues, please include your OS, Node version, device/emulator, and error logs when reporting.


