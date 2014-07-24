<%@ Page import="com.craigburke.angular.Author" %>

<h2>
    <span ng-hide="item.id">Create Author</span>
    <span ng-show="item.id">Edit Author: {{item.firstName}} {{item.lastName}} </span>
</h2>

<div flash-message ></div>

<form name="form" class="form-horizontal" role="form" novalidate>

    <f:with bean="${new Author()}">
        <f:field property="firstName" input-ng-model="item.firstName" />
        <f:field property="lastName" input-ng-model="item.lastName" />
    </f:with>

    <div>
        <button crud-button="save" resource="item"></button>
        <button crud-button="cancel"></button>
    </div>

</form>

