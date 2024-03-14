# NgRest Pools

See <class name="luya\admin\ngrest\base\NgRestModel" method="ngRestPools" />.

## Define data pools

::: info
The difference between <class name="luya\admin\ngrest\base\NgRestModel" method="ngRestFilters" /> and <class name="luya\admin\ngrest\base\NgRestModel" method="ngRestPools" /> is that the pool identifier must be provided in the menu component and is not visible in the UI; it acts like an invisible filter, only available to developers.
:::

A data pool can be used to retrieve only a subset of data. The identifier for the pool is passed through to all subrelation calls. Related models will filter their data by the same pool identifier if configured accordingly.

The following is an example of a pool identifier for a table with cars:

```php
return [
    'poolAudi' => ['car_brand' => 'Audi'],
    'poolBMW' => ['car_brand' => 'BMW'],
];
```

If the pool identifier is defined in the menu, all subrelation calls will receive the identifier. Therefore, in the above example, you could have a model for car parts that only returns parts with the same pool identifier in relation calls:

```php
return [
    'poolAudi' => ['parts_brand' => 'Audi'],
    'poolBMW' => ['parts_brand' => 'BMW'],
];
```

The identifiers `poolAudi` and `poolBMW` are passed to the `parts` table to only return parts for the specified car brand.

::: tip
The pool condition is treated as a where condition; the above example would be `where(['car_brand' => 'BMW'])`. Only hash format expressions with "equal" operators are allowed.
:::

There is also a convenient <class name="luya\admin\ngrest\base\NgRestActiveQuery" method="inPool" /> for generating where conditions `Cars::find()->inPool('poolBMW')->all()`.

## Using Pool in Menus

To differentiate between pools for content creators within your module, you can directly utilize the `itemPoolApi` method from the <class name="luya\admin\components\AdminMenuBuilder" method="itemPoolApi" /> class. This method is accessible in the MenuBuilder section of your module.

```php
 return (new \luya\admin\components\AdminMenuBuilder($this))
        ->node('Node', 'panorama_vertical')
            ->group('Group')
                ->itemPoolApi('Audi', 'module/controller/action', 'folder', 'api-module-controller', 'poolAudi')
                ->itemPoolApi('BMW', 'module/controller/action', 'folder', 'api-module-controller', 'poolBMW')
```
