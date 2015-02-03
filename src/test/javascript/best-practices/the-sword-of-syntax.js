describe('The Sword of Syntax ...', function () {

    function someAction(value) {

    }

    describe('Ternary conditional', function () {

        it('is far shorter', function () {

            var isArthur = false;

            var weapon = isArthur ? 'Excalibur' : 'Longsword';

            expect(weapon).toBe('Longsword');
        });

        it('can invoke action', function () {

            (true || false) ? someAction('True') : someAction('False')
        });

        it('can pick immediately-invoked function', function () {

            (true || false) ?
                function () {
                    someAction('True')
                }() :
                function () {
                    someAction('False')
                }();
        });

        it('can execute multiple actions', function() {

            var weapon, helmet;

            (true || false) ?
                (weapon = 'Excalibur', helmet = 'Goosewhite')
                :
                (weapon = 'Longsword', helmet = 'Iron Helm');

            expect(weapon).toBe('Excalibur');
            expect(helmet).toBe('Goosewhite');
        });
    });

    describe('Logical Assignment I: The "OR" operator', function() {

        it('can be used to initialize non-existing objects', function() {

            var swords = undefined;

            swords = swords || [];
            swords.push('Excalibur');

            expect(swords).toContain('Excalibur');
        });
    });

    describe('Logical Assignment II: The "AND" operator', function() {

        it('can be used to find first falsy value', function() {

            var result = undefined && 42;

            expect(result).toBe(undefined);

            result = 0 && ['Sweet', 'array'];

            expect(result).toBe(0);

            result = '' && {type:'ring', stone:'diamond'};

            expect(result).toBe('');
        });
    });

});
