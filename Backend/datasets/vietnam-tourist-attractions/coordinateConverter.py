import re
def dms_to_decimal(degrees, minutes, seconds, direction):
    decimal_degrees = degrees + (minutes / 60) + (seconds / 3600)
    if direction in ['S', 'W']:
        decimal_degrees = -decimal_degrees
    return decimal_degrees

def parse_dms_input(input_str):
    pattern = r'(\d+) (\d+) (\d+)([NS]), (\d+) (\d+) (\d+)([EW])'
    match = re.match(pattern, input_str)
    if match:
        groups = match.groups()
        dms_latitude = (int(groups[0]), int(groups[1]), int(groups[2]), groups[3])
        dms_longitude = (int(groups[4]), int(groups[5]), int(groups[6]), groups[7])
        return dms_latitude, dms_longitude
    else:
        return None

def coordinatesConverter(input_str):
    dms_coordinates = parse_dms_input(input_str)
    if dms_coordinates:
        dms_latitude, dms_longitude = dms_coordinates
        latitude = dms_to_decimal(*dms_latitude)
        longitude = dms_to_decimal(*dms_longitude)

        location = {
            "lat": latitude,
            "lng": longitude
        }
        return location
    else:
        print("Invalid input format.")


