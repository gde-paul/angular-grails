<%@ Page import="com.craigburke.angular.Author" %>

<h2>Show Author: {{ctrl.item.firstName}} {{ctrl.item.lastName}}</h2>
<div flash-message ></div>

<table class="table table-bordered">
    <f:with bean="${new Author()}">
        <f:display property="firstName">ctrl.item.firstName</f:display>
        <f:display property="lastName">ctrl.item.lastName</f:display>
    </f:with>
</table>

<div class="form-actions">
    <button crud-button="edit" item="ctrl.item"></button>
    <button crud-button="cancel" ></button>
</div>