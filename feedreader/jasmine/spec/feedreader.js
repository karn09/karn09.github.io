/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* "RSS Feeds" */
    describe('RSS Feeds', function() {
        /* This tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('URLs are defined', function() {
            allFeeds.forEach(function (feed) {
                expect(feed['url']).toBeDefined();
                expect(feed['url'].length).not.toBe(0);
            })
        })
        /* Test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined', function() {
            allFeeds.forEach(function (feed) {
                expect(feed['name']).toBeDefined();
                expect(feed['name'].length).not.toBe(0);
            })
         })
    });


    /* "The menu" */
    describe('The menu', function () {

        /* Test ensures that the menu element is
         * hidden by default. 
         */
        it('is hidden by default', function() {
            var body = document.getElementsByTagName('body')
            expect(body[0].className).toBe('menu-hidden')
        })
         /* Test ensures that the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when clicked', function() {
            var button = document.getElementsByClassName('menu-icon-link');
            var clickEvent = new MouseEvent('click');
            var body = document.getElementsByTagName('body');

            button[0].dispatchEvent(clickEvent);
            expect(body[0].className).toBe('');
            button[0].dispatchEvent(clickEvent);
            expect(body[0].className).toBe('menu-hidden');

        })
        /* Test ensures that feed list buttons will 
         * load new entries when clicked.
         */
        it('feedlist changes entries when clicked', function() {
            var button = document.getElementsByClassName('menu-icon-link');
            var clickEvent = new MouseEvent('click');
        })
    })
    /* "Initial Entries" */
    describe('Initial Entries', function() {
        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test required
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
            loadFeed(0, done);
         })

         it('are contained within feed on loadFeed', function() {
            expect(document.querySelectorAll('article.entry').length).not.toBe(0);
         })

    })
    /* "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* Test ensures that when a new feed is loaded
         * by the loadFeed function the content actually changes.
         * loadFeed() is asynchronous.
         */
         var entries = document.querySelectorAll('article.entry');
         beforeEach(function(done) {
            loadFeed(2, done);
         })
         it('changes content when feed is loaded', function() {
            expect(entries).not.toEqual(document.querySelectorAll('article.entry'))
         })
    })
}());
