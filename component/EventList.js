import React, { Component } from 'react';
import { 
  StyleSheet,
  View, 
  Text,
  Image,
  ListView,
  Alert,
  TouchableOpacity
} from 'react-native';
import Detail from './Detail'

var itemData = {
  img: require('../img/test.png'),
  time: '14:00',
  name: 'Cinema',
  price: '160 RUB',
  title: 'Me Before You',
  content: 'A girl in a town forms an unlikely bond with a paralyzed man sh',
  addressImg: require('../img/address.png'),
  address: 'Cinema Park, Gudvin'
}
var itemDataJson = JSON.stringify(itemData)

export default class MyScene extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    var data = []
    for(var i = 0;i < 2000;i++){
      data.push(JSON.parse(itemDataJson))
    }

    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }

  static defaultProps = {
    
  };

  handleDetailEvent() {
    const { navigator } = this.props
    if(navigator) {
      navigator.push({
          name: 'DetailComponent',
          component: Detail
      })
    }
  }

  handleBack() {
    const { navigator } = this.props
    if(navigator) {
      navigator.pop()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={{width: 100/3}} onPress={this.handleBack.bind(this)}>
            <Image
              style={styles.back}
              source={require('../img/back.png')}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 62/3}}>
            <Image
              style={styles.iconList}
              source={require('../img/line-3.png')}
              resizeMode='contain'
              />
          </TouchableOpacity>
        </View>
        <View>
          <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => {
                  return (
                      <TouchableOpacity onPress={this.handleDetailEvent.bind(this)} style={styles.liItem}>
                        <View style={styles.leftImgContent}>
                          <Image 
                          style={styles.listImg}
                          source={rowData.img}
                          resizeMode='contain'
                          />
                          <View style={styles.time}>
                            <Text style={styles.timeText}>{rowData.time}</Text>
                          </View>
                        </View>
                        <View style={styles.rightContent}>
                          <View style={styles.nameContent}>
                            <Text style={styles.name}>{rowData.name}</Text>
                            <Text style={styles.price}>{rowData.price}</Text>
                          </View>
                          <View style={styles.title}>
                            <Text style={styles.titleText}>{rowData.title}</Text>
                          </View>
                          <View style={styles.content}>
                            <Text style={styles.contentText} numberOfLines={2}>{rowData.content}</Text>
                          </View>
                          <View style={styles.addressContent}>
                            <Image 
                              source={rowData.addressImg}
                              resizeMode='contain'
                              style={styles.addressImg}
                            />
                            <Text style={styles.address}>{rowData.address}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    )
                }}
              />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    padding: 80/3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  back: {
    width: 100/3,
    height: 48/3
  },
  iconList: {
    height: 50/3,
    width: 62/3,
  },
  liItem: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  listImg: {
    width: 260/3,
    height: 260/3
  },
  leftImgContent: {
    flex: 3,
    alignItems: 'center'
  },
  time: {
    backgroundColor: '#3e4b9d',
    width: 160/3,
    height: 72/3,
    justifyContent: 'center',
    marginTop: -72/3/2
  },
  timeText: {
    color: '#fff',
    textAlign: 'center'
  },
  rightContent: {
    flex: 7,
    marginLeft: 20
  },
  nameContent: {
    flexDirection: 'row'
  },
  name: {
    color: '#a4a4ca'
  },
  price: {
    color: '#18af7b',
    marginLeft: 30
  },
  title: {
    marginTop: 5
  },
  titleText: {
    color: '#3e4b9d',
    fontSize: 50/3
  },
  contentText: {
    color: '#595970'
  },
  addressContent: {
    flexDirection: 'row',
    marginTop: 5
  },
  addressImg: {
    width: 17/2,
    height: 24/2,
    marginTop: 2
  },
  address: {
    marginLeft: 10
  },
  
})