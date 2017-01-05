
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

export default class MyScene extends Component {
	
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

					<View style={styles.sliderContent}>
						<Image 
							source={require('../img/slider.png')}
							resizeMode='cover'
							style={styles.slider}
							/>
					</View>
					<View style={styles.content}>
						<View style={styles.notice}>
							<Text style={styles.n1}>show</Text>
							<Text style={styles.n2}>Free Entry</Text>
						</View>
						<View style={styles.titleContent}>
							<Text style={styles.title}>Red Rocks Tour</Text>
						</View>
						<View style={styles.bigContent}>
							<Text style={styles.contentText}>The sight of the tumblers restored Bob Sawyer to a degree of equanimity which he had not possessed since his interview with his landlady.</Text>
							<Text style={[styles.contentText, {marginTop: 10}]}> His face brightened up, and he began to feel quite convivial.	The dismal man readily complied; a circle was again formed round the table, and harmony once more prevailed. </Text>
						</View>
						<View style={styles.addressContent}>
							<Image 
								source={require('../img/address.png')}
								resizeMode='contain'
								style={styles.address}
							/>

							<Text style={styles.addressText}>Central Boulevard</Text>
						</View>
					</View>
				</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: '#fff',
  },
  header: {
  	zIndex: 2,
  	position: 'absolute',
  	top: 0,
  	left: 0,
		right: 0,
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
  sliderContent: {
  	flexDirection: 'row'
  },
	slider: {
		width: 1200/3,
		height: 960/3
	},
	content: {
		paddingTop: 100/3,
		paddingLeft: 130/3,
		paddingRight: 130/3
	},
	notice: {
		flexDirection: 'row'
	},
	n1: {
		color: '#a4a4ca'
	},
	n2: {
		color: '#18af7b',
		marginLeft: 20
	},
	titleContent: {
		marginTop: 5
	},
	title: {
		color: '#3e4b9d',
		fontSize: 30
	},
	bigContent: {
		marginTop: 5
	},
	contentText: {
		color: '#595970'
	},
	addressContent: {
		marginTop: 30,
		flexDirection: 'row'
	},
	address: {
		width: 17/2,
    height: 24/2,
    marginTop: 2
	},
	addressText: {
    color: '#3e4b9d',
    marginLeft: 10
	}
})