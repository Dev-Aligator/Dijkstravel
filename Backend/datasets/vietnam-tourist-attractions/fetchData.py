import os
import requests
from dotenv import load_dotenv
import json
import time
import pandas as pd
# Load variables from .env into the environment
load_dotenv()

# Now you can access the variables using the `os.environ` dictionary
api_key = os.environ.get("API_KEY")
print(api_key)
base_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"

# Input query
input_query = "Ho Chi Minh City, Vietnam"
query = "Ho Chi Minh City, Vietnam"
fields = "place_id,formatted_address,name,type,photo,rating,opening_hours,geometry"
language = ["en"]
categories = [
    "amusement_park",
    "aquarium",
    "art_gallery",
    "bakery",
    "bar",
    "book_store",
    "bowling_alley",
    "cafe",
    "campground",
    "car_rental",
    "casino",
    "museum",
    "movie_theater",
    "night_club",
    "park",
    "restaurant",
    "shopping_mall",
    "spa",
    "stadium",
    "tourist_attraction",
    "zoo"
]

radius = 50000
# Construct the request URL


# Paginate through results using page tokens
params = {
    "key": api_key,
    "radius": radius,
}


def googleMapApiCaller(name, location):
    all_places = []
    csv_data = []
    for place_type in categories:
        params['type'] = place_type
        params['location'] = location
        print(place_type)
        while True:
            response = requests.get(base_url, params=params)
            data = response.json()

            # Extract and append places to the list
            places = data.get("results", [])
            all_places.extend(places)
            print(len(places))
            # Check if there's a next page token
            next_page_token = data.get("next_page_token")
            params['pagetoken'] = next_page_token

            if not next_page_token:
                break
            time.sleep(1.5)

    count = 0
    # Extract information from the response
    if all_places:
        for place in all_places:
            try:
                place_id = place['place_id']
                place_types = place['types']
                place_name = place["name"]
                place_location = place["geometry"]['location']
                place_address = place.get("vicinity", "None")
                place_photo_ref = place.get('photos', [{"photo_reference": "None"}])[0].get('photo_reference', "None")
                place_rating = place.get('rating', "None")
                place_total_ratings = place.get('user_ratings_total', "None")
                place_opening_hours = place.get('opening_hours', "None")
                # english_response = requests.get(english_url, english_params )
                # english_data = english_response.json()['result']
                # english_name = english_data['name']
                # english_addr = english_data['formatted_address']

                # try:
                #     photo_ref = place["photos"][0]["photo_reference"]
                #     photo_url = f"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference={photo_ref}&key={api_key}"
                #     # print("Photo URL:", photo_url)
                #     photo_response = requests.get(photo_url)
                #     # Check for a successful response
                #     if photo_response.status_code == 200:
                #         place_photo = photo_response.url
                #     else:
                #         print("Error retrieving photo:", photo_response.status_code)
                # except:
                #     place_photo = "None"
                csv_data.append({"id":place_id, "name": place_name, "types" : place_types, "address" : place_address, "location" : place_location, "district" : name, "photo_ref" : place_photo_ref, "place_rating" : place_rating, "place_total_ratings" : place_total_ratings, "place_opening_hours" : place_opening_hours})
                print(count)
                count+=1
            except:
                continue
    return csv_data

