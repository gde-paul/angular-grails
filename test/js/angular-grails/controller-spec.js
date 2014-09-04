describe('Angular Grails Controllers', function() {

    var item = {'foo': 'bar', 'count': 100}

    beforeEach(module('angularGrails.controllers'));

    describe('DefaultShowCtrl', function() {
        var DefaultShowCtrl, scope;

        beforeEach(module(function($provide) {
            $provide.value('item', item);
        }));

        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                DefaultShowCtrl = $controller('DefaultShowCtrl', { $scope: scope });
            }
        ));

        it('should have the item on the scope', function() {
            expect(scope.item).toEqual(item);
        });
    });

    describe('DefaultCreateEditCtrl', function() {
        var DefaultCreateEditCtrl, scope;

        beforeEach(module(function($provide) {
            $provide.value('item', item);
        }));

        beforeEach(inject(
            function ($controller, $rootScope) {
                scope = $rootScope.$new();
                DefaultCreateEditCtrl = $controller('DefaultCreateEditCtrl', { $scope: scope });
            }
        ));

        it('should have the item on the scope', function() {
            expect(scope.item).toEqual(item);
        });
    });

    describe('DefaultListCtrl', function() {
        var DefaultListCtrl, $scope, deferred;

        var items = [
            {id: 1, name: 'Item1'},
            {id: 2, name: 'Item2'}
        ];

        var items2 = [
            {id: 3, name: 'Item3'},
            {id: 4, name: 'Item4'}
        ]

        var pageSize = 25;

        beforeEach(module(function($provide) {

            var mockCrudService = {
                list: function() {
                    deferred.resolve(items2);
                    return deferred.promise;
                }
            }

            $provide.value('CrudService', mockCrudService);
            $provide.value('items', items);
            $provide.value('pageSize', pageSize);
        }));

        beforeEach(inject(
            function ($controller, $rootScope, $q) {
                deferred = $q.defer();
                $scope = $rootScope.$new();
                DefaultListCtrl = $controller('DefaultListCtrl', { $scope: $scope });
            }
        ));

        it('should have the items and default values set on the scope', function() {
            expect($scope.pageSize).toEqual(pageSize);
            expect($scope.items).toEqual(items);
            expect($scope.page).toEqual(1);
        });

        it('reload should reset page', function() {
            $scope.page = 2;
            $scope.reload();
            $scope.$digest();

            expect($scope.page).toEqual(1);
            expect($scope.items).toEqual(items2);
        });

    });


});
