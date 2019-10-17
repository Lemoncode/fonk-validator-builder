# %VALIDATOR_NAME%

[![CircleCI](https://badgen.net/github/status/Lemoncode/%VALIDATOR_NAME%/master?icon=circleci&label=circleci)](https://circleci.com/gh/Lemoncode/%VALIDATOR_NAME%/tree/master)
[![NPM Version](https://badgen.net/npm/v/@lemoncode/%VALIDATOR_NAME%?icon=npm&label=npm)](https://www.npmjs.com/package/@lemoncode/%VALIDATOR_NAME%)
[![bundle-size](https://badgen.net/bundlephobia/min/@lemoncode/%VALIDATOR_NAME%)](https://bundlephobia.com/result?p=@lemoncode/%VALIDATOR_NAME%)

This is a [fonk](https://github.com/Lemoncode/fonk) microlibrary that brings validation capabilities to:

// TODO: Update description and example.

- Validate if a field of a form ....

How to add it to an existing form validation schema:

We have the following form model:

```
const myFormValues = {
  product: 'shoes',
  price: 20,
}
```

We can add a %VALIDATOR_CAMEL_CASE_NAME% validation to the myFormValues

```javascript
import { %VALIDATOR_CAMEL_CASE_NAME% } from '@lemoncode/%VALIDATOR_NAME%';

const validationSchema = {
  field: {
    price: [%VALIDATOR_CAMEL_CASE_NAME%.validator],
  },
};
```

You can customize the error message displayed in two ways:

- Globally, replace the default error message in all validationSchemas (e.g. porting to spanish):

```javascript
import { %VALIDATOR_CAMEL_CASE_NAME% } from '@lemoncode/%VALIDATOR_NAME%';

%VALIDATOR_CAMEL_CASE_NAME%.setErrorMessage('El campo debe de ser numérico');
```

- Locally just override the error message for this validationSchema:

```javascript
import { %VALIDATOR_CAMEL_CASE_NAME% } from '@lemoncode/%VALIDATOR_NAME%';

const validationSchema = {
  field: {
    price: [
      {
        validator: %VALIDATOR_CAMEL_CASE_NAME%.validator,
        message: 'Error message only updated for the validation schema',
      },
    ],
  },
};
```

Please, refer to [fonk](https://github.com/Lemoncode/fonk) to know more.

## License

[MIT](./LICENSE)

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
