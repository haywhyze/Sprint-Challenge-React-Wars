# Answers

1. What is React JS and what problems does it try and solve?
   - ReactJS is a Javascript library that allows for easy development of web apps user interfaces using simple, declarative and reusable components.
   - The problems React JS tries to solve can be classified as follows:
     - DOM manipulation in large web applications that depends on very dynamic data can be expensive and thus affects performance. React tries to solve this by providing a virtual DOM to operate on and then compares with the real DOM, and then does the minimum DOM manipulation to arrive at a new state.
     - Traditionally, building a large frontend web application requires a lot of objects that have individual states and interacting with each other in different ways. This is hard to maintain and also difficult to trace bugs. In contrast, a well thought out React App have it's state mostly constrained to a single place. As a result, the app is made up of ordinary functions that react to the state changing, and sends the result to React to re-render the components involved. This flow of execution and data binding is a lot easier to think about and trace bugs if possible.

2. What does it mean to _think_ in react?
   - Thinking in react involves reasoning about the app from mock up to completion in well structured manner to fully utilize the advantanges React offers. If you are to think in React, these steps could serve as a guide:
     - Start with a mock of the data model and the design and visualize how each relates.
     - Next, is to break the user interface (the design mock up) into reusable simple components using the single responsibilty principle.
     - After identifying the components, you should build out a static version of the app with a view to match the design mock up if available.
     - Identify the minimum representation of your application's UI state to add interactivty.
     - Identify wher the state would live. Ideally, state should live in the highest possible hierachy. For instatnce if two component shares a state, the state should live at least a level above them to give both of them access to the state.
     - When data flows through the app via components higher up the hierachical tree to children components using props, it would make sense to also add an inverse data flow so that components deep in the hierarchy can update the state that lives in a parent container.

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
   - A stateful component would contain state while an ordinary presentational component will not.
   - A stateful component as a result of the access to a state store can be interactive while a presentational component is basically static and its dynamicity is based on props it is passed.

4. Describe state.
   - State in react is an object that determines how that component renders & interact with other components.

5. Describe props.
   - Props is short for properties, and it can best be described as a way of passing data from component to component, essentially from parent to child components.
