# Step 10 ES6 Way

copy everything from step 09

`npm install`

`npm start`

check file title.js: 
create Title component with H1 element with its text = this.props.title

check Header.js:
Header component: 
1) use Title component; 
2) pass title prop; 
3) passed value = this.props.title; 
4) has input element;
5) input element has onChange event;
6) event handleing function call this.props.changeTitle function

Layout component: 
1) use Header component; 
2) component can use constructor to set state;
3) create changeTitle method;
4) when Layout component use Header component, pass changeTitle and title props;
5) eventually setState get called;

index.js use Layout component