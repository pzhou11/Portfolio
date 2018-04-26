from __future__ import absolute_import, print_function, unicode_literals

import itertools, time
import tweepy, copy 
import Queue, threading
import csv
from streamparse.spout import Spout

################################################################################
# Twitter credentials
# Source: https://gist.github.com/yanofsky/5436496
################################################################################
twitter_credentials = {
    "consumer_key"        :  "",
    "consumer_secret"     :  "",
    "access_token"        :  "",
    "access_token_secret" :  "",
}


def get_tweets(user_name):

        consumer_key = ""
        consumer_secret = "" 
        access_token = ""
        access_token_secret = ""

	auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
	
	api = tweepy.API(auth)
	
	# create a list of most recent tweets
	tweet_list = []
	
	# save tweets in the list
	tweet = api.user_timeline(screen_name = user_name, count = 20)
	tweet_list.extend(tweet)

	# convert into an array, include time and text
	csv_tweet = [[post.created_at, post.text.encode("utf-8")] for post in tweet_list]
	
	with open('/home/w205/W205_Project/serving/%s.csv' % user_name, 'w') as f:
		write = csv.writer(f)
		write.writerow(["time_created", "post"])
		write.writerows(csv_tweet)

pass

if __name__ == '__main__':
	get_tweets("MIDStest")
