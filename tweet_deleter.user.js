// ==UserScript==
// @name         tweet_deleter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Deletes tweets returned in the search results
// @author       Sedat Kapanoglu <sedat@kapanoglu.com>
// @match        https://twitter.com/search?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// @require      https://code.jquery.com/jquery-latest.js
// @unwrap
// ==/UserScript==

/*global $*/

(function() {
    'use strict';

    // 100 works too, but Twitter disables the endpoint temporarily
    // in a minute or two. Feel free to experiment with this.
    const ACTION_DELAY_MS = 500

    function deleteSearchResults() {
        let tweet = $("article div[data-testid='caret']").first()
        if (tweet.length === 0) {
            // no tweets left
            return
        }
        tweet.click()

        window.setTimeout(() => {
            // need to wait for DOM to respond
            let menuitem = $("div[data-testid='Dropdown'] div[role='menuitem']").first()
            menuitem.click()

            window.setTimeout(() => {
                let button = $("div[data-testid='confirmationSheetDialog'] div[role=button]").first()
                button.click()

                window.setTimeout(deleteSearchResults, ACTION_DELAY_MS)
            }, ACTION_DELAY_MS)
        }, ACTION_DELAY_MS)
    }

    var observer = new MutationObserver((r, o) => {
        // wait until the search bar container appears in DOM
        let parents = $(".r-sb58tz")
        if (parents.length === 1) {
            let parent = parents[0]
            let button = $("<button>Delete all</button>").click(deleteSearchResults)
            parent.appendChild(button[0])
            console.log("Gotcha!")
            o.disconnect()
        }
    })
    observer.observe(document.body, { subtree: true, childList: true })
})();