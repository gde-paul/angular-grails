describe('angularGrails CrudResourceFactory: ', function() {

    var crudResourceFactory;

    beforeEach(module('angularGrails.services.crud'));
    beforeEach(module(function($provide) {
        $provide.value('rootUrl', '/');
    }));

    beforeEach(inject(function(CrudResourceFactory) {
        crudResourceFactory = CrudResourceFactory;
    }));

    it('should be able to create multiple CrudResource objects', function () {
        var crudResource1 = crudResourceFactory('/api/foo1', 'Foo1');
        var crudResource2 = crudResourceFactory('/api/foo1', 'Foo2');

        expect(crudResource1.getName()).toEqual('Foo1');
        expect(crudResource2.getName()).toEqual('Foo2');

        expect(crudResource1).not.toBe(crudResource2);
    });


});