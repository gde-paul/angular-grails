<%@ Page import="com.craigburke.angular.Author" %>

<h2>
    <span ng-hide="ctrl.item.id">Create Author</span>
    <span ng-show="ctrl.item.id">Edit Author: {{item.firstName}} {{item.lastName}} </span>
</h2>

<div flash-message ></div>

<form name="form" class="form-horizontal" role="form" novalidate>

    <f:with bean="${new Author()}">
        <f:field property="firstName" input-ng-model="ctrl.item.firstName" />
        <f:field property="lastName" input-ng-model="ctrl.item.lastName" />
    </f:with>

    <div>
        <button crud-button="save" item="ctrl.item" is-disabled="form.$invalid"></button>
        <button crud-button="cancel"></button>
    </div>
</form>

