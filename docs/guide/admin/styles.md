# Admin CSS Styles

All [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction) CSS styles and classes are accessible within the LUYA admin interface. In addition to these, LUYA offers generic CSS classes for buttons, complete with predefined icons and colors.

## Buttons

The `btn` class from Bootstrap 4 is enhanced with predefined colors corresponding to specific functions, such as save, delete, and cancel. These classes are accessible throughout the admin interface:

```html
<button type="button" class="btn btn-save">Save</button>
<button type="button" class="btn btn-delete">Delete</button>
<button type="button" class="btn btn-cancel">Cancel</button>
<button type="button" class="btn btn-edit">Edit</button>
<button type="button" class="btn btn-add">Add</button>
<button type="button" class="btn btn-help">Help</button>
<button type="button" class="btn btn-download">Download</button>
<button type="button" class="btn btn-upload">Upload</button>
<button type="button" class="btn btn-config">Configuration</button>
```

To incorporate predefined icons, simply append the `btn-icon` class to any of the above buttons, and the corresponding icon will be displayed.

```html
<button type="button" class="btn btn-save btn-icon">Save</button>
```

> Note that `<input type="button" class="btn btn-icon btn-save" value="Button label" />` is not effective because input fields do not support the pseudo CSS class *:after*. Thus, it is recommended to use the `button` HTML element or an alternative instead of `input`.

To show a button with a generic predefined icon, use `btn-icon` without specifying a particular class:

```html
<button type="button" class="btn btn-icon"><i class="material-icons">check</i>OK</button>
```

For a `btn-icon` button without a background, add `btn-link`:

```html
<button type="button" class="btn btn-icon btn-link"><i class="material-icons">check</i>Link</button>
```

Here are some example combinations:

```html
<button type="button" class="btn btn-icon btn-save">Save button with icon and text</button>
<button type="button" class="btn btn-cancel">Cancel button without icon</button>
<button type="button" class="btn btn-icon btn-delete"></button> // Delete button without label, but with predefined icon and colors.
```

## Icons

The table below illustrates which icons correspond to specific functions. A complete set of icons is available at https://material.io/icons.

| Description            | Icon                                        | Name                         |
|------------------------|---------------------------------------------|------------------------------|
| Upload icon            | <i class="material-icons">file_upload</i>   | `file_upload`                |
| Download icon          | <i class="material-icons">file_download</i> | `file_download`              |
| Edit icon              | <i class="material-icons">edit</i>          | `edit`                       |
| Add icon               | <i class="material-icons">add_box</i>       | `add_box`                    |
| Add icon for button    | <i class="material-icons">add</i>           | `add`                        |
| Delete icon            | <i class="material-icons">delete</i>        | `delete`                     |
| Save/Confirm icon      | <i class="material-icons">check</i>         | `check`                      |
| Abort/Clear icon       | <i class="material-icons">clear</i>         | `clear`                      |
| Config icon            | <i class="material-icons">settings</i>      | `settings`                   |
| Settings icon          | <i class="material-icons">more_vert</i>     | `more_vert`                  |
| Visible icon           | <i class="material-icons">visibility</i>    | `visibility`                 |
| Invisible icon         | <i class="material-icons">visibility_off</i>| `visibility_off`             |
| Online icon            | <i class="material-icons">cloud_queue</i>   | `cloud_queue`                |
| Offline icon           | <i class="material-icons">cloud_off</i>     | `cloud_off`                  |
| Sort icon              | <i class="material-icons">keyboard_arrow_down</i> <i class="material-icons">keyboard_arrow_up</i> | `keyboard_arrow_down` / `keyboard_arrow_up` |
| Folder icon            | <i class="material-icons">folder</i>        | `folder`                     |
| Create folder icon     | <i class="material-icons">create_new_folder</i> | `create_new_folder`      |
