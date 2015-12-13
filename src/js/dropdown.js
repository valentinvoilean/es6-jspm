import 'bootstrap';
import $ from 'jquery';
import 'bootstrap/css/bootstrap.css!';

const dropdown = $(
    '<div class="btn-group">' +
    '<button type="button" class="btn btn-danger">Action</button>' +
    '<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
    '<span class="caret"></span>' +
    '<span class="sr-only">Toggle Dropdown</span>' +
    '</button>' +
    '<ul class="dropdown-menu">' +
    '<li><a href="#">Action</a></li>' +
    '<li><a href="#">Another action</a></li>' +
    '<li><a href="#">Something else here</a></li>' +
    '<li role="separator" class="divider"></li>' +
    '<li><a href="#">Separated link</a></li>' +
    '</ul>' +
    '</div>'
);

export {dropdown};