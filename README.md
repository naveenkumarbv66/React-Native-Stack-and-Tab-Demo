## ExpoNavigation

A React Native application bootstrapped with Expo and organized using Expo Router. It demonstrates nested navigation via tabs, stacks, and linkable screens under the `app/` directory.

### Features
- **Expo Router** with `tabs`, `stacks`, `link` group, `dynamic routes`, `native tabs`, and `drawer` navigation
- **Native Tabs Demo** with SF Symbols icons and Material Design icons
- **Drawer Navigation** with dynamic routes and parameter passing
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
  (customStack)/
    _layout.jsx
    cStackFour.jsx
    cStackOne.jsx
    cStackThree.jsx
    cStackTwo.jsx
    index.jsx
  (drawerdemo)/
    _layout.tsx
    index.tsx
    user/
      [id].tsx
  (dynamicRoutes)/
    _layout.tsx
    [name].tsx
    index.tsx
  (link)/
    forgotPasswordScreen.jsx
    index.jsx
    registerScreen.jsx
  (nativeTabsDemo)/
    _layout.tsx
    BadgeContext.tsx
    index.tsx
    profile.tsx
    settings.tsx
  (stack)/
    _layout.tsx
    index.jsx
    screenFour.jsx
    screenOne.jsx
    screenThree.jsx
    screenTwo.jsx
  (stackNavigator)/
    _layout.jsx
    index.jsx
    snScreenTwo.jsx
    snScreenThree.jsx
    scScreenFour.jsx
    scScreenFive.jsx
    scScreenSeven.jsx
    components/
      GenericBackButton.jsx
      README.md
      scScreenSix.jsx
    hooks/
      useGenericBackButton.jsx
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
- `app/(drawerdemo)/_layout.tsx`: Drawer navigator layout with drawer screens configuration.
- `app/(drawerdemo)/index.tsx`: Home screen accessible via drawer navigation.
- `app/(drawerdemo)/user/[id].tsx`: Dynamic user route with parameter passing in drawer context.
- `app/(nativeTabsDemo)/_layout.tsx`: Native tabs layout with SF Symbols and Material Design icons.
- `app/(nativeTabsDemo)/BadgeContext.tsx`: React Context for dynamic badge state management.
- `app/(nativeTabsDemo)/index.tsx`: Home tab with welcome content, feature overview, and badge controls.
- `app/(nativeTabsDemo)/settings.tsx`: Settings tab with interactive switches and menu items.
- `app/(nativeTabsDemo)/profile.tsx`: Profile tab with user stats, badge controls, menu, and activity feed.
- `app/(stack)/_layout.tsx`: Declares a stack navigator and its screens.
- `app/(stackNavigator)/_layout.jsx`: Advanced stack navigator with comprehensive navigation features.
- `app/(stackNavigator)/scScreenSeven.jsx`: Navigation events demo with real-time logging.
- `app/(stackNavigator)/components/GenericBackButton.jsx`: Reusable back button component.
- `app/(stackNavigator)/hooks/useGenericBackButton.jsx`: Custom hook for easy back button integration.
- `app/(dynamicRoutes)/_layout.tsx`: Declares a stack navigator for dynamic routes.
- `app/(dynamicRoutes)/[name].tsx`: Dynamic route that accepts a `name` parameter.
- `app/(dynamicRoutes)/index.tsx`: Entry point for dynamic routes with navigation examples.
- `app/(link)/*`: Simple linkable screens (e.g., login/register/forgot password flows).
- `app/+not-found.tsx`: 404 route for unmatched paths.

### Stack Navigator Group (Advanced Features)

The `(stackNavigator)` group demonstrates advanced React Navigation features with comprehensive examples:

#### Features Demonstrated
- **Complete Navigation Methods**: All 7 navigation methods (navigate, replace, push, pop, popTo, popToTop, goBack)
- **Navigation Events**: Real-time event logging with focus, blur, beforeRemove, and state events
- **Generic Back Button System**: Reusable back button with previous screen name
- **Header Customization**: Dynamic header buttons and platform-specific behavior
- **Parameter Passing**: Comprehensive parameter passing between screens
- **Interactive Testing**: Buttons to test all navigation scenarios

