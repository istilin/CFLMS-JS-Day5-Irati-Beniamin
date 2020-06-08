//describe your code

 describe("Calculate Insurance", function() {

    //what it should do

    it("should Return 675 for age 32, Horse Power 200 and Country Austria" , function() {

        //expect something

        expect(calculation("Austria", 200, 32))

            .toEqual(675);

    });

    //what it should do

    it("should Return 800 for age 37, Horse Power 200 and Country Greece" , function() {

        //expect something

        expect(calculation("Greece", 200, 37))

            .toEqual(800.00);

    });

    

});