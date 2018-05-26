# React App for Drupal 8

React app boilerplate for progressive decoupling.
The demo loads articles from a JSON API endpoint.

## Getting started

This boilerplate is based on the method adopted by the
[React Comments](https://www.drupal.org/project/react_comments) module.

### React

1. cd in js/src
2. Install dependencies with `yarn install`
3. Copy the _.env.example.js_ file to _.env.local.js_ 
and set your Drupal 8 site url, it will be used while debugging React as a standalone app.
4. Edit App.js and your components
5. Run `yarn start` to start the development server
6. Run `php build.php` to prepare the dist js and css 
that are referenced by _react_app.libraries.yml_.

### Drupal

Generate some articles. Install devel_generate then

`drush genc 20 --types=latest_news`

Install JSON API 

```
composer require drupal/jsonapi
drush en jsonapi
```

Head to /react-app/app to access the embedded React app.
