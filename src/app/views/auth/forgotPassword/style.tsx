import { Dimensions } from "react-native";

const React = require("react-native");
const { StyleSheet } = React;
const window = Dimensions.get('window');

export default StyleSheet.create({
    container: {
       width: window.width,
        padding: 20
    }
});