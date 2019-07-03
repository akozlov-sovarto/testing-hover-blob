import { Selector } from 'testcafe';

fixture`Selection`
    .page('http://127.0.0.1:38010/index.html');

test('On hover element should have background-color from blob css', async t => {
    await t
        .hover('.root')
        .wait(3000)
        .expect(Selector('.root').getStyleProperty('background-color'))
        .eql('rgb(0, 0, 0)');
});