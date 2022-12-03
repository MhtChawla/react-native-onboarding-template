# React Native Onboarding Template

![license](https://img.shields.io/badge/Licensed-ISC-success) ![npm](https://img.shields.io/badge/npm-v1.0.1-blue) ![stack](https://img.shields.io/badge/stack-react--native-important)

## `<OnboardingScreen />`

Basically, `react-native-onboarding-template` is a pre-made Screen/Template for you to use in React Native Apps, It is very simple to use, just import `<OnboardingScreen />` with your own values to props & get a Onboarding Screen built for your App within seconds.

<div>
    <img src="https://github.com/MhtChawla/glimpse-of-mywork/blob/main/react-native-onboarding-template/Demo.gif" width="350" />
</div>

Default values to `props` are given in `<OnboardingScreen />` (as seen in example above) though you can change yours whichever you wish to, see props at bottom of page. Also if you wish to use the same Font as of (my example above), you can download the fonts from <a href='https://github.com/MhtChawla/react-native-onboarding-template/tree/master/fonts'>here</a> & provide to `headfontFamily, subheadfontFamily & fontFamily` respectively.

# Installation

1. `npm i react-native-onboarding-template` <br>
   or <br>
   `yarn add react-native-onboarding-template`

2. `cd ios && pod install`

# Use

```sh
import OnboardingScreen from 'react-native-onboarding-template'
```

```sh
const App = ({navigation}) => {
  return (
```

```sh
    <OnboardingScreen
      title1="Welcome"
      title2="Document Tools, that you need"
      subtitle1="We're glad that you are here"
      title3="Dochit for everything, edit on your mobile edit on the go!"
      //or other slide props if you wish to give values..
      fontFamily={Fonts.airbnb} //normal variant
      subheadfontFamily={Fonts.airbnbMd} //medium thickness variant
      headfontFamily={Fonts.airbnbBd} //bold thickness variant
      onPressLastButton={() => navigation.navigate('Home')}
     />
```

```sh
  );
};
```

# Props

<table>
<tbody>
<tr>
<td><strong>Name&nbsp;</strong></td>
<td><strong>Description&nbsp;</strong></td>
</tr>
<tr>
<td>title1</td>
<td>change Title of 1st Slide</td>
</tr>
<tr>
<td>subtitle1</td>
<td>change Sub-Title of 1st Slide</td>
</tr>
<tr>
<td>buttontitle1</td>
<td>change Button-Title of 1st Slide</td>
</tr>
<tr>
<td>buttontitle1</td>
<td>change Background Image of 1st Slide</td>
</tr>
<tr>
<td>title1Style</td>
<td>styling to title1</td>
</tr>
<tr>
<td>subtitle1Style</td>
<td>styling to subtitle1</td>
</tr>
<tr>
<td>buttontitle1Style</td>
<td>styling to buttontitle1</td>
</tr>
<tr>
<td>title2</td>
<td>change Title of 2nd Slide</td>
</tr>
<tr>
<td>subtitle2</td>
<td>change Sub-Title of 2nd Slide</td>
</tr>
<tr>
<td>buttontitle2</td>
<td>change Button-Title of 2nd Slide</td>
</tr>
<tr>
<td>image2</td> 
<td>change Background Image of 2nd Slide</td>
</tr>
<tr>
<td>title2Style</td>
<td>styling to title2</td>
</tr>
<tr>
<td>subtitle2Style</td>
<td>styling to subtitle2</td>
</tr>
<tr>
<td>buttontitle2Style</td>
<td>styling to buttontitle2 </td>
</tr>
<tr>
<td>title3</td>
<td>change Title of 3rd Slide</td>
</tr>
<tr>
<td>subtitle3</td>
<td>change Sub-Title of 3rd Slide</td>
</tr>
<tr>
<td>buttontitle3</td>
<td>change Button-Title of 3rd Slide</td>
</tr>
<tr>
<td>image3</td>
<td>change Background Image of 3rd Slide</td>
</tr>
<tr>
<td>title3Style</td>
<td>styling to title3</td>
</tr>
<tr>
<td>subtitle3Style</td>
<td>styling to subtitle3</td>
</tr>
<tr>
<td>buttontitle3Style</td>
<td>styling to buttontitle3</td>
</tr>
<tr>
<td>buttonTextStyle</td>
<td>common styling to Title of all buttons</td>
</tr>
<tr>
<td>headfontFamily</td>
<td>give fontFamily of (bold thickness variant)</td>
</tr>
<tr>
<td>subheadfontFamily</td>
<td>give fontFamily of (medium thickness variant)</td>
</tr>
<tr>
<td>fontFamily</td>
<td>give fontFamily of (normal thickness variant)</td>
</tr>
<tr>
<td>hideNextIconButton</td>
<td>hides the next arrow icon of all buttons</td>
</tr>
<tr>
<td>agreementStatement</td>
<td>change text before Terms & Privacy links of 3rd Slide, This prop doesn't work if you have used prop 'subtitle3' already</td>
</tr>
<tr>
<td>onPressTerms</td>
<td>onPress function on Terms link of 3rd Slide</td>
</tr>
<tr>
<td>onPressPrivacyPolicy</td>
<td>onPress function on PrivacyPolicy link of 3rd Slide</td>
</tr>
<tr>
<td>onPressLastButton</td>
<td>onPress function on Button of 3rd Slide</td>
</tr>
<tr>
<td>themeColor</td>
<td>changes main theme color for e.g. theme color for above example is lavendar, so you can provide a color code here & all lavendar colored components will be replaced with your colorcode.</td>
</tr>
</tbody>
</table>

Contact me at mohit.chawla@workmail.com

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/mohit.chawla)
