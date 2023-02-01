# Structure & Config

See the tipical folder structure of a LUYA application and read more about the <class name="luya\Config" /> object in order to configure your application.

## Application Structure

This is how a standard LUYA kickstarter application hierarchy should look and where files, configs, modules and views should be located:

```
.
├── assets
├── blockgroups
├── blocks
├── configs
├── filters
├── messages
├── migrations
├── models
├── modules
│   ├── <APP-MODULE>
│   │   ├── assets
│   │   └── controllers
│   └── <APP-ADMIN-MODULE>
│       ├── assets
│       └── controllers
├── public_html
│   ├── storage
│   └── css
├── resources
├── runtime
├── themes
└── views
    ├── <APP-MODULE>
    │   └── default
    ├── cmslayouts
    └── layouts
```

## Configuration Files and Config Builder

Config files (e.g. `configs/env-local.php` or `configs/env-prod.php`) return a configuration array.

> Since version 1.0.21 of LUYA core the <class name="luya\Config" /> is used to generate configs (`configs/config.php`):

```php
define('YII_DEBUG', true);
define('YII_ENV', 'prep');

$config = new Config('testapp', dirname(__DIR__), [
    'siteTitle' => 'My Test App',
    'defaultRoute' => 'cms',
    'ensureSecureConnection' => true,
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'modules' => [
        'admin' => [
            'class' => 'luya\admin\Module',
            'secureLogin' => false, // when enabling secure login, the mail component must be proper configured otherwise the auth token mail will not send.
            'strongPasswordPolicy' => false, // If enabled, the admin user passwords require strength input with special chars, lower, upper, digits and numbers
            'interfaceLanguage' => 'en', // Admin interface default language.
            'autoBootstrapQueue' => true, // Enables the fake cronjob by default, read more about queue/scheduler: https://luya.io/guide/app-queue
            'logoutOnUserIpChange' => true,
        ],
        // See all frontend CMS options: https://luya.io/api/luya-cms-frontend-Module
        'cms' => [
            'class' => 'luya\cms\frontend\Module',
            'contentCompression' => true, // compressing the cms output (removing white spaces and newlines)
        ],
        // See all admin CMS options: https://luya.io/api/luya-cms-admin-Module
        'cmsadmin' => [
            'class' => 'luya\cms\admin\Module',
        ],
    ],
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'charset' => 'utf8',
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'composition' => [
            'default' => [
                'langShortCode' => 'en'
            ],
            'hidden' => true,
        ],
    ]
]);

$config->component('db', [
    'dsn' => 'mysql:host=LOCAL_HOST;dbname=LOCAL_NAME',
    'username' => 'LOCAL_USER',
    'password' => 'LOCAL_PW',
])->env(Config::ENV_LOCAL);

$config->component('db', [
    'dsn' => 'mysql:host=PROD_HOST;dbname=PROD_NAME',
    'username' => 'PROD_USER',
    'password' => 'PROD_PW',
])->env(Config::ENV_PROD);

$config->webComponent('request', [
    'cookieValidationKey' => 'XYZ',
]);

return $config;
```

As the `env.php` now recieves the Config object and won't be stored in Git the enviroment to return can be choosen there:

example content of `env.php`:

```php
$config = require 'config.php'; 

return $config->toArray(\luya\Config::ENV_PROD);
```

## Console and Web

Since the introduction of <class name="luya\Config" /> its possible to set components for either console or web runtime, assuming you have `cookieValidationKey` in `request` component which is only valid on web runtime you can use <class name="luya\Config" method="webComponent" /> to register the component:

```php
$config->webComponent('request', [
    'cookieValidationKey' => 'XYZ',
]);
```

The same also works for console components:

```php
$config->consoleComponent('request', [
    'params' => ['foo' => 'bar'],
]);
```

You can even merge data from the component which works on both runtime systems:

```php
$config->component('request', [
    'isConsoleRequest' => false,
]);
$config->webComponent('request', [
    'cookieValidationKey' => 'XYZ',
]);
$config->consoleComponent('request', [
    'params' => ['foo' => 'bar'],
]);
```

Depending on console or web request would resolve:

```php
// on web runtime:
'request' => [
    'isConsoleRequest' => false,
    'cookieValidationKey' => 'XYZ',
];
// while on console runtime:
'request' => [
    'isConsoleRequest' => false,
    'params' => ['foo' => 'bar'],
];
```

## Environments

As a key concept of LUYA is to don't repeat yourself with <class name="luya\Config" /> a configuration file for different hosts can be done in a single file using `env()`. Assuming a database connection which has different connection details on different hosts (prep and prod) define the <class name="yii\db\Connection" /> as followed:

```php
$config->component('db', [
     'class' => 'yii\db\Connection',
     'dsn' => 'mysql:host=localhost;dbname=prod_db',
    'username' => 'foo',
    'password' => 'bar',
])->env(Config::ENV_PREP);

$config->component('db', [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=prod_db',
    'username' => 'foo',
    'password' => 'bar',
])->env(Config::ENV_PROD);
```

You can also define multiple components in a environment block/scope.

```php
$config->env(Config::ENV_PREP, function(Config $config) {
    $config->component('db', [
        'class' => 'yii\db\Connection',
        'dsn' => 'mysql:host=localhost;dbname=prod_db',
        'username' => 'foo',
        'password' => 'bar',
    ]);
    $config->component('cache', [
        'class' => 'yii\caching\DummyCache',
    ]);
});

$config->env(Config::ENV_PROD, function(Config $config) {
    $config->component('db', [
        'class' => 'yii\db\Connection',
        'dsn' => 'mysql:host=localhost;dbname=prod_db',
        'username' => 'foo',
        'password' => 'bar',
    ]);
});
```

The `env.php` will receive the `$config` object and is then therefore responsible to correctly return the given env:

```php
$config = require 'config.php'; 

return $config->toArray(\luya\Config::ENV_PROD);
```

## Company wide config

Its very common that you like to share configuration values over different projects, therefore we encourage you to create your own LUYA DI repo, create a private repository on your VCS Platform (example GitHub) add a Bootstrap file like:

```php
<?php
namespace mycompanyvendor\luya\di;

use Yii;
use yii\base\BootstrapInterface;
use luya\web\Application;

class Bootstrap implements BootstrapInterface
{
    public function bootstrap($app)
    {
        Yii::$container->set('luya\components\Mail', [
            'from' => '***',
            'fromName' => '**',
            'isSMTP' => true,
            'host' => '***',
            'username' => '***',
            'password' => '***',
            'port' => 587,
            'smtpSecure' => 'tls',
            'smtpAuth' => true,
        ]);
        
        if (YII_ENV_PROD) {
            /**
             * As the error handler is already registered before the bootstraping sequence, we can not configure properties via 
             * DI container and have to override the application component properties.
             */
            if ($app instanceof Application) {
                $app->set('errorHandler', [
                    'class' => 'luya\web\ErrorHandler',
                    'api' => 'https://copmany/luya-master-admin/errorapi',
                    'transferException' => true,
                ]);
            } else {
                $app->set('errorHandler', [
                    'class' => 'luya\console\ErrorHandler',
                    'api' => 'https://copmany/luya-master-admin/errorapi',
                    'transferException' => true,
                ]);
            }
            
            // as the error handler is already registered on preInit() stage, we have to
            // unregister the existing handler, and re-register the handler with new settings from above.
            $app->errorHandler->unregister();
            $app->errorHandler->register();
        }
    }
}
```

Create a `composer.json`:

```json
{
    "name": "mycompanyvendor/luya-di",
    "description": "LUYA DI",
    "type" : "luya-extension",
    "autoload" : {
        "psr-4" : {
            "mycompanyvendor\\luya\\di\\" : "src/"
        }
    },
    "require-dev" : {
        "luyadev/luya-core" : "^1.0"
    },
    "extra" : {
        "luya" : {
            "bootstrap": [
                "mycompanyvendor\\luya\\di\\Bootstrap"
            ]
        },
        "branch-alias": {
            "dev-master": "1.0.x-dev"
        }
    }
}
```

Now you can include the private LUYA DI package into your projects:

```json
"require" : {
    "mycompanyvendor/luya-di" : "^1.0",
},
"repositories": [
    {
        "type": "vcs",
        "url":  "https://zephirbot:__TOKEN__@github.com/mycompanyvendor/luya-di.git"
    }
]
```

So now there is no need to configure `errorHandler` or `mail` component, as its done by default whenever the application is running (due to LUYA bootstrap file).

## Changing root directory

The `public_html` folder is the root directory. It contains the application bootstrap file. If you want to reflect your web server directory structure, you can rename the `public_html` folder to whatever you want to. For example: `www` or `web`. You just need to update your configuration by adding the `webrootDirectory` config, e.g. it should look like this: `'webrootDirectory' => 'www'`
