# html-webpack-plugin-bug-reproduce

## Version 3.2.0 (Working)

check `webpack` variable used in `template.ejs`

```sh
cd 3.2.0
yarn
yarn run dev
```

👆 This should compile successfully.

## Version 4.0.0-alpha (Not Working)

check `webpack` variable used in `template.ejs`

```sh
cd 4.0.0-alpha
yarn
yarn run dev
```

🤷‍♂️ The compilation should break with error - `ERROR in Template execution failed: ReferenceError: webpack is not defined`
