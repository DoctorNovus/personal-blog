# Personal Blog

Welcome to my personal blog site! This is one of many projects listed here on my GitHub profile, so feel free to check the others.

## How to Follow

The folder structure is as such:

### files - Where the post configs go

- hello.json - Default Post One
- random-post-one.json - Default Post Two

### public

- favicon.ico - Default App Icon

### src

- components - Where app components are held
- hooks - where app hooks are held
- pages - where each route is held as well as the API, ie .. `/post/hello`;
- styles - where all the css is held
- utils - where the util functions for the server are held

### Other files

- eslintrc.json
- .gitignore - Ignores for GitHub Push
- jsconfig.json - Where all the configs for imports are
- next.config.js - setup for the server config
- package-lock.json - default package-lock
- package.json - default package.json with scripts
- README.md - This file

## Example post config setup

```json
{
  "name": "Test Name",
  "hint": "Info about Test Name",
  "date": "09-12-2021",
  "body": "Test Details"
}
```

| Key  | Value                                                                 |
| ---- | --------------------------------------------------------------------- |
| name | The name that will be shown at the / route                            |
| hint | What shows under the name that gives a hint at what the post is about |
| date | The date of the post in MM-DD-YYYY format                             |
| body | The page of information that goes into detail                         |
