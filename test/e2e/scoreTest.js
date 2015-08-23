/* global protractor, describe, beforeEach, it, expect, browser, element, by */
'use strict';

var helpers = require('./helpers');
var elements = helpers.elements;

describe('score.', function() {
    var ptor;

    beforeEach(function() {
        // Tell backend to reload the fixtures
        helpers.loadFixtures();

        // Go to the app
        helpers.loadApp('/');
        ptor = protractor.getInstance();

        // TODO: not so great to logout before every test
        helpers.logoutIfLoggedIn();
        helpers.login();
    });

    describe('visit score.', function() {
        it('should have a page that shows the score.', function() {
            elements.menuButton.click();

            var scoreNavEntry = element(by.css('button.nav-score'));
            expect(scoreNavEntry.isPresent()).toBe(true, 'nav entry for score is present');
            scoreNavEntry.click();
            expect(ptor.getCurrentUrl()).toMatch(/\/score/);

            var scoreLink = element.all(by.css('a.player-score')).first();
            scoreLink.click();

            expect(ptor.getCurrentUrl()).toMatch(/\/veganaut/);

            var profileText = element(by.css('.profile')).getText();
            expect(profileText).toContain('Nickname');
            expect(profileText).toContain('Completed Missions');
            expect(profileText).toContain('Pioneer');
            expect(profileText).toContain('Diplomat');
            expect(profileText).toContain('Evaluator');
            expect(profileText).toContain('Gourmet');
        });
    });

    describe('visit profile of another player.', function() {
        it('should be able to visit profile of a player from the score.', function() {
            browser.get('/score');

            var personLink = element.all(by.css('a.player-score')).first();
            personLink.click();

            expect(ptor.getCurrentUrl()).toMatch(/\/veganaut/);

            var profileText = element(by.css('.profile')).getText();
            expect(profileText).toContain('Nickname');
            expect(profileText).toContain('Completed Missions');
            expect(profileText).toContain('Pioneer');
            expect(profileText).toContain('Diplomat');
            expect(profileText).toContain('Evaluator');
            expect(profileText).toContain('Gourmet');
        });
    });
});
