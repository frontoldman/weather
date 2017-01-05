/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import EventList from './EventList.js'

export default class cto extends Component {
  _onPressButton() {

  }

  onPressLearnMore() {

  }

  handleEvent() {
    const { navigator } = this.props
    if(navigator) {
      navigator.push({
          name: 'SecondPageComponent',
          component: EventList
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconList} onPress={this._onPressButton}>
            <Image
              style={styles.iconImg}
              source={require('../img/line-3.png')}
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
        <View style={styles.temperature}>
          <Text style={styles.temperatureText}>21°</Text>
          <Text style={styles.placetext}>Now in Tyumen</Text>
        </View>
        <View style={styles.casts}>
          <TouchableOpacity style={styles.cast}>
            <Image
              style={styles.castImg}
              source={require('../img/forecast.png')}
              resizeMode='contain'
            />
            <Text style={styles.annotation}>FORECAST</Text>
            <Text style={styles.castDetail}>Rainy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cast}>
            <Image
              style={styles.castImg}
              source={require('../img/wind.png')}
              resizeMode='contain'
            />
            <Text style={styles.annotation}>WIND</Text>
            <Text style={styles.castDetail}>14 Km/h, W</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cast}>
            <Image
              style={styles.castImg}
              source={require('../img/humidirt.png')}
              resizeMode='contain'
            />
            <Text style={styles.annotation}>HUMIDIRT</Text>
            <Text style={styles.castDetail}>82%</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.mainText} numberOfLines={2}>You better put on your old cloak, and take an umbrella, as a li</Text>
        </View>

        <View style={styles.eventContainer}>
          <TouchableOpacity onPress={this.handleEvent.bind(this)}>
            <View style={styles.eventBtn}>
              <Text style={styles.btnText}>17 Events to go today</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingRight: 80/3,
    paddingTop: 80/3
  },
  iconList: {
    height: 50/3,
    width: 62/3,
    alignSelf: 'flex-end'
  },
  iconImg: {
    height: 50/3,
    width: 62/3,
  },
  temperature: {
    flex: 40,
    justifyContent: 'center'
  },
  temperatureText: {
    fontSize: 400/3,
    color: '#3e4b9d',
    textAlign: 'center',
  },
  placetext: {
    color: '#595970',
    textAlign: 'center',
    position: 'relative',
    top: -20
  },
  casts: {
    flex: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cast: {
    alignItems: 'center'
  },
  castImg: {
    width: 82/3,
    height: 75/3,
  },
  annotation: {
    fontSize: 8,
    color: '#a4a4ca',
    marginTop: 12
  },
  castDetail: {
    color: '#3e4b9d'
  },
  mainContent: {
    flex: 13,
    paddingLeft: 20,
    paddingRight: 20,
  },
  mainText: {
    color: '#595970',
    fontSize: 20,
    textAlign: 'center'
  },
  eventContainer: {
    flex: 23,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  eventBtn: {
    width: 800/3,
    height: 150/3,
    backgroundColor: '#18af7b',
    justifyContent: 'space-around'
  },
  btnText: {
    textAlign: 'center',
    color: '#fff'
  }
});

