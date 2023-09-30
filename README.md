---
difficulty: 1
training: true
chapter: "Chapter 2: Vue.js Components"
tags: vue
---

# Reusable Modal Component

# Challenge Description

In this challenge, let's create a re-usable `AppModal` component and use it to display the movie form.
Later on we'll improve this component to keep up with it's own display state .

## Requirements

- Move the current template for the modal into the `AppModal.vue` component and modify it for general re-use.
- The `AppModal.vue` component should meet the following specs:
  - Include a `slot` for the body content
  - Display a close (x) button
  - Display a title above the body content
  - Receive the following props:
    - `title`: a string for the title, defaults to `null`.
  - Emit the following events:
    - `close`: emitted when component is closed
- Use the `AppModal.vue` component to display the `MovieForm` in `App.vue`
- Import the `AppModal.vue` and `MovieForm.vue` component asynchronously so that the components' code is only downloaded once it's displayed
- The rest of the app should continue to work as before

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.
- TailwindCSS is preinstalled with the default config. It might be helpful for you, if you want to have some styles. (Not obligatory)

## Example of finished App

This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

![Finished app in this challenge](https://i.imgur.com/zCoJOG3.gif)