#### Screens Overview
- **Home**: Entry point with navigation to Screen Two
- **Screen Two**: Receives parameters and navigates to Screen Three
- **Screen Three**: Demonstrates navigate, replace, push, and pop methods
- **Screen Four**: Shows popTo, popToTop, and goBack methods
- **Screen Five**: Header customization with count buttons and navigation to Screen Seven
- **Screen Six**: Similar to Screen Five with additional navigation options
- **Screen Seven**: Comprehensive navigation events demo with real-time logging

#### How to Access
1. Navigate to any screen in the stack navigator
2. Use the header buttons (SC3, SC7) to access different screens
3. Try different navigation methods to see parameter passing
4. Visit Screen Seven for the complete navigation events demo

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

### Native Tabs Demo

The `(nativeTabsDemo)` group demonstrates the implementation of native tabs using Expo Router's experimental native tabs feature (available in SDK 54+).

#### Features Demonstrated
- **Native Tab Bar**: Uses the native system tab bar for authentic platform experience
- **Cross-Platform Icons**: SF Symbols for iOS and Material Design icons for Android
- **Dynamic Badge System**: Real-time badge updates with React Context state management
- **Interactive Badge Controls**: User-controlled badge increment, decrement, and clear functionality
- **Interactive Content**: Rich, interactive screens with modern UI components
- **Proper Component Structure**: Follows Expo Router's native tabs best practices

#### Implementation Details

**Layout Configuration** (`_layout.tsx`):
```tsx
import { NativeTabs, Icon, Label, Badge, VectorIcon } from 'expo-router/unstable-native-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { BadgeProvider, useBadge } from './BadgeContext';

function NativeTabsContent() {
    const { badgeCount } = useBadge();

    return (
        <NativeTabs>
            <NativeTabs.Trigger name="index">
                <Icon src={<VectorIcon family={MaterialIcons} name="home" />} />
                <Label>Home</Label>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="settings">
                <Icon src={<VectorIcon family={MaterialIcons} name="settings" />} />
                <Label>Settings</Label>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="profile">
                <Icon src={<VectorIcon family={MaterialIcons} name="person" />} />
                <Label>Profile</Label>
                {badgeCount > 0 && <Badge>{badgeCount}</Badge>}
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}

export default function NativeTabsDemoLayout() {
    return (
        <BadgeProvider>
            <NativeTabsContent />
        </BadgeProvider>
    );
}
```

**Badge Context** (`BadgeContext.tsx`):
```tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BadgeContextType {
    badgeCount: number;
    setBadgeCount: (count: number) => void;
    incrementBadge: () => void;
    decrementBadge: () => void;
    clearBadge: () => void;
}

const BadgeContext = createContext<BadgeContextType | undefined>(undefined);

export const useBadge = () => {
    const context = useContext(BadgeContext);
    if (!context) {
        throw new Error('useBadge must be used within a BadgeProvider');
    }
    return context;
};

export const BadgeProvider: React.FC<BadgeProviderProps> = ({ children }) => {
    const [badgeCount, setBadgeCount] = useState(4);

    const incrementBadge = () => setBadgeCount(prev => prev + 1);
    const decrementBadge = () => setBadgeCount(prev => Math.max(0, prev - 1));
    const clearBadge = () => setBadgeCount(0);

    return (
        <BadgeContext.Provider value={{ badgeCount, setBadgeCount, incrementBadge, decrementBadge, clearBadge }}>
            {children}
        </BadgeContext.Provider>
    );
};
```

#### Tab Screens Overview

**Home Tab** (`index.tsx`):
- Welcome screen with app introduction
- Feature highlights of Native tabs
- Dynamic badge demo section with interactive controls
- Real-time badge count display
- Clean, modern UI with cards and shadows
- Scrollable content with comprehensive information

**Settings Tab** (`settings.tsx`):
- Interactive toggle switches for notifications, dark mode, and location
- Settings sections with proper grouping
- About section with app version and legal links
- Modern iOS-style settings interface

**Profile Tab** (`profile.tsx`):
- User profile with avatar and dynamic notification badge
- Statistics display (Posts, Followers, Following)
- Interactive badge controls section with +1, -1, and Clear buttons
- Real-time badge count display and management
- Menu items with icons and navigation arrows
- Recent activity feed with timestamps
- Destructive action styling for logout

#### Key Features

**Icon Implementation**:
- **VectorIcon Component**: Uses `@expo/vector-icons` for reliable cross-platform icons
- **MaterialIcons Family**: Standard Material Design icons that work on all platforms
- **Proper Structure**: Icons and labels are separate components for better control

**Dynamic Badge System**:
- **Real-time Updates**: Badge count updates instantly across all components
- **React Context**: Centralized state management for badge count
- **Interactive Controls**: User can increment, decrement, or clear badge count
- **Conditional Display**: Badge only appears when count > 0
- **Cross-Component Sync**: Tab badge and profile avatar badge stay synchronized
- **Platform Native**: Uses native badge styling for authentic appearance

**UI/UX Features**:
- **Modern Design**: Clean, card-based layouts with shadows and proper spacing
- **Interactive Elements**: Toggle switches, buttons, and touchable components
- **Responsive Layout**: Proper scrolling and content organization
- **Platform Consistency**: Follows platform design guidelines

#### How to Access
1. Navigate to `/(nativeTabsDemo)` from the main screen
2. Use the tab bar to switch between Home, Settings, and Profile
3. **Try the Dynamic Badge Demo**:
   - Use the badge controls (+1, -1, Clear) on Home or Profile tabs
   - Watch the badge count update in real-time on the tab bar
   - Notice how the profile avatar badge stays synchronized
4. Interact with the various UI components in each tab
5. Notice the native tab bar behavior and styling

#### Native Tabs vs JavaScript Tabs

| Feature | Native Tabs | JavaScript Tabs |
|---------|-------------|-----------------|
| **Performance** | Native system performance | JavaScript rendering |
| **Styling** | Platform-native appearance | Fully customizable |
| **Icons** | SF Symbols (iOS), Drawables (Android) | Any React component |
| **Badges** | Native badge system | Custom implementation |
| **Platform Behavior** | Follows platform conventions | Custom behavior |
| **Customization** | Limited to platform options | Unlimited customization |

#### Best Practices Demonstrated

1. **Component Structure**: Proper separation of Icon and Label components
2. **Cross-Platform Icons**: Using VectorIcon for reliable icon display
3. **State Management**: React Context for centralized badge state management
4. **Dynamic Badge Implementation**: Real-time badge updates with conditional rendering
5. **Content Organization**: Well-structured, scrollable content
6. **Interactive Elements**: Proper touch handling and state management
7. **Context Pattern**: Custom hook (`useBadge`) for clean context consumption
8. **Conditional Rendering**: Badge only displays when count > 0

#### Requirements
- **Expo SDK 54+**: Native tabs are experimental and require SDK 54 or later
- **@expo/vector-icons**: For cross-platform icon support
- **expo-router**: For file-based routing and native tabs integration
- **React Context**: For dynamic badge state management
- **@react-navigation/native**: For navigation hooks (useFocusEffect)

#### Dynamic Badge System

The Native Tabs Demo includes a comprehensive dynamic badge system that demonstrates real-time state management and cross-component synchronization.

**Key Components**:

1. **BadgeContext** (`BadgeContext.tsx`):
   - Centralized state management using React Context
   - Provides badge count and control functions
   - Custom hook (`useBadge`) for easy consumption
   - TypeScript support with proper type definitions

2. **Badge Functions**:
   - `incrementBadge()`: Increases badge count by 1
   - `decrementBadge()`: Decreases badge count by 1 (minimum 0)
   - `clearBadge()`: Sets badge count to 0
   - `setBadgeCount(count)`: Sets custom badge count

3. **Real-time Updates**:
   - Badge count updates instantly across all components
   - Tab bar badge and profile avatar badge stay synchronized
   - Conditional rendering (badge only shows when count > 0)

**Usage Example**:
```tsx
import { useBadge } from './BadgeContext';

const MyComponent = () => {
    const { badgeCount, incrementBadge, decrementBadge, clearBadge } = useBadge();
    
    return (
        <View>
            <Text>Current badge count: {badgeCount}</Text>
            <Button title="+1" onPress={incrementBadge} />
            <Button title="-1" onPress={decrementBadge} />
            <Button title="Clear" onPress={clearBadge} />
        </View>
    );
};
```

**Benefits**:
- **Centralized State**: Single source of truth for badge count
- **Real-time Sync**: All components update simultaneously
- **Type Safety**: Full TypeScript support
- **Easy Integration**: Simple hook-based API
- **Performance**: Efficient re-renders with React Context

### Drawer Navigation Demo

The `(drawerdemo)` group demonstrates the implementation of drawer navigation using Expo Router's drawer navigator, providing a slide-out menu interface for navigation.

#### Features Demonstrated
- **Drawer Navigation**: Slide-out drawer menu for easy navigation between screens
- **Dynamic Routes**: Support for dynamic routes with parameter passing within drawer context
- **Cross-Platform**: Works on iOS, Android, and Web with platform-appropriate styling
- **File-Based Routing**: Leverages Expo Router's file-based routing system
- **Screen Configuration**: Customizable drawer labels and titles

#### Implementation Details

**Layout Configuration** (`_layout.tsx`):
```tsx
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <Drawer>
            <Drawer.Screen
                name="index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Home',
                    title: 'overview',
                }}
            />
            <Drawer.Screen
                name="user/[id]" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'User',
                    title: 'overview',
                }}
            />
        </Drawer>
    );
}
```

**Key Components**:

1. **Drawer Navigator**: Uses `expo-router/drawer` for drawer navigation
2. **Screen Configuration**: Each screen can have custom `drawerLabel` and `title`
3. **Dynamic Routes**: Supports dynamic routes like `user/[id]` within drawer context
4. **File-Based Structure**: Follows Expo Router's file-based routing conventions

#### Drawer Screens Overview

**Home Screen** (`index.tsx`):
- Main drawer screen accessible via drawer menu
- Simple content display demonstrating basic drawer functionality
- Entry point for drawer navigation demo

**User Screen** (`user/[id].tsx`):
- Dynamic route that accepts an `id` parameter
- Demonstrates parameter passing within drawer navigation context
- Shows how dynamic routes work with drawer navigation

#### Drawer Navigation Features

**Navigation Methods**:
- **Drawer Toggle**: Swipe from edge or tap hamburger menu to open/close drawer
- **Screen Selection**: Tap drawer items to navigate to different screens
- **Parameter Passing**: Dynamic routes support parameter passing
- **Cross-Platform**: Native drawer behavior on iOS and Android

**Configuration Options**:
- **drawerLabel**: Custom label shown in drawer menu
- **title**: Screen title displayed in header
- **drawerIcon**: Custom icon for drawer menu items (optional)
- **drawerActiveTintColor**: Color for active drawer item
- **drawerInactiveTintColor**: Color for inactive drawer items

#### Usage Examples

**Basic Drawer Navigation**:
```tsx
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: 'Home',
                    title: 'Dashboard',
                }}
            />
        </Drawer>
    );
}
```

**Dynamic Routes in Drawer**:
```tsx
<Drawer.Screen
    name="user/[id]"
    options={{
        drawerLabel: 'User Profile',
        title: 'User Details',
    }}
/>
```

**Accessing Parameters in Drawer Screens**:
```tsx
import { useLocalSearchParams } from 'expo-router';

const UserScreen = () => {
    const { id } = useLocalSearchParams();
    
    return (
        <View>
            <Text>User ID: {id}</Text>
        </View>
    );
};
```

#### How to Access
1. Navigate to `/(drawerdemo)` from the main screen
2. Swipe from the left edge or tap the hamburger menu to open the drawer
3. Select "Home" to view the main drawer screen
4. Select "User" to navigate to the dynamic user route
5. Notice the drawer menu labels and screen titles

#### Drawer vs Other Navigation Types

| Feature | Drawer | Tabs | Stack |
|---------|--------|------|-------|
| **UI Pattern** | Slide-out menu | Bottom/top tabs | Stack of screens |
| **Space Usage** | Hidden until opened | Always visible | Full screen |
| **Navigation** | Menu selection | Tab switching | Push/pop |
| **Best For** | Many screens, settings | Main app sections | Sequential flows |
| **Platform** | Universal | Universal | Universal |

#### Best Practices Demonstrated

1. **File Structure**: Proper organization with `_layout.tsx` for drawer configuration
2. **Screen Naming**: Clear, descriptive screen names that match file structure
3. **Dynamic Routes**: Proper implementation of dynamic routes within drawer context
4. **Configuration**: Custom drawer labels and titles for better UX
5. **Cross-Platform**: Works consistently across iOS, Android, and Web

#### Requirements
- **expo-router**: For file-based routing and drawer navigation
- **@react-navigation/drawer**: For drawer navigation functionality (automatically included)
- **React Native**: For cross-platform mobile development

#### Advanced Drawer Features

**Custom Drawer Content** (Optional):
```tsx
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="Custom Item"
                onPress={() => props.navigation.navigate('CustomScreen')}
            />
        </DrawerContentScrollView>
    );
}

export default function Layout() {
    return (
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
            {/* Drawer screens */}
        </Drawer>
    );
}
```

**Drawer Styling**:
```tsx
<Drawer
    screenOptions={{
        drawerStyle: {
            backgroundColor: '#f0f0f0',
            width: 240,
        },
        drawerActiveTintColor: '#2196F3',
        drawerInactiveTintColor: '#757575',
    }}
>
    {/* Drawer screens */}
</Drawer>
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

#### Navigation Events Demo (Screen Seven)

This project includes a comprehensive navigation events demonstration in **Screen Seven** that showcases React Navigation's event system.

**Definition**: Navigation events allow you to listen to various navigation state changes and user interactions in your React Navigation app.

**Features Demonstrated**:
- **Real-time Event Logging**: Visual log showing all navigation events with timestamps
- **Focus/Blur Events**: Track when screens come into and go out of focus
- **beforeRemove Event**: Prevent navigation with confirmation dialogs
- **State Events**: Monitor navigation state changes
- **Interactive Testing**: Buttons to trigger different navigation actions

**Example Implementation**:
```javascript
import { useEffect, useState, useRef } from 'react';
import { ScrollView, Alert } from 'react-native';

const NavigationEventsDemo = ({ navigation }) => {
    const [eventLog, setEventLog] = useState([]);
    const scrollViewRef = useRef(null);

    useEffect(() => {
        // Focus event - when screen comes into focus
        const unsubscribeFocus = navigation.addListener('focus', () => {
            addToLog('FOCUS', 'Screen is now focused');
        });

        // Blur event - when screen goes out of focus
        const unsubscribeBlur = navigation.addListener('blur', () => {
            addToLog('BLUR', 'Screen is now blurred');
        });

        // beforeRemove event - before screen is removed from stack
        const unsubscribeBeforeRemove = navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            Alert.alert(
                'Discard changes?',
                'You have unsaved changes. Are you sure you want to go back?',
                [
                    { text: "Don't leave", style: 'cancel' },
                    { text: 'Discard', onPress: () => navigation.dispatch(e.data.action) },
                ]
            );
        });

        // State event - when navigation state changes
        const unsubscribeState = navigation.addListener('state', (e) => {
            addToLog('STATE_CHANGE', 'Navigation state updated');
        });

        return () => {
            unsubscribeFocus();
            unsubscribeBlur();
            unsubscribeBeforeRemove();
            unsubscribeState();
        };
    }, [navigation]);

    return (
        <ScrollView ref={scrollViewRef}>
            {eventLog.map((log, index) => (
                <Text key={index}>{log}</Text>
            ))}
        </ScrollView>
    );
};
```

**Navigation Events Available**:
- **`focus`**: Screen comes into focus
- **`blur`**: Screen goes out of focus
- **`beforeRemove`**: Before screen is removed (can prevent navigation)
- **`state`**: Navigation state changes
- **`beforeRemove`**: Custom confirmation dialogs

**Use Cases**:
- **Analytics**: Track user navigation patterns
- **Data Fetching**: Load data when screen comes into focus
- **Cleanup**: Clear timers or subscriptions when screen loses focus
- **Prevention**: Prevent navigation with unsaved changes
- **State Management**: Update UI based on navigation state

#### Generic Back Button System

This project implements a reusable generic back button system for consistent navigation across all screens.

**Components**:
- **`GenericBackButton`**: Reusable back button component
- **`useGenericBackButton`**: Custom hook for easy integration

**Features**:
- **Dynamic Previous Name**: Automatically shows previous screen name
- **Platform-Specific**: Only shows on Android (iOS uses default)
- **Customizable**: Supports custom styling and colors
- **Consistent UI**: Same back button behavior across all screens

**Usage**:
```javascript
import useGenericBackButton from './hooks/useGenericBackButton';

const MyScreen = ({ navigation }) => {
    // Just one line to add generic back button
    useGenericBackButton(navigation);
    
    return <View>...</View>;
};
```

**Benefits**:
- **DRY Principle**: No code duplication
- **Maintainable**: Changes in one place affect all screens
- **Consistent UX**: Professional appearance across the app
- **Easy Integration**: One line of code per screen

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

3. **Navigation Events**:
   - Always clean up event listeners in useEffect return
   - Use meaningful event names for debugging
   - Handle edge cases in beforeRemove events
   - Consider performance impact of frequent state changes

4. **Performance Optimization**:
   - Memoize header components if they're expensive to render
   - Use `useCallback` for header button handlers
   - Avoid complex calculations in header components
   - Limit event log size to prevent memory issues

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

#### Core Documentation
- Expo: `https://docs.expo.dev/`
- Expo Router: `https://expo.dev/router`
- Native Tabs: `https://docs.expo.dev/router/advanced/native-tabs/`
- React Native: `https://reactnative.dev/`
- React Hooks: `https://react.dev/reference/react`

#### React Navigation
- React Navigation: `https://reactnavigation.org/`
- Stack Navigator: `https://reactnavigation.org/docs/stack-navigator/`
- Navigation State: `https://reactnavigation.org/docs/navigation-state/`
- Header Customization: `https://reactnavigation.org/docs/headers/`
- Navigation Events: `https://reactnavigation.org/docs/navigation-events/`
- Navigation Actions: `https://reactnavigation.org/docs/navigation-actions/`

#### React Hooks
- useLayoutEffect: `https://react.dev/reference/react/useLayoutEffect`
- useEffect: `https://react.dev/reference/react/useEffect`
- useState: `https://react.dev/reference/react/useState`
- useRef: `https://react.dev/reference/react/useRef`

#### Project-Specific
- Generic Back Button: `app/(stackNavigator)/components/README.md`
- Navigation Events Demo: `app/(stackNavigator)/scScreenSeven.jsx`
- Native Tabs Demo: `app/(nativeTabsDemo)/_layout.tsx`
- Drawer Navigation Demo: `app/(drawerdemo)/_layout.tsx`

---
If you run into issues, please include your OS, Node version, device/emulator, and error logs when reporting.


