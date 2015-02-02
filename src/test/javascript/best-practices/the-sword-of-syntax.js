describe('The Sword of Syntax ...', function () {

    describe('Ternary conditional', function () {

        it('is far shorter', function () {

            var isArthur = false;

            var weapon = isArthur ? 'Excalibur' : 'Longsword';

            expect(weapon).toBe('Longsword');
        });
    });
});
