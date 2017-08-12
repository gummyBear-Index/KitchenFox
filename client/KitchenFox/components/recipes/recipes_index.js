import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';

const cards = [
  {
    text: 'Card One',
    name: 'One',
  },
];

class RecipesIndex extends React.Component {
  static navigationOptions = {
    title: 'Recipes',
  };

  render() {
    return (
      <Container>
        <Text>Recipes will go here!</Text>
      </Container>
    );
  }
}

export default RecipesIndex;

//       <Header />
//         <View>
//           <DeckSwiper>
//               <View style={{ alignSelf: "center" }}>
//                 <Text>Over</Text>
//               </View>
//               <Card style={{ elevation: 3 }}>
//                 <CardItem>
//                   <Left>
//                     <Thumbnail />
//                     <Body>
//                       <Text>hey text</Text>
//                       <Text note>NativeBase</Text>
//                     </Body>
//                   </Left>
//                 </CardItem>
//                 <CardItem cardBody>
//                   <Image style={{ height: 300, flex: 1 }} />
//                 </CardItem>
//                 <CardItem>
//                   <Icon name="heart" style={{ color: '#ED4A6A' }} />
//                   <Text>Hey more text</Text>
//                 </CardItem>
//               </Card>
//             </DeckSwiper>
//         </View>
//         <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
//           <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
//             <Icon name="arrow-back" />
//             <Text>Swipe Left</Text>
//           </Button>
//           <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
//             <Icon name="arrow-forward" />
//             <Text>Swipe Right</Text>
//           </Button>
//         </View>
