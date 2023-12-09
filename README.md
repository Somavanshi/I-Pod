
You can start project with following commands:
### `npm install`

### `npm start`

### `npm run build`

you are ready for it.


Ipod Wheel

Welcome to the Wheel UI project! Follow the steps below to design an interactive wheel-based user interface using HTML, CSS, and the ZingTouch library.

Step 1: Design Wheel UI
Create a wheel interface using HTML and CSS. Utilize the position: absolute property to position various divs on top of the wheel div. Your initial design should resemble the provided example. Feel free to enhance the CSS later for a polished look.

Step 2: Add Event Listener for Rotation
Incorporate the ZingTouch library (https://zingchart.github.io/zingtouch/) to capture rotation events. Use the library's rotate event to log rotation movements on the console as you move around the wheel.

Step 3: Add List and Side Menu
Implement a separate screen component that contains a side menu and display area. Apply an active class to one of the list items for a distinctive background color. Your layout should resemble the provided example.

Step 4: Change Active Menu Item Using Wheel
Utilize the ZingTouch rotate event to change the active menu item based on the angle of rotation. Adjust the active item menu when the angle changes by more than 15 degrees. Make sure to include draggable: false to prevent drag when clicking and moving the mouse pointer.

Step 5: Handling Click on Menu Item
Implement functionality to hide the menu and display another component when a menu item is clicked. The displayed component should depend on the menu option selected by the user.

Step 6: Add onClick on Menu Button
Add an event listener to the MENU button to enable navigation back to the home page from, for example, /songs.

Step 7: Improve UI
Focus on refining the CSS to enhance the overall user interface. Consider adding different screens corresponding to various routes for a more dynamic user experience.

Final Result
After completing these steps, your project should have a sleek and interactive wheel-based UI. The user should be able to navigate through different menu items, trigger actions on click, and seamlessly transition between screens. The final UI should resemble the provided example for a polished and user-friendly experience.