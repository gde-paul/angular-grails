<div class="form-group" ng-class="{'has-error': ${form ?: 'form'}.${property}.$invalid}">
    <label class="col-sm-2 control-label" for="${property}">${label}</label>
    <div class="col-sm-10">
        ${raw(widget)}
    </div>
</div>