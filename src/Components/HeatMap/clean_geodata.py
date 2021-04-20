#!/usr/bin/env python3
import json
import math

countries = set()

with open("latest.json", "r") as f:
    data = json.load(f)

    cleaned = {"type": "FeatureCollection",
               "features": []}
    for d in data:
        if d["level"] != "country":
            continue
        if "cases" not in d:
            continue
        else:
            cases = d["cases"]


        # Remove duplicate countries
        country = d["countryName"]
        if country in countries:
            continue
        else:
            countries.add(country)

        if "deaths" in d:
            deaths = d["deaths"]
        else:
            continue

        if "recovered" in d:
            rec = d["recovered"]
        else:
            continue
        
        try:
            active = max(0, cases - deaths - rec)
        except ValueError:
            print(cases, deaths, rec)

        new_d = {"type": "Feature",
                 "geometry": {
                     "type": "Point",
                     "coordinates": d["coordinates"]
                 },
                 "properties": {
                     "locName": d["countryName"],
                     "active": active,
                 }
                 }

        cleaned["features"].append(new_d)

    #max_active = max([c["properties"]["active"] for c in cleaned["features"]])
    #for c in cleaned["features"]:
    #    c["properties"]["active"] = max(5, math.ceil(c["properties"]["active"]/max_active*15))

    with open("data.json", "w+") as f2:
        json.dump(cleaned, f2)
