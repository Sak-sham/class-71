import React, { Component } from 'react'
import BottomTabNavigator from './components/BottomTabNavigator'
import { Rajdhani_600SemiBold } from '@expo-google-fonts/rajdhani';
import * as Font from "expo-font"

export default class App extends Component {
  constructor() {
    super()
    this.state = { fontLoaded: false }
  }

  async LoadFonts() {
    await font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    })
    this.setState({
      fontLoaded: true
    })
  }

  componentDidMount() {
    this.LoadFonts()
  }

  render() {
const{fontLoaded}=this.state
  if (fontLoaded){
    return
      <BottomTabNavigator />}
      return null
    
  }
}
