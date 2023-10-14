import math
from geopy.geocoders import Nominatim

# Initialize geocoder
geolocator = Nominatim(user_agent="business_matcher")


def get_location_coordinates(location_name):
    """Convert a location name to latitude and longitude coordinates."""
    location = geolocator.geocode(location_name)
    if location:
        return (location.latitude, location.longitude)
    else:
        return None

# Supplier's pricing structure


def get_supplier_price(quantity):
    """Determine unit price based on quantity."""
    if quantity < 10:
        return 200
    elif quantity < 50:
        return 180
    elif quantity < 100:
        return 150
    else:
        return 120


# Dummy data
businesses = [
    {"id": 1, "item": "printer", "quantity": 5, "budget": 1000,
        "location": "Berlin, Germany", "business_sector": "IT"},
    {"id": 2, "item": "printer", "quantity": 4, "budget": 800,
        "location": "Berlin, Germany", "business_sector": "IT"},
    {"id": 3, "item": "chair", "quantity": 10, "budget": 500,
        "location": "Amsterdam, Netherlands", "business_sector": "Furniture"},
    {"id": 4, "item": "chair", "quantity": 15, "budget": 700,
        "location": "Berlin, Germany", "business_sector": "Furniture"},
]


def compute_distance(location1, location2):
    R = 6371.0  # radius of Earth in kilometers
    lat1, lon1 = location1
    lat2, lon2 = location2
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat / 2) ** 2 + math.cos(math.radians(lat1)) * \
        math.cos(math.radians(lat2)) * math.sin(dlon / 2) ** 2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    distance = R * c
    return distance


def find_optimal_match(new_business):
    coords = get_location_coordinates(new_business['location'])
    if not coords:
        print(f"Failed to get coordinates for {new_business['location']}")
        return None
    new_business['location'] = coords

    max_savings = 0
    optimal_match = None

    for business in businesses:
        if business["item"] != new_business["item"]:
            continue
        if compute_distance(get_location_coordinates(business["location"]), new_business["location"]) > 100:
            continue
        if business["business_sector"] != new_business["business_sector"]:
            continue

        # Calculate combined savings
        combined_quantity = business["quantity"] + new_business["quantity"]
        combined_individual_cost = get_supplier_price(
            business["quantity"]) * business["quantity"] + get_supplier_price(new_business["quantity"]) * new_business["quantity"]
        combined_cost = get_supplier_price(
            combined_quantity) * combined_quantity
        savings = combined_individual_cost - combined_cost

        if savings > max_savings:
            max_savings = savings
            optimal_match = business
            optimal_match["combined_quantity"] = combined_quantity
            optimal_match["savings"] = savings

    return optimal_match


new_request = {"id": 5, "item": "printer", "quantity": 6,
               "budget": 1200, "location": "Berlin, Germany", "business_sector": "IT"}
optimal_match = find_optimal_match(new_request)

print(
    f"New request from business with ID {new_request['id']} for item: {new_request['item']}")
print("-" * 40)

if optimal_match:
    per_unit_savings_new = optimal_match["savings"] / new_request["quantity"]
    per_unit_savings_existing = optimal_match["savings"] / \
        optimal_match["quantity"]
    print(
        f"Optimal match found with business ID {optimal_match['id']} for item {optimal_match['item']}")
    print(
        f"Combined savings for both businesses: ${optimal_match['savings']:.2f}")
    print(f"Per unit savings for new business: ${per_unit_savings_new:.2f}")
    print(
        f"Per unit savings for matched business: ${per_unit_savings_existing:.2f}\n")
else:
    print("No optimal matches found.")
