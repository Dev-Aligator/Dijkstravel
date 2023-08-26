from coordinateConverter import *
from fetchData import *
import pandas as pd
df = pd.read_csv('/home/aligator/Repositories/Dijkstravel/Dijkstravel/Backend/datasets/vietnam-administrative-areas/districts.csv')
df_cleaned = df.dropna(subset=['location'])

original_rows = df.shape[0]
cleaned_rows = df_cleaned.shape[0]
rows_dropped = original_rows - cleaned_rows
print(df_cleaned.to_string())
print(f"Number of rows dropped: {rows_dropped}")
start_index = 301
end_index = 973
subset_df = df_cleaned.loc[0:3]

total_data = []
for index, row in subset_df.iterrows():
    try:
        name = row['name']
        location = row['location']
        dms_location_coordinates = coordinatesConverter(location)
        dms_location_string = str(dms_location_coordinates['lat']) + ',' + str(dms_location_coordinates['lng'])
        current_place_data = googleMapApiCaller(name, dms_location_string)
        total_data += current_place_data
    except:
        continue
df = pd.DataFrame(total_data)
output_directory = 'output'
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

# Specify the CSV file path within the 'output' directory
csv_file_path = os.path.join(output_directory, "data_4.csv")

# Save the DataFrame to a CSV file
df.to_csv(csv_file_path, index=False)