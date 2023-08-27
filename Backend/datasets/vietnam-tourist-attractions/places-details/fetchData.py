import os
import requests
from dotenv import load_dotenv
import json
import time
import pandas as pd

load_dotenv()
api_key = os.environ.get("API_KEY")

df = pd.read_csv("/home/aligator/Repositories/Dijkstravel/Dijkstravel/Backend/datasets/vietnam-tourist-attractions/output/vietnam_tourist_attractions_cleaned.csv")
places_id = df['id'].tolist()

base_url = "https://maps.googleapis.com/maps/api/place/details/json"
fields = "current_opening_hours,formatted_phone_number,international_phone_number,opening_hours,secondary_opening_hours,website,curbside_pickup,delivery,dine_in,editorial_summary,price_level,rating,reservable,reviews,serves_beer,serves_breakfast,serves_brunch,serves_dinner,serves_lunch,serves_vegetarian_food,serves_wine,takeout,user_ratings_total"
# Contruct the request URL
params = {
    "key" : api_key,
    "reviews_no_translations" : "true",
    "fields" : fields,
}

csv_data = []

def googleMapApiCaller():
    for place_id in places_id[:100]:
        params['place_id'] = place_id

        response = requests.get(base_url, params=params)
        data = response.json()
        if data['status'] == "OK":
            place_details = data.get("result", [])
            current_opening_hours = place_details.get('current_opening_hours', "None")
            formatted_phone_number = place_details.get('formatted_phone_number', "None")
            international_phone_number = place_details.get('international_phone_number', "None")
            opening_hours = place_details.get('opening_hours', "None")
            secondary_opening_hours = place_details.get('secondary_opening_hours', "None")
            website = place_details.get('website', "None")
            curbside_pickup = place_details.get('curbside_pickup', "None")
            delivery = place_details.get('delivery', "None")
            dine_in = place_details.get('dine_in', "None")
            editorial_summary = place_details.get('editorial_summary', "None")
            price_level = place_details.get('price_level', "None")
            rating = place_details.get('rating', "None")
            reservable = place_details.get('reservable', "None")
            reviews = place_details.get('reviews', "None")
            serves_beer = place_details.get('serves_beer', "None")
            serves_breakfast = place_details.get('serves_breakfast', "None")
            serves_brunch = place_details.get('serves_brunch', "None")
            serves_dinner = place_details.get('serves_dinner', "None")
            serves_lunch = place_details.get('serves_lunch', "None")
            serves_vegetarian_food = place_details.get('serves_vegetarian_food', "None")
            serves_wine = place_details.get('serves_wine', "None")
            takeout = place_details.get('takeout', "None")
            user_ratings_total = place_details.get('user_ratings_total', "None")

            csv_data.append({"id" : place_id, "current_opening_hours": current_opening_hours, "formatted_phone_number" : formatted_phone_number, "international_phone_number" : international_phone_number,
            "opening_hours" : opening_hours, "secondary_opening_hours" : secondary_opening_hours, "website" : website, "curbside_pickup" : curbside_pickup, "delivery" : delivery, "dine_in" : dine_in, 
            "editorial_summary" : editorial_summary, "price_level" : price_level , "rating" : rating, "reservable" :  reservable , 'reviews' : reviews, 'serves_beer':serves_beer, 'serves_breakfast' : serves_breakfast
            , "serves_dinner" : serves_dinner , "serves_lunch" : serves_lunch, "serves_vegetarian_food" : serves_vegetarian_food, "serves_wine" : serves_wine, "takeout" : takeout, "user_ratings_total" : user_ratings_total  })
googleMapApiCaller()

df = pd.DataFrame(csv_data)
output_directory = 'output'
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

# Specify the CSV file path within the 'output' directory
csv_file_path = os.path.join(output_directory, "details_1.csv")

# Save the DataFrame to a CSV file
df.to_csv(csv_file_path, index=False)
