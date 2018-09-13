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

## Versions

Typescript used is version 3.0.3. At the time of writing this results in some *warnings* from packages requiring some 2.x-version, but there seems to be no actual issues.

At the time of writing, this is the output of `npm ls --depth=0` and `npm ls -g --depth=0`:

```
λ npm ls --depth=0
+-- @types/jest@23.3.2
+-- @types/node@10.9.4
+-- @types/react@16.4.14
+-- @types/react-dom@16.0.7
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

## Initial creation

Built using `create-react-app` from npm, using the extra typescript-scripts provided my Microsoft. Full command to create the base of the project was 
```
create-react-app my-app --scripts-version=react-scripts-ts
```

At this point, only React and Typescript is in the project. Additional packages used can be installed with

```
npm i -S redux react-redux axios redux-saga @types/react-redux @types/react
```