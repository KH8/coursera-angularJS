describe('Controller: MenuController', function () {
    beforeEach(module('confusionApp'));
    var MenuController, scope, $httpBackend;

    beforeEach(inject(function ($controller, _$httpBackend_, $rootScope, dishesService) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('http://localhost:3000/dishes').respond([
            {
                "id": 0,
                "name": "Uthapizza",
                "image": "images/uthapizza.png",
                "category": "mains",
                "label": "Hot",
                "price": "4.99",
                "description": "A",
                "comments":[{}]
            },
            {
                "id": 1,
                "name": "Zucchipakoda",
                "image": "images/zucchipakoda.png",
                "category": "mains",
                "label": "New",
                "price": "4.99",
                "description": "A",
                "comments":[{}]
            }
        ]);
        $httpBackend.expectGET('views/header.html').respond('');
        $httpBackend.expectGET('views/home.html').respond('');
        $httpBackend.expectGET('views/footer.html').respond('');
        scope = $rootScope.$new();
        MenuController = $controller('MenuController', {
            $scope: scope, dishesService: dishesService
        });
        $httpBackend.flush();
    }));

    it('should have showDetails as false', function () {
        expect(scope.showDetails).toBeFalsy();
    });

    it('should create "dishes" with 2 dishes fetched from xhr', function () {
        expect(scope.showMenu).toBeTruthy();
        expect(scope.dishes).toBeDefined();
        expect(scope.dishes.length).toBe(2);
    });

    it('should have the correct data order in the dishes', function () {
        expect(scope.dishes[0].name).toBe('Uthapizza');
        expect(scope.dishes[1].name).toBe('Zucchipakoda');
    });

    it('should change the tab selected based on tab clicked', function () {
        expect(scope.tab).toEqual(0);

        scope.select(3);

        expect(scope.tab).toEqual(3);
        expect(scope.filterText).toEqual('dessert');
    });
});