# Queue / Scheduler

> The LUYA admin module is required.

Since LUYA Admin version 2.0, the ([Yii Queue](https://github.com/yiisoft/yii2-queue) component is automatically registered and configured properly and is ready to handle jobs. The queue is also known as scheduler in admin context.

The component is configured as `adminqueue` based on the Database `yii\queue\db\Queue` integration. 

The admin module has a default integration for scheduling jobs when working with selects (dropdowns) and checkbox, so you are able to schedule those changes out of the box! See Checkbox (ToggleStatus) <class name="luya\admin\ngrest\plugins\ToggleStatus" prop="scheduling" /> and Select <class name="luya\admin\ngrest\plugins\Select" prop="scheduling" />.

## Configure to run

There are 3 different options to enable to adminqueue, by default the admin queue is not configured to process jobs unless activated.

+ **"Fake Cronjob"**: On request in the frontend and admin the queue will be processed each 26 minutes.
+ **Cronjob**: Setup a cronjob which will run every minute (or less) to process the queue.
+ **Realtime Listen**: The `queue/listen` commands runs a separate service and processed the queue in realtime.

### "Fake Cronjob" (Auto Bootstrap Queue)

The fake cron job will run each 25 minutes whether users request the websites in the frontend or sites are visited in the administration area. This is called a "fake cronjob" and should not be taken for large queue jobs. So take into account that frontend users might visit the website and process the queue. In order to enable the fake cronjob set <class name="luya\admin\Module" prop="autoBootstrapQueue" /> to true, in the admin module config:

```php
'modules' => [
    'admin' => [
        'class' => 'luya\admin\Module',
        // ...
        'autoBootstrapQueue' => true,
    ]
]
```

The fake cronjob won't be executed on console (cli) commands. The information about last run timestamp is stored in <class name="luya\admin\models\Config" /> with identifier `luya\admin\models\Config::CONFIG_QUEUE_TIMESTAMP`.

### Cronjob (admin/queue Command)

In shared hosting environments the best usage for the admins queue scheduler system is to setup a cronjob which runs every 5 minutes (vary to any other frequency depending on your needs). Make sure that <class name="luya\admin\Module" prop="autoBootstrapQueue" /> is disabled un setup a cronjob with runs the <class name="luya\admin\commands\QueueController" /> as `admin/queue` command:

```sh
/vendor/bin/luya admin/queue
```

### Realtime Listen

Since version 2.0.4 the native implementation of the [Yii Queue](https://github.com/yiisoft/yii2-queue) is bootstrapped, therefore you might run all the commands from the original component. The most common use case is to process the queue in realtime, therefore the `queue/listen` command is used:

```sh
./vendor/bin/luya queue/listen --verbose=1
```

The verbose option helps to debug and should be disabled in production.

> The original queue/listen command won't store any timestamp information about last run in the <class name="luya\admin\models\Config" /> like the fake cronjob does.

When using the `queue/listen` command it's recommend to enable <class name="luya\admin\storage\BaseFileSystemStorage" prop="queueFilters" /> because this option will process the image filter creation in the queue instead of the users browser. This will therefore moved the large memory load from the webserver to the instance which is running the `queue/listen` command. Add all your application [filters](filters) to the <class name="luya\admin\storage\BaseFileSystemStorage" prop="queueFiltersList" /> list, as only the listed filters will be generated.

## Push a Job into the Queue

In order to push a certain job into the built in admin queue you can use `Yii::$app->adminqueue->push(new MyCustomJob())` or if you like to delay the execution use for certain seconds, use `Yii::$app->adminqueue->delay(3600)->push(new MySuperJob())`.

The response from the push method is always the queue id, so you can check or store the status of the job with `Yii::$app->queue->isDone($id)`.

## Retry & Errors

The Queue is by default configured to allow 5 retries of an error job each 5 minutes. So assuming the executed job fails (throws a <class name="luya\Exception" /> for instance) the queue waits 5 minutes until a next try is executed. This will be repeated until 5 tries are processed, then the job will be removed from the queue with status failed.

An exception is therefore the expected error format to ensure the job will retry again. If the exception is part of your application ensure to surround the job logic with a try catch block.

## Queue Image Filters

Since version 4.0 of Admin Module it's possible to queue the generating of image filters, this means that when a new image is uploaded, the filter versions of this image will be created in the queue and not in realtime when the image is uploaded, this can useful to remove the load from the webserver and move it to the queue application which is running. Here is an example config of the storage system to generate the listed filters in the queue:

```php
$config->component('storage', [
    'class' => 'luya\aws\S3FileSystem',
    // ... more AWS S3 config details
    
    // enable the queue filters
    'queueFilters' => true,
    // defines which filters should be created in the queue, it's recommend to add the default filters and also maybe some project specific filters
    'queueFiltersList' => ['tiny-crop', 'medium-thumbnail', 'teaser', 'detail'],
]);
```

See <class name="luya\admin\storage\BaseFileSystemStorage" prop="queueFilters" /> for more details.
