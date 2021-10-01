import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      button: 'Iniciar',
      last: null
    };

    this.timer = null;

    this.start = this.start.bind(this);
    this.toClean = this.toClean.bind(this);
  }

  start(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({button: 'Iniciar'});
    } else {
      this.timer = setInterval( () => {
        this.setState({number: this.state.number + 0.1})
      }, 100);
      this.setState({button: 'Parar'})
    }
  }

  toClean(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      last: this.state.number,
      number: 0, 
      button: 'Iniciar'});
  }

  render(){

    return(
      <View style={styles.container}>
        <Image style={styles.chronometer}
          source={require('./src/cronometro.png')}
        />

        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={this.start}>
          <Text style={styles.textButton}>{this.state.button}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.toClean}>
            <Text style={styles.textButton}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.time}>
          <Text style={styles.text}> 
            {this.state.last > 0 ? `Último tempo: ${this.state.last.toFixed(2)}s` : '' }
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  buttonArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  }, 
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  time: {
    marginTop: 40
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default App;