<%@ Page import="com.craigburke.angular.Book" %>

<h2>Show Book: {{ctrl.item.title}}</h2>
<div flash-message ></div>

<table class="table table-bordered">
    <f:with bean="${new Book()}">
        <f:display property="title">ctrl.item.title</f:display>
        <f:display property="author">ctrl.item.author.firstName + ' ' + ctrl.item.author.lastName</f:display>
        <f:display property="price">ctrl.item.price</f:display>
        <f:display property="publishDate">ctrl.item.publishDate</f:display>
        <f:display property="pageCount">ctrl.item.pageCount</f:display>
    </f:with>
</table>

<div class="form-actions">
    <button crud-button="edit" item="ctrl.item"></button>
    <button crud-button="cancel" ></button>
</div>