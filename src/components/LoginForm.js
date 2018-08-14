import React, { Component } from 'react'
import { Card, CardSection, Input, Button, Spinner } from './common'; 
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { View, Text } from 'react-native'; 


class LoginForm extends Component {

  onEmailChange(text){
    this.props.emailChanged(text); 
  }

  onPasswordChange(text){
    this.props.passwordChanged(text); 
  }

  onButtonPress() {
    const { email, password } = this.props; 
    this.props.loginUser({ email, password })
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ bacgroundColor: 'white' }} >
          <Text style={style.errorTextStyle}>
            {this.props.error}
          </Text>
        </View> 
      )
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />; 
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        
        <CardSection> 
          <Input 
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection> 

        <CardSection> 
          <Input 
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          />
        </CardSection> 

        {this.renderError()} 

        <CardSection> 
          { this.renderButton() }
        </CardSection> 

      </Card>
    )
  }
}

// map state to props to get a piece of state into component 
// const mapStateToProps = (state) => {
//   return {
//     email: state.auth.email, 
//     password: state.auth.password,
//     error: state.auth.error
//   }
// }

const mapStateToProps = ({ auth }) => {  // destructuring out the auth from state 
  const { email, password, error, loading } = auth; 
  return { email, password, error, loading }
}


export default connect(mapStateToProps, { 
  emailChanged, passwordChanged, loginUser 
})(LoginForm); 

const style = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red', 
    textAlign: 'center',
    margin: 10
  }
}