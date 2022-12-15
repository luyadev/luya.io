# Admin modules

An admin module provides the ability to quickly create an admin UI section for your data. The LUYA CRUD system is called [NgRest](../ngrest/index.md) or you can also use [MVC](mvc.md) in order to render a view with data from a controller.

Some features available in the admin UI section:

+ Create, read, update and delete with AngularJS and Yii2 base on Active Records => [NgRest Section](../ngrest/index.md)
+ Display custom data with a controller and view file => [MVC Section](mvc.md)
+ Storage system for uploading images and files => `luya\admin\storage\BaseFileSystemStorage`
+ Permissions and admin UI menus => [Permissions Section](permission.md)
+ APIs => [API Section](api.md)

## Creating an admin module

::: tip
You can use the `module/create` to scaffold quickly all the required folders and files. The scaffolding command will generate a new folder structure like this:
:::

```
.
└── mymodule
    ├── admin
    │   ├── aws
    │   ├── migrations
    │   └── Module.php
    ├── frontend
    │   ├── blocks
    │   ├── controllers
    │   ├── Module.php
    │   └── views
    ├── models
    └── README.md
```

Let´s assume we use the module name `mymodule`, so you will have a new folder `mymodule` inside the modules folder of your application with the folders `admin` and `frontend` and `models`. As models can be in both admin and frontend context this is where your module shared data belongs to.

In order to add the modules to your application go into the modules section of your config and add your frontend and admin modules as following:

```php
return [
    'modules' => [
        // ...
        'mymodule' => 'app\modules\mymodule\frontend\Module',
        'mymoduleadmin' => 'app\modules\mymodule\admin\Module',
        // ...
    ],
];
```

::: warning
Keep in mind, if you are creating a module for admin usage, the admin name in the config must contain a suffix like `mymoduleadmin` otherwise using only `mymodule` for admin modules will give you some disadvantages.
:::