# rn-webbrower-with-back

I am using the https://github.com/fahadhaq/react-native-webbrowser modified on top of it to consume default webview props for webview. Credit goes to
https://github.com/d-a-n/react-native-webbrowser
https://github.com/magrinj/react-native-webbrowser
https://github.com/fahadhaq/react-native-webbrowser

A cross-platform (iOS / Android), full-featured in-app web browser component for React Native that is highly customizable. Currently you can hide the address-, status- and toolbar. Additionally the foreground and background colors can be modified.

## Install

```sh
npm i rn-webbrower-with-back --save
```

## Usage

Here is an extensive overview of the component usage.

```jsx
class SampleApp extends Component {
  render() {
    return (
      <View style={{ paddingTop: 20, flex: 1 }}>
        <Webbrowser
          url="https://your-url.com"
          hideRefreshButton={false}
          hideToolbar={false}
          hideAddressBar={false}
          hideStatusBar={false}
          foregroundColor={"#efefef"}
          backgroundColor={"#333"}
          webviewProps={{}}
        />
      </View>
    );
  }
}
```

## Props

- `url - string` required, web address
- `hideAddressBar - bool` optional, hides the address bar / address input
- `hideStatusBar - bool` optional, hides the status bar / site title
- `hideToolbar - bool` optional, hides the toolbar (nav bar)
- `hideRefreshButton - bool` optional, hides just the refresh button from the toolbar
- `hideActivityIndicator - bool`optional, hides the activity indicator (loading) overlay
- `foregroundColor - string` optional, sets the forground color of text and icon elements
- `backgroundColor - string` optional, sets the background color
- `onNavigationStateChange - function(navState)` optional, url change callback
- `onShouldStartLoadWithRequest - function(event)` optional, return false if the request should be stopped
- `webviewProps - object` - optional, props for webview `https://facebook.github.io/react-native/docs/webview.html` (please look for documentation)

## Screenshots

<img src="https://raw.githubusercontent.com/d-a-n/react-native-webbrowser/master/assets/images/screenshot.png" width="400" />
&nbsp;&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/d-a-n/react-native-webbrowser/master/assets/images/screenshot2.png" width="400" />
