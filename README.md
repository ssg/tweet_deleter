# tweet_deleter

This is a TamperMonkey script that deletes tweets returned in a search
result for mass-deleting your own tweets.

Since Twitter's API has been severely restricted for the free tier, and there was
no way left to delete our entries automatically without shutting down our
account, a TamperMonkey script was the only way left to go.

# known issues
This isn't user-friendly, and not guaranteed to work correctly either. You can LOSE YOUR TWEETS easily,
or LOSE YOUR ACCOUNT even due to arbitrary policies Twitter brings in, and inconsistent way
they apply it. Use at your own risk. You've been warned.

# usage
Navigate to https://twitter.com/search from the address bar. You should now see a "Delete All" button
next to the search box. If you don't see the button, try refreshing the page.

Now search for `from:<yourusername>` and any additional criteria you want. For example you can add
`until:2022-02-01` to search text to get your tweets posted before Feb 1st, 2020. 

The default tab is "Top" and limited in count. You might want to switch to "Latest" tab to get more
deletion coverage.

Click on "Delete All" and the script will start deleting your tweets. It won't ask for any confirmation.

# license

MIT License. See [LICENSE.md](LICENSE.md) file for details.
