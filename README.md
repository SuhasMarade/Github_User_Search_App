# Avatar(github user search app)
- It is frontend of github user avatar search app
- It has heading, search bar, It has 30 users on homepage by default

## Frontend Images

### Home Page
![HomePage](./demo_images/homePage.png)

### After Search
![AfterSearch](./demo_images/afterSearch.png)

### On click on image
![OnClickOnImage](./demo_images/onClickOnImage.png)

## features
- Axios Api use
- Routing (when you click on image you get information about image or you click on heading to return home page)
- Search user by username on search-bar 
- Debouncing hook to minimize network request (delay: 1 second)
- Custom hooks to make code looks clean

## API Reference

### About API

- [Github-Api](https://api.github.com/users)


#### Get single user details

```
  https://api.github.com/users/${username}
```

| Parameter  | Type     | Description                             |
| :--------  | :------- | :-------------------------------------- |
| `username` | `string` | **Required**. username of item to fetch |



## Installation

```
# Clone this repository
$ git clone https://github.com/SuhasMarade/Github_User_Search_App.git

# Go into the repository
$ cd Github_User_Search_App.git

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
