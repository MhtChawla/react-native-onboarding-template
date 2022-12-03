import React, {useRef} from 'react';
import Swiper from './swiper';
import {
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
  Text as Text1,
} from 'react-native';
import {widthToDp as wp} from './responsive-ui';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const OnboardingScreen = props => {
  const {
    title1 = 'Welcome', //change Title of 1st Slide 
    subtitle1 = `We're glad that you${'\n'}are here`, //change Sub-Title of 1st Slide
    buttontitle1 = "Let's get you started", //change Button-Title of 1st Slide
    image1 = {
      uri: 'https://github.com/RawMaterialforProjects/Raw-Media/blob/main/images/onboard1.jpg?raw=true',
    }, //change Background Image of 1st Slide

    title1Style, //styling to title1
    subtitle1Style, //styling to subtitle1
    buttontitle1Style, //styling to buttontitle1

    title2 = 'Document Tools, that you need', //change Title of 2nd Slide
    subtitle2 = `Translate, Merge, Convert, Check n Remove Plagrism, Extract Text${'\n'}ALL AT ONE PLACE !`, //change Sub-Title of 2nd Slide
    buttontitle2 = 'Next', //change Button-Title of 2nd Slide
    image2 = {
      uri: 'https://github.com/RawMaterialforProjects/Raw-Media/blob/main/images/onboard2.jpg?raw=true',
    }, //change Background Image of 2nd Slide

    title2Style, //styling to title2
    subtitle2Style, //styling to subtitle2
    buttontitle2Style, //styling to buttontitle2 

    title3 = 'Dochit for everything, edit on your mobile edit on the go!', //change Title of 3rd Slide
    subtitle3, //change Sub-Title of 3rd Slide
    buttontitle3 = "Let's Edit", //change Button-Title of 3rd Slide 
    image3 = {
      uri: 'https://github.com/RawMaterialforProjects/Raw-Media/blob/main/images/onboard3.jpg?raw=true',
    }, //change Background Image of 3rd Slide

    title3Style, //styling to title3
    subtitle3Style, //styling to subtitle3
    buttontitle3Style, //styling to buttontitle3

    buttonTextStyle, //common styling to Title of all buttons

    headfontFamily, //give fontFamily of (bold thickness variant)
    subheadfontFamily, //give fontFamily of (medium thickness variant)
    fontFamily, //give fontFamily of (normal thickness variant)

    hideNextIconButton, //hides the next arrow icon of all buttons

    agreementStatement = 'By continuing, you agree to our', //change text before Terms & Privacy links of 3rd Slide, This prop doesn't work if you have used prop 'subtitle3' already
    onPressTerms, //onPress function on Terms link of 3rd Slide
    onPressPrivacyPolicy, //onPress function on PrivacyPolicy link of 3rd Slide

    onPressLastButton, //onPress function on Button of 3rd Slide

    themeColor = '#715ec5', //changes main theme color for e.g. theme color for above example is lavendar, so you can provide a color code here & all lavendar colored components will be replaced with your colorcode.
  } = props;
  const CustomButton = ({style, text, onPress}) => {
    return (
      <Pressable
        onPress={onPress}
        style={{
          backgroundColor: themeColor,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          ...style,
        }}>
        <Text1
          style={{
            fontStyle: 'italic',
            fontWeight: '600',
            fontSize: wp(23),
            color: '#FFFFFF',
            paddingTop: 2,
            paddingBottom: 2,
            ...buttonTextStyle,
          }}>
          {text}
        </Text1>
        {!hideNextIconButton && <View style={{padding: 4}} />}
        {!hideNextIconButton && (
          <Image
            source={{
              uri: 'https://github.com/RawMaterialforProjects/Raw-Media/blob/main/icons/rightarrow@3x.png?raw=true',
            }}
            style={{height: 18, width: 18, marginLeft: 1, marginRight: 2}}
          />
        )}
      </Pressable>
    );
  };

  const pressHandler = no => {
    no < 3 && swipeRef.current.scrollTo(no, true);
  };
  const FirstScreen = () => {
    return (
      <ImageBackground
        resizeMode="cover"
        source={image1}
        style={[Styles.bgImg, {zIndex: 0}]}>
        <Text1
          style={{
            color: themeColor,
            fontFamily: subheadfontFamily,
            fontSize: wp(58),
            marginTop: 8,
            marginBottom: 8,
            fontWeight: subheadfontFamily ? 'normal' : '600',

            ...title1Style,
          }}>
          {title1}
        </Text1>

        <View style={{padding: 4}} />

        <Text1
          style={{
            color: '#030200',
            fontFamily: fontFamily,
            fontSize: wp(24),
            paddingLeft: 4,
            lineHeight: 39.5,
            ...subtitle1Style,
          }}>
          {subtitle1}
        </Text1>
        <View style={{zIndex: 2, marginTop: 'auto', marginBottom: 48}}>
          <CustomButton
            onPress={() => pressHandler(1)}
            text={buttontitle1}
            style={{alignSelf: 'flex-end', zIndex: 2, ...buttontitle1Style}}
          />
        </View>
      </ImageBackground>
    );
  };
  const SecondScreen = () => {
    return (
      <ImageBackground
        resizeMode="cover"
        source={image2}
        style={[Styles.bgImg, {flexDirection: 'column'}]}>
        <View
          style={[
            Styles.bgImg,
            {
              position: 'absolute',
              width: width,
              height: height,
              backgroundColor: 'rgba(3,2,0,0.1)',
              flex: 1,
            },
          ]}>
          <Text1
            style={[
              Styles.boxWithShadow,
              {
                marginTop: 8,
                color: '#FFFFFF',
                fontFamily: headfontFamily,
                fontSize: wp(34),
                lineHeight: 55,
                fontWeight: headfontFamily ? 'normal' : '700',
                ...title2Style,
              },
            ]}>
            {title2}
          </Text1>

          <View style={{padding: 4}} />

          <View
            style={{
              padding: 8,
              marginTop: 'auto',
              borderRadius: 3,
              opacity: 1,
              justifyContent: 'flex-end',
            }}>
            <CustomButton
              onPress={() => pressHandler(2)}
              text={buttontitle2}
              style={{
                alignSelf: 'flex-end',
                paddingLeft: 40,
                paddingRight: 40,
                alignSelf: 'flex-start',
                marginBottom: 12,
                ...buttontitle2Style,
              }}
            />
            <View
              style={{
                paddingLeft: 8,
                borderLeftWidth: 5,
                borderLeftColor: themeColor,
              }}>
              <Text1
                style={[
                  Styles.boxWithShadow,
                  {
                    color: '#FFFFFF',
                    fontFamily: headfontFamily,
                    fontSize: wp(25),
                    paddingLeft: 4,
                    lineHeight: 41,
                    fontWeight: headfontFamily ? 'normal' : '700',
                    ...subtitle2Style,
                  },
                ]}>
                {subtitle2}
              </Text1>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };
  const ThirdScreen = () => {
    return (
      <ImageBackground
        resizeMode="cover"
        source={image3}
        style={[Styles.bgImg, {flexDirection: 'column'}]}>
        <View style={{marginTop: 'auto'}}>
          <Text1
            style={[
              Styles.boxWithShadow,
              {
                color: '#FFFFFF',
                fontFamily: headfontFamily,
                fontSize: 35,
                lineHeight: 52.5,
                fontWeight: headfontFamily ? 'normal' : '700',
                ...title3Style,
              },
            ]}>
            {title3}
          </Text1>

          <View style={{marginBottom: 48, marginTop: 20}}>
            <CustomButton
              onPress={onPressLastButton}
              text={buttontitle3}
              style={{...buttontitle3Style}}
            />
          </View>
          {subtitle3 ? (
            <Text1
              style={{
                marginTop: -40,
                fontSize: wp(11),
                textAlign: 'center',
                fontFamily: subheadfontFamily,
                fontWeight: subheadfontFamily ? 'normal' : '600',

                color: 'black',
                ...subtitle3Style,
              }}>
              {subtitle3}
            </Text1>
          ) : (
            <Text1
              style={{
                marginTop: -40,
                fontSize: wp(11),
                textAlign: 'center',
                fontFamily: subheadfontFamily,
                fontWeight: subheadfontFamily ? 'normal' : '600',

                color: 'black',
                ...subtitle3Style,
              }}>
              {agreementStatement}
              <Text1> </Text1>
              <Text1
                style={{
                  fontSize: wp(11),
                  color: 'black',
                  fontFamily: headfontFamily,
                  fontWeight: headfontFamily ? 'normal' : '700',

                  textDecorationLine: 'underline',
                }}
                onPress={onPressTerms}>
                Terms
              </Text1>
              <Text1> </Text1>&<Text1> </Text1>
              <Text1
                style={{
                  fontSize: wp(11),
                  color: 'black',
                  fontFamily: headfontFamily,
                  textDecorationLine: 'underline',
                  fontWeight: headfontFamily ? 'normal' : '700',
                }}
                onPress={onPressPrivacyPolicy}>
                Privacy Policy
              </Text1>
            </Text1>
          )}
        </View>
      </ImageBackground>
    );
  };
  const swipeRef = useRef(null);
  return (
    <View style={{flex: 1, backgroundColor: '#f4efff'}}>
      <Swiper removeClippedSubviews={false} ref={swipeRef} loop={false}>
        <FirstScreen />
        <SecondScreen />
        <ThirdScreen />
      </Swiper>
    </View>
  );
};

export const Styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    padding: '10%',
    paddingTop: '20%',
    paddingBottom: '20%',
  },
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default OnboardingScreen;
