# Todo List

> A todo list allows the user to add, edit, delete, get all and get one todo by id .

## Table of contents

- [Todo List](#todo-list)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)
  - [Inspiration](#inspiration)
  - [Contact](#contact)
  - [Group Project #3 members](#group-project-3-members)

## General info

This is group project assignation for  [HYFBelgium](https://hackyourfuture.be/) module: [separation-of-concerns](https://github.com/HackYourFutureBelgium/separation-of-concerns) week 3. This time we are going to develop a "To do list" from scratch using the knowledge acquired during this course.

Based in  our user stories, we will create our strategy and then, doing reversed-engineering of different sites and applications from our choice, we are going to develop our own site.

Each member of the group is going to work in a different task according to our strategy. Our communication plan is vital to keep the communication permanent between all the members to help each other with any issue.

## Screenshots

Here we can see some options we are considering:

![option-1](/client/public/option1.png)
![option-2](/client/public/option2.png)

## Technologies

- JavaScript
- HTML
- CSS
- VSC code

## Setup

- `npm install`
- `npm run start`

## Code Examples

```js
"use strict";

import { Todo } from "../classes/todo.js";

// handler get one todo

export const handleGetOneTodo = async (target) => {
  const id = Number(target.currentTarget.form.id.value);

  const newTodo = new Todo();

  const todoData = await newTodo.getOneTodo(id);

  const render = await newTodo.renderTodo(todoData);
  const appendTodo = document.getElementById("root");
  appendTodo.innerHTML = "";
  appendTodo.appendChild(render);
};
```

## Features

List of features ready and Todos for future development

-
-
-

To-do list:

-
-

## Status

Project is: _in progress_

## Inspiration

## Contact

By [HYF - Group 3]

## Group Project #3 members

- [Reinaldo Perez](https://github.com/perezrei)
- [Rosa Moran](https://github.com/RosaMoran)
- [Michael T](https://github.com/Mika215)
- [José Tomas Liberona](https://jtliberona.github.io/)