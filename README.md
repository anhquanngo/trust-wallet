## Set Enviroment
+ react-native link
# Set react-native-vector-icon
# Android
# Option: With Gradle (recommended)
This method has the advantage of fonts being copied from this module at build time so that the fonts and JS are always in sync, making upgrades painless.

Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
To customize the files being copied, add the following instead:

project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

#Build App
$ cd android
$ ./gradlew assembleRelease

#Clean
$ cd android
$ ./gradlew clean