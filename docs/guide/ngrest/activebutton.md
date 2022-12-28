# Active Buttons

<class name="luya\admin\ngrest\base\ActiveButton" /> are analog to [Active Windows](activewindow.md), a button you can attach to a given NgRest CRUD row with a handler which can then interact with the Active Record class.

There are built in Active Buttons you can use and configure or you can create your own Active Buttons and attach them to an [NgRestModel](model.md).

+ <class name="luya\admin\buttons\DuplicateActiveButton" />
+ <class name="luya\admin\buttons\TimestampActiveButton" />
+ <class name="luya\admin\buttons\ToggleStatusActiveButton" />

## Creating an Active Button

There is a base class for all Active Buttons called <class name="luya\admin\ngrest\base\ActiveButton" />, the final implementation only requires a handler method.

An example Active Button which duplicates a row from the attached model.

```php
<?php

use luya\admin\ngrest\base\ActiveButton;

class DuplicateActiveButton extends ActiveButton
{
    public function getDefaultIcon()
    {
        return 'control_point_duplicate';
    }

    public function getDefaultLabel()
    {
        return 'Duplicate';
    }

    public function handle(NgRestModel $model)
    {
        $copy = clone $model;
        $copy->isNewRecord = true;
        foreach ($model->getPrimaryKey(true) as $field => $value) {
            unset($copy->{$field});
        }
        
        if ($copy->save()) {
            $this->sendReloadEvent();
            return $this->sendSuccess("A copy has been made.");
        }

        return $this->sendError("Error while duplicate the given model." . var_export($copy->getErrors(), true));
    }
}
```

The handle method must return <class name="luya\admin\ngrest\base\ActiveButton" method="sendSuccess" /> or <class name="luya\admin\ngrest\base\ActiveButton" method="sendError" /> in order to make a correct API response to the grid view.

Als you can triggere events for certain situations. Assuming you are going to modify the value of a column isnide this CRUD, a forced reload of the CRUD list can be done trough <class name="luya\admin\ngrest\base\ActiveButton" method="sendReloadEvent" />.

## Attaching the Button

An Active Button can be attached inside every <class name="luya\admin\ngrest\base\NgRestModel" /> model trough the <class name="luya\admin\ngrest\base\NgRestModel" method="ngRestActiveButtons" /> method.

```php
public function ngRestActiveButtons()
{
    return [
        ['class' => '\path\to\ActiveButtonClass'],
    ];
}
```

An example of how to override the label and icon defined in the button:

```php
public function ngRestActiveButtons()
{
    return [
        [
            'class' => ActiveButtonClass::class,
            'icon' => 'thumb_up',
            'label' => 'Approve',
        ],
        [
            'class' => ActiveButtonClass::class,
            'icon' => 'thumb_down',
            'label' => 'Decline'
        ],
    ];
}
```
