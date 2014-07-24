<g:if test="${this['ng-options']}">
    <select class="form-control"  ng-model="${this['ng-model']}" ng-options="${this['ng-options']}" ${required ? 'required' : ''} name="${property}"  ></select>
</g:if>
<g:else>
    <input class="form-control" ng-model="${this['ng-model']}" ${required ? 'required' : ''} name="${property}" />
</g:else>