# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Functional Components and Class Components. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency ReactJS Fundamentals and your command of the concepts and techniques in the Function Components and Class Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    Answer -> - ReactJS is a Javascript library that allows for easy development of web apps user interfaces using simple, declarative and reusable components.
   - The problems React JS tries to solve can be classified as follows:
     - DOM manipulation in large web applications that depends on very dynamic data can be expensive and thus affects performance. React tries to solve this by providing a virtual DOM to operate on and then compares with the real DOM, and then does the minimum DOM manipulation to arrive at a new state.
     - Traditionally, building a large frontend web application requires a lot of objects that have individual states and interacting with each other in different ways. This is hard to maintain and also difficult to trace bugs. In contrast, a well thought out React App have it's state mostly constrained to a single place. As a result, the app is made up of ordinary functions that react to the state changing, and sends the result to React to re-render the components involved. This flow of execution and data binding is a lot easier to think about and trace bugs if possible.

- [x] What does it mean to _think_ in react?

    Answer -> Thinking in react involves reasoning about the app from mock up to completion in well structured manner to fully utilize the advantanges React offers. If you are to think in React, these steps could serve as a guide:
     - Start with a mock of the data model and the design and visualize how each relates.
     - Next, is to break the user interface (the design mock up) into reusable simple components using the single responsibilty principle.
     - After identifying the components, you should build out a static version of the app with a view to match the design mock up if available.
     - Identify the minimum representation of your application's UI state to add interactivty.
     - Identify wher the state would live. Ideally, state should live in the highest possible hierachy. For instatnce if two component shares a state, the state should live at least a level above them to give both of them access to the state.
     - When data flows through the app via components higher up the hierachical tree to children components using props, it would make sense to also add an inverse data flow so that components deep in the hierarchy can update the state that lives in a parent container.

- [x] Describe state.

    Answer -> State in react is an object that determines how that component renders & interact with other components.

- [x] Describe props.

    Answer -> Props is short for properties, and it can best be described as a way of passing data from component to component, essentially from parent to child components.

## Project Set Up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add PM as collaborator on Github.
- [x] Clone your OWN version of Repo (Not Lambda's by mistake!)
- [x] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [x] Change directories into `./starwars` (`cd starwars`) and run `yarn install` to retrieve all needed dependencies.
- [x] Once you have installed the _node_modules_, run `yarn start or` to get your server up and running.
- [x] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [x] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [x] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by  merging the branch back into master.

Please note:

- In `App.js`'s `componentDidMount()` method we call the public Star Wars API, which stores the result in the component state.
- Here's an excerpt of that logic:

```js
componentDidMount() {
  this.getCharacters('https://swapi.co/api/people');
}

getCharacters = URL => {
  fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ starwarsChars: data.results });
    })
    .catch(err => {
      throw new Error(err);
    });
};
```

- At a high level, this code is a common way to automatically load data from a remote server into a component.
- View your `App` component's `state` by opening the Chrome `React Dev Tools` to peek at the data set. At this point you will know what to do from here.

Your data set will look like this:

![Star Wars state data](starwars_data.png)


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] A list of Star Wars Characters rendered to the screen.
- [ ] You must have at least one list element for each star wars character in the data set.
- [ ] The list elements must all be minimally styled. (Don't rely on browser default styles.)

Required best practices:

- [ ] Consistent naming. Examples: variables, functions, classes, and files.
- [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [ ] Consistent quotation usage.
- [ ] Spell-check.
- [ ] Schedule time to review, refine and reassess your work.


It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems

- [ ] Build a pagination system that will allow you to load the next page of data

- Take note on the data that's coming back from the server call in our `getCharacters()`.
- console.log() the data coming back from the server.
- Notice that there are `next` `previous` fields that give you a URL.
- You have a function that will get chars called `getCharacters` you'll want to just call this function and supply it with the proper fields. You'll need to set this up on state to do this.

```js
 .then(data => {
    console.log(data); <-- Log data here to find the fields you will need.
    this.setState({ starwarsChars: data.results });
  })
```

- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.

- Be mindful of the `fetch API` that is now built into most modern browsers [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
- Your data coming back from Dogs should be formatted in JSON format.
