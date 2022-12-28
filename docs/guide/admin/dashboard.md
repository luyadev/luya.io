# Admin dashboard objects

Dashboard objects are elements defined by your admin module attached to the admin UI entry dashboard screen after the login. Basically the dashboard objects are returning a template which is feed by an API response. All dashboard objects are defined inside the <class name="luya\admin\base\Module" prop="dashboardObjects" /> property.

## Predefined dashboards

You can choose from predefined dashboard objects which provides predefined styles to render:

+ <class name="luya\admin\dashboard\BasicDashboardObject" />
+ <class name="luya\admin\dashboard\TableDashboardObject" />
+ <class name="luya\admin\dashboard\ListDashboardObject" />
+ <class name="luya\admin\dashboard\ChartDashboardObject" />

```php
public $dashboardObjects = [
    [
        'class' => 'luya\admin\dashboard\BasicDashboardObject',
        'template' => '<ul ng-repeat="item in data"><li>`item.title`</li></ul>',
        'dataApiUrl' => 'admin/api-news-article',
        'title' => 'Latest News',
    ],
    [
        // ... next dashboard object
    ]
];
```

In order to customize the template of a basic dashboard object you can override the <class name="luya\admin\dashboard\BasicDashboardObject" prop="outerTemplate" />:

```php
[
    'class' => 'luya\admin\dashboard\BasicDashboardObject',
    'outerTemplate' => '<div class="wrap-around-template"><h1>{{title}}</h1><small>{{template}}</small></div>',
    'template' => '<ul ng-repeat="item in data"><li>{{ item.title }}</li></ul>',
    'dataApiUrl' => 'admin/api-news-article',
    'title' => 'Latest News',
],
```

> The outerTemplate does have predefined variables: `title`, `template`, `dataApiUrl` in double curly braces.

## Links with ui-sref

In order to make links inside the dashboard use the `ui-sref` directive

A few examples:

+ Module index page: `default({'moduleId':5})"`
+ To a module NgRest CRUD (or any other route): `default.route({moduleId: 5, moduleRouteId:'myadminmodule', controllerId:'my-controller', actionId:'index'})`
+ To a specific item/id inside the NgRest CRUD: `default.route.detail({moduleId: 5, moduleRouteId:'myadminmodule', controllerId:'my-controller', actionId:'index', id: 1})`
+ To a CMS edit form: `custom.cmsedit({ navId : item.nav_id, templateId: 'cmsadmin/default/index'})"`

## Custom dashboard object

You can also write your own dashboard object but make sure you extend the <class name="luya\admin\base\DashboardObjectInterface" /> interface.
