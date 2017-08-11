import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, View } from 'native-base';

class AddItemCard extends Component {
  return (
    <Container>
      <View style={session.container}>
        <View
          style={session.content}>
            <Text style={text.titleLeft}>Sign In</Text>
          <InputGroup style={input.field}>
            <Icon name='ios-person' />
            <Input
              placeholder='Email'
              keyboardtype='email-address'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
          </InputGroup>
          <InputGroup style={input.field}>
            <Icon name='ios-unlock' />
            <Input
              placeholder='Password'
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              secureTextEntry
            />
          </InputGroup>
          {this.state.isLoading ? (
            <Spinner size="small" color="#000000" />
          ) : (
            <Button
              style={button.sessionButton}
              onPress={() => this.handleSignin()}
            >
              <Text>SIGN IN</Text>
            </Button>
          )}
        </View>
      </View>
    </Container>
  );
}

export default AddItemCard;



// <div className="perk-card">
//   <div className="perk-price">${props.price}</div>
//   <div className="perk-title">{props.title}</div>
//   <div className="perk-description">{props.description}</div>
//   <div onClick={() => props.updateParent(amount)} className="perk-get">get this perk</div>
// </div>
