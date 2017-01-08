# Step 07 input refs

copy everything from step 06

`npm install`

`npm start`

Add new additem.css

Implement new component in addItem.js: 1) use ref to pass input value to event handler; 
2) event handler preventDefault;
3) event handler call the passed in onAdd props and pass the refs value passed by input;

Modify index.js to: 1) add new additem componenent; 
2) create new function onAdd;
3) pass new props onAdd for new additems component;
