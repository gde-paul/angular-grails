<%@ Page import="com.craigburke.angular.Book" %>

<h2>Show Book: {{item.title}}</h2>
<div flash-message ></div>

<table class="table table-bordered">
    <f:with bean="${new Book()}">
        <f:display property="title">item.title</f:display>
        <f:display property="author">item.author.firstName + ' ' + item.author.lastName</f:display>
        <f:display property="price">item.price</f:display>
        <f:display property="publishDate">item.publishDate</f:display>
        <f:display property="pageCount">item.pageCount</f:display>
    </f:with>
</table>

<div class="form-actions">
    <button crud-button="edit" resource="item"></button>
    <button crud-button="cancel" ></button>
</div>