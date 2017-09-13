# KitchenFox
[Demo Site](https://kitchenfox.site/)

## Overview
KitchenFox, an Android and iOS mobile app, helps you visualize your kitchen's inventory and recommends recipes based on what you have.

Users can keep track of their groceries and produce using the barcode scanning tool. They can easily update and delete items that are no longer desired and or expired.

Our team's mission is to optimize people's daily lives by providing a simple tool that reduces food waste by keeping track on inventory items. Cook your favorite ingredients with ease!

![overview_image](./docs/images/kf-previews.png)

### Adding ingredients
![adding_an_ingredient](./docs/images/KF-adding-ingredients.gif)

### Updating ingredients
![updating_an_ingredient](./docs/images/KF-updating-ingredients.gif)


## Technologies
  KitchenFox's frontend utilizes React Native with a Redux architecture for efficient and unidirectional data management. 
  
  It pairs a Node/Express backend and MongoDB. MongoDB allows us to build a scalable, high-performance, open source, schema-free, document-oriented database.

  Third Party APIs involved:
   + [Edamam](http://developer.edamam.com/edamam-docs-recipe-api)
      - allows for recipe search using ingredients
   + [Nutritionix](https://developer.nutritionix.com/docs/v1_1#/nutritionix_api_v1_1)
      - fetch food item information with UPC code

## Features
  ### JWT Token Authentication
  + Generating and storing JWT tokens using Async Storage on the local device helped bootstrap the user to the application. Passport.js was utilized to verify the token and also fetch the appropriate user's collection.

  ### Barcode Scanning Tool
  + With the react-native-camera library, KitchenFox allows the user to user their phone's camera to scan item barcode to populate the inventory. (Manual input of ingredients also possible.)

  ``` javascript

  onBarCodeRead(e) {
    const newItems = Object.assign(this.state.items);
    let newItem;
    this.setState({ showCamera: false });
    upcLookUp(e.data, this.props.session.token).then((res) => {
      newItem = JSON.parse(res._bodyText);
      newItem = newItem[0];
      if (newItem.quantity === 1) {
        newItem.units = 'each';
      }
      this.handleCardUpdate(this.state.camIdx, newItem);
    });
    Alert.alert(
        "Barcode Found!",
        "Type: " + e.type + "\nData: " + e.data
    );
  }

  render() {
    if (this.state.showCamera) {
      return (
        <View style={camera.container}>
        <Text style={text.titleScanner}>
          scan the barcode
        </Text>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={camera.preview}
          aspect={Camera.constants.Aspect.fill}
          orientation={Camera.constants.Orientation.portrait}
          barCodeTypes={['org.gs1.UPC-E']}
          onBarCodeRead={this.onBarCodeRead}>
          <Text style={text.scanner}>here</Text>
          <View style={camera.square}>
          </View>
        </Camera>
        </View>
      );
    }
  }

  ```

  ### Fetching Recipes using inventory items

   + Users have the options to get recommended recipes by selecting specific items in their inventory or using their entire inventory.


   + Recipes results page display 5 recommended recipes with a clickable image with overlayed title that opens up a browser page with the detailed recipe.

  ``` javascript

  //  Recipe Index Component
  fetchRecipes(query) {
    this.setState({spinner: true});
    if (query === "all") {
    getRecipes(5, null, this.props.session.token).then((res) => {
      this.setState({recipes: JSON.parse(res._bodyText)});
      this.setState({spinner: false});
    });
  } else {
    getRecipes(5, (Object.values(this.state.query).join("+")), this.props.session.token).then((res) => {
      this.setState({recipes: JSON.parse(res._bodyText)});
      this.setState({spinner: false});
    });
    }
  }

  //  Recipe API call
  export const createQuery = (result) => {
      let query = "";
      let units;
      Object.values(result.inventory).map((entry, idx) => {
        if (entry.units === "each") {
          units = "";
        } else{
          units = entry.units;
        }
        query = query + `${entry.name}+`;
      });
    return query.slice(0, -1);
  };

  export const apiCall = (number, query) => {
    return new Promise((resolve, reject) => {
      const request = http.get(`http://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&to=${number}`, (res) => {

        // other code
        res.setEncoding('utf8');
        let rawData = '';
        let recipeinfo = [];
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            parsedData.hits.map((recipe, idx) => {
              recipeinfo.push({
                label: recipe.recipe.label,
                url: recipe.recipe.url,
                image: recipe.recipe.image,
                ingredients : recipe.recipe.ingredients
              });
            });
          // });
          } catch (e) {
            reject(e);
          }
          resolve(recipeinfo);
        }
    // other code
    }}
  };

  ```

   + The API call is designed so that fetching recipes with a specific query from the front end, or getting the entire inventory from the backend and parsing that as a query.


 <p align="center">
 <img src = "/docs/recipes.png">
 </p>

## Future Features
  There are a number of bonus features that would greatly enhance the user's experience:

  + Add Receipt parsing functionality with OCR
  + Deploy app to Google Play and App Store
  + Connect with Amazon via affiliate link for items low in stock
  + Suggest a meal plan for the week based on food inventory
  + Include Carbon footprint and nutrition data for grocery items
