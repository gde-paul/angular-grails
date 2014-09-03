<%@ Page import="com.craigburke.angular.Author" %>

<h2>Show Author: {{item.firstName}} {{item.lastName}}</h2>
<div flash-message ></div>

<table class="table table-bordered">
    <f:with bean="${new Author()}">
        <f:display property="firstName">item.firstName</f:display>
        <f:display property="lastName">item.lastName</f:display>
    </f:with>
</table>

<div class="form-actions">
    <button crud-button="edit" resource="item"></button>
    <button crud-button="cancel" ></button>
</div>