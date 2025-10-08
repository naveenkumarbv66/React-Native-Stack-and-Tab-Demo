# Stack Navigator Components

This directory contains reusable components for the Stack Navigator group.

## GenericBackButton

A reusable back button component that displays the previous screen name next to a back arrow.

### Features
- Shows previous screen name dynamically
- Platform-specific (Android only - iOS uses default back button)
- Customizable styling
- Automatic navigation state tracking

### Usage

```javascript
import GenericBackButton from './components/GenericBackButton';

// Basic usage
<GenericBackButton navigation={navigation} />

// With custom styling
<GenericBackButton 
    navigation={navigation}
    style={{ marginLeft: 10 }}
    textStyle={{ fontSize: 18 }}
    iconColor="blue"
/>
```

### Props
- `navigation` (required): Navigation object from React Navigation
- `style` (optional): Custom styles for the button container
- `textStyle` (optional): Custom styles for the text
- `iconColor` (optional): Color for the back arrow icon (default: 'white')

## Hooks

### useGenericBackButton

A custom hook that automatically sets up the generic back button in the header.

### Usage

```javascript
import useGenericBackButton from './hooks/useGenericBackButton';

const MyScreen = ({ navigation }) => {
    // Automatically sets up the back button
    useGenericBackButton(navigation);
    
    return <View>...</View>;
};
```

### Options

```javascript
// With custom options
useGenericBackButton(navigation, {
    style: { marginLeft: 10 },
    textStyle: { fontSize: 18 },
    iconColor: 'blue'
});
```

### Benefits
- **Consistent UI**: All screens have the same back button behavior
- **Automatic Updates**: Previous screen name updates automatically
- **Easy to Use**: Just one line of code to add to any screen
- **Customizable**: Supports custom styling and colors
- **Platform Aware**: Only shows on Android (iOS uses default)
