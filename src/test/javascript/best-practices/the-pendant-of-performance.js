describe('The Pendant of Performance', function () {

    describe('Loop optimisation', function () {

        var treasureChest = {
            necklaces: ['ruby', 'pearl', 'sapphire', 'diamond']
        };

        var treasure;

        it('inefficient way', function () {

            for (var i = 0; i < treasureChest.necklaces.length; i++) {
                treasure = treasureChest.necklaces[i];
            }

            expect(treasure).toBe('diamond');
        });

        it('efficient way', function () {

            for (var i = 0, list = treasureChest.necklaces, length = list.length; i < length; i++) {
                treasure = list[i];
            }

            expect(treasure).toBe('diamond');
        });
    });
});
