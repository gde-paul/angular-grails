<g:if test="${this['ng-options']}">
    <select class="form-control" ng-model="${this['ng-model']}" ng-options="${this['ng-options']}" ></select>
</g:if>
<g:else>
    <input class="form-control" ng-model="${this['ng-model']}" />
</g:else>