# Environments


LUYA is shipped with several configuration files. These config files are in charge to configure the project for different stages or environments.

Below, all these configs and environments explained:

## Overview

![configs-graphic](../img/configs-luya.jpg "LUYA envs config")

## env.php

The `env.php` file returns the currently used config, so this file is used to change the config on different environment.
This file is ignored by GitHub by default. If a new project is created an example file named `env.php.dist` will be provided (see [Install](/guide/installation/)).

## config.php

> Since version 1.0.21 of LUYA core the <class name="luya\Config" /> is used to generate configs.

The `config.php` file contains a <class name="luya\Config" /> object, in order to defined components, modules or application level configurations for a certain environment use <class name="luya\Config" method="env" /> method:

An example for define the `db` component for certain environments:

```php
$config->component('db', [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=local_db',
    'username' => 'foo',
    'password' => 'bar',
])->env(Config::ENV_LOCAL);

$config->component('db', [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=dev_db',
    'username' => 'foo',
    'password' => 'bar',
])->env(Config::ENV_DEV);

$config->component('db', [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=prod_db',
    'username' => 'foo',
    'password' => 'bar',
])->env(Config::ENV_PROD);
```

There is also a more readable annotation with closures:

```php
$config->env(Config::ENV_LOCAL, function(Config $config) {
    $config->callback(function() {
        define('YII_DEBUG', true);
        define('YII_ENV', 'local');
    });
    $config->component('db', [
        'dsn' => 'mysql:host=luya_db;dbname=luya_kickstarter',
        'username' => 'luya',
        'password' => 'luya',
    ]);
    $config->module('debug', [
        'class' => 'yii\debug\Module',
        'allowedIPs' => ['*'],
    ]);
    $config->module('gii', [
        'class' => 'yii\gii\Module',
        'allowedIPs' => ['*'],
    ]);
    $config->bootstrap(['debug', 'gii']);
});

$config->env(Config::ENV_PROD, function(Config $config) {
    $config->component('db', [
        'dsn' => 'mysql:host=localhost;dbname=DB_NAME',
        'username' => '',
        'password' => '',
        'enableSchemaCache' => true,
        'schemaCacheDuration' => 0,
    ]);
    $config->component('cache', [
        'class' => 'yii\caching\FileCache'
    ]);
    $config->application([
        'ensureSecureConnection' => true, // https://luya.io/guide/app/security
    ]);
});

return $config;
```

The <class name="luya\Config" /> has constants for all LUYA env types:

+ `luya\Config::ENV_ALL`: All environments
+ `luya\Config::ENV_LOCAL`: local computer (local development stage)
+ `luya\Config::ENV_DEV`: dev/shared server
+ `luya\Config::ENV_PREP`: preproduction server
+ `luya\Config::ENV_CI`: CI server
+ `luya\Config::ENV_PROD`: production
