## KitchenFox
KitchenFox is a mobile application that keeps track of user’s food inventory. It allows users to update their inventory by scanning receipt and barcode.   

### Functionality & MVP
KitchenFox will provide the following Functionality to users.
- [ ] User authentication (new account creation, login, logout).
- [ ] Create, view, update and delete food inventory.
- [ ] Scan barcode to update inventory.
- [ ] Display recipes available based the user’s food inventory.



### Wireframes
+ [wireframes](./wireframes/)


### Architecture and Technologies
**Express.js**
**Node.js**
**MongoDB with Mongoose (ORM)**
**react-native-camera**: For barcode scanning on Android and iOS ([link to react-native-camera's repo](https://github.com/lwansbrough/react-native-camera/blob/master/README.md))
**UPC Database**: After a user scans a barcode, the information from the barcode will be queried against this [UPC Database](https://upcdatabase.org) to return the product name on the add item to food inventory screen


### Implementation Timeline  
#### Day 1:
Users can sign up, login and logout.
*Backend auth*: Graham and Cherry
*Frontend auth*: Kevin and Hiro

#### Day 2 - 4:
Create, view, update and delete inventory from users input.
*Backend*: Barcode scan update inventory, Manual input update inventory
*Frontend*: Update kitchen dashboard, Index page for update, update form and learn, Implement barcode scanning API

*Backend*: Barcode scan update inventory, Manual input update inventory (Graham and Cherry)
*Frontend*: Update kitchen dashboard, Index page for update, update form, learn, Implement barcode scanning API (Kevin and Hiro)

#### Day 5 - 6:
Display recipe
*Backend*: fetch/hit recipe api, parse info needed for frontend
		Update Inventory based on selected recipe
*Frontend*: Display recipe based on relevant info

#### Day 7:
*Frontend*: app dash board (alerts for low-inventory items)
*Polish user experience and touch-up styling*
		Update Inventory based on selected recipe(Graham and Cherry)
*Frontend*: Display recipe based on relevant info(Kevin and Hiro)

#### Day 7:
*Frontend*: app dash board (alerts for low-inventory items)
Polish user experience and touch-up styling (all)

### Bonus Features
- [ ] Use Receipt to update inventory
- [ ] Connect with Amazon via affiliate link for items low in stock
- [ ] Shopping list
- [ ] Notification reminders when food items are close to expiring
- [ ] Suggest a meal plan for the week based on food inventory
- [ ] Allow users to save, edit, and view selected meal plans for the week
- [ ] Sharing shopping lists between users.  
- [ ] Estimation of carbon footprint and environmental impact based on purchase.
- [ ] Parse voice to text to update inventory.
- [ ] Alexa / Google Home integration to update kitchen inventory via voice commands
- [ ] Nutrition tracking
- [ ] Sharing shopping lists between users
- [ ] Estimation of carbon footprint and environmental impact based on purchase
