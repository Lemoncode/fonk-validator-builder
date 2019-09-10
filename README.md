# form-validator-builder

Helper library to create `validators` supported by [form-validation](https://github.com/Lemoncode/form-validation) library.

# How to use it

- Create validator repository in https://github.com/Lemoncode. A good repository name will be **_validator-name_-validator**. For example, `is-number-validator`.

- Add repository to [circleci](https://circleci.com/add-projects/gh/Lemoncode):

![add-project-to-circleci](./readme-resources/add-project-to-circleci.jpg)

- Install library:

```bash
npm install @lemoncode/form-validator-builder -g
```

- Execute command in `empty` folder project. It will create validator folders and files:

```bash
form-validator-builder
```

> NOTE: It will prompt a question requiring the `validator name`

- Install dependencies:

```bash
npm install
```

- Search `// TODO:` to get pending files to update and implement it:

- Add PR with implementation.

- Publishing library:

```bash
npm run deploy // Select library version 1.0.0
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
