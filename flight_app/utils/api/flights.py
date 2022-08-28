import requests

url = "https://priceline-com-provider.p.rapidapi.com/v1/flights/search"

querystring = {"itinerary_type":"ONE_WAY",
"class_type":"BUS",
"location_arrival":"TLV",
"date_departure":"2022-11-15",
"location_departure":"AKL",
"sort_order":"PRICE",
"price_max":"20000","number_of_passengers":"1",
"price_min":"100",
"date_departure_return":"2022-11-16"}

headers = {
	"X-RapidAPI-Key": "7809a242bdmshb92d36df5e587a5p15c6f1jsn8332ffba2b8a",
	"X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)