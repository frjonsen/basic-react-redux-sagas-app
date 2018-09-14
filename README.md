# Tiny React + Redux + Redux Sagas

This is the smallest possible React webapp I could build using the following things

- Typescript
- React
- Redux
- Redux Sagas
- Axios

## Sources

Much of the contents is from `https://github.com/Microsoft/TypeScript-React-Starter`, which is currently slightly outdated.

Backend is provided by [jsonplaceholder](https://jsonplaceholder.typicode.com/)

## Videos

If this is all too confusing, here's some videos that helped when writing this:

- [Redux (14 minutes)](https://www.youtube.com/watch?v=sX3KeP7v7Kg)

## Initial creation

Built using `create-react-app` installed globally from npm, using the extra typescript-scripts provided my Microsoft. Full command to create the base of the project was 
```
create-react-app my-app --scripts-version=react-scripts-ts
```

At this point, only React and Typescript is in the project. Additional packages used can be installed with

```
npm i -S redux react-redux axios redux-saga
npm i -D @types/react-redux @types/react
```

If you want to know what the initial creation looks like, refer to [this initial commit](https://github.com/frjonsen/basic-react-redux-sagas-app/tree/c792e207bb16aaee1bc90a59c4ae9b4847120bd2)

## Versions

Typescript used is version 3.0.3. At the time of writing this results in some *warnings* from packages requiring some 2.x-version, but there seems to be no actual issues.

At the time of writing, this is the output of `npm ls --depth=0` and `npm ls -g --depth=0`:

```
λ npm ls --depth=0
+-- @types/jest@23.3.2
+-- @types/node@10.9.4
+-- @types/react@16.4.14
+-- @types/react-dom@16.0.7
+-- @types/react-redux@6.0.8
+-- axios@0.18.0
+-- react@16.5.0
+-- react-dom@16.5.0
+-- react-redux@5.0.7
+-- react-scripts-ts@2.17.0
+-- redux@4.0.0
+-- redux-saga@0.16.0

λ npm ls -g --depth=0
+-- create-react-app@1.5.2
+-- react-scripts-ts@2.17.0
```

## Structure

For the sake of simplicity, I opted not to create any advanced directory structure. All files are directly at the root. This is *not* how a real project should be structured.

## Running
Served simply using ´npm run start`. which will auto-reload on changes