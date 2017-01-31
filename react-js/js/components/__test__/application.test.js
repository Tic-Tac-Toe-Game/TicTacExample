import test from 'tape';

import React from 'react';
import { mount } from 'enzyme';
import { jsdom } from 'jsdom';
import Application from 'reen/components/application';
import GameFactory from 'tic-tac-toe/game.factory';
import Behavior from 'tic-tac-toe/behavior/sequence';

global.document = jsdom('');
global.window = document.defaultView;

test('application suite', function (t) {
    t.plan(23);
    const wrapper = mount(<Application gameFactory={new GameFactory(Behavior)} />);
    const cells = wrapper.find('div.content button');
    t.ok(cells.length === 9);

    cells.forEach(function (cell) {
        t.ok(cell.text() === '');
    });

    const playerSequence = [3, 4];
    const partnerSequence = [8, 7];

    for (let index in playerSequence) {
        const playerCell = cells.at(playerSequence[index]);
        playerCell.simulate('click');
        t.ok(playerCell.hasClass('x'));
        t.ok(playerCell.text() === 'x');
        const partnerResponseCell = cells.at(partnerSequence[index]);
        t.ok(partnerResponseCell.hasClass('o'));
        t.ok(partnerResponseCell.text() === 'o');
    }

    const winnerCell = cells.at(5);
    winnerCell.simulate('click');
    t.ok(winnerCell.hasClass('x'));
    t.ok(winnerCell.text() === 'x');

    const winnerSequence = [3, 4, 5];
    for (let index in winnerSequence) {
        const winnerCell = cells.at(winnerSequence[index]);
        t.ok(winnerCell.hasClass('x'));
    }
});