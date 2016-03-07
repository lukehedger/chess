# Application Architecture

## General structure

- `source/js/app.js` - renders the Root Container to the DOM
- `source/js/containers/Root.js` - builds the Redux Store (app state), sets up the app's routing and renders the initial route Container
- `source/js/containers/App.js` - parent Container that renders children dynamically based on current route

## Store

The Store holds the application’s state tree. The app's Store is created in `store/configureStore.js` using `createStore(reducer, initialState)` - we pass it a single reducer, as all reducers are combined in `reducer/index.js` using `combineReducers(reducers)`.

[Redux - Store](http://redux.js.org/docs/basics/Store.html)

## Reducers

A Redux reducer is a function that accepts the application's state (or part of it) and an action and returns a new state based on the previous state and the action. In the reducer composition pattern (abstracting/combining reducers based on their roles) a reducer manages its own part of the global state - rather than a single, encompassing reducer that takes the entire app's state as an argument. The `state` parameter is different for every reducer and corresponds to the part of the state it manages. A reducer should always be a **pure** function - ie. without side-effects such as mutating its arguments or making API calls.

The state must never be mutated directly - instead create a copy with [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) and return the new object.

## Actions

The files in `actions/*.js` are actually Action Creators (a function that creates an action) that contain actions (payloads of information that represent an intention to change the application's state). These Action Creators are turned into an object with each Action Creator wrapped in a dispatch call - using [bindActionCreators](http://rackt.github.io/redux/docs/api/bindActionCreators.html) on the Container - and passed to a component as `props`.

## Containers (aka smart components)

Containers are our app's views: they render Components with Actions bound to the them. Containers directly call Actions and provide them as callbacks to Components - Components do not directly call Actions. They are also known as ['Container Components'](https://medium.com/@learnreact/container-components-c0e67432e005) or *'smart'* components. These components handle Redux setup, data fetching, hold state and pass it to Components. They do not usually render any markup to the DOM or have their own styles.

Container Components are converted to *['smart components'](https://github.com/rackt/react-redux#smart-component-is-connect-ed-to-redux)* using the `connect()` function provided by the `react-redux` API.

> The connect() function lets you specify which exact state from the Redux store your component wants to track. This lets you subscribe on any level of granularity.

This allows the 'dumb' Components to be reused and not bound to specific data.

## Components (aka dumb components)

React components that can have UI triggers to dispatch Actions and render the application's state on the client via component-specific `props` passed to it from its Container. These components do not normally know about Redux or deal with it directly - they can be referred to as *['dumb components'](https://github.com/rackt/react-redux#dumb-component-is-unaware-of-redux)*. Dumb Components have no dependencies on Actions or Stores, receive data (state) and callbacks via `props` - although they don't have their *own* state. They render markup to the DOM and have styles.

Read more about [smart/dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

The app's components are also implemented using the concept of **[pure components](https://github.com/ericelliott/react-pure-component-starter/#pure-component-factories)**, which are functions that receive an instance of `React`. As a general rule, don't write a `Class` if you don't have to - [read more about using Classes](https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4).

## CSS Modules

All CSS is locally scoped to Components, which prevents global conflicts and allows us to manage UI state by directly using the application's state. An element's `classlist` can be built dynamically and made to respond to state changes and other calculations.
