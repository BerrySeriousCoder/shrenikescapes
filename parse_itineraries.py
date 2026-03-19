import os
import json
from docx import Document

base_dir = "../Website Material/Itineraries"
itineraries = {}

def get_id(filename):
    # Removes generic extensions and words
    name = filename.replace(' Itinerary.docx', '').replace('.docx', '').strip().lower().replace(' ', '-')
    return name

for region in ['DOMESTIC', 'INTERNATIONAL']:
    region_path = os.path.join(base_dir, region)
    if not os.path.exists(region_path): continue
    for file in os.listdir(region_path):
        if not file.endswith('.docx'): continue
        
        doc = Document(os.path.join(region_path, file))
        tour_id = get_id(file)
        
        days = []
        current_day = None
        
        for para in doc.paragraphs:
            text = para.text.strip()
            if not text: continue
            
            # Simple heuristic for "Day X: Title"
            if text.lower().startswith("day ") and ":" in text:
                parts = text.split(":", 1)
                
                # Save previous day
                if current_day:
                    current_day["description"] = current_day["description"].strip()
                    days.append(current_day)
                
                current_day = {
                    "day": parts[0].strip(),
                    "title": parts[1].strip(),
                    "description": ""
                }
            elif current_day:
                current_day["description"] += text + " "
                
        # Append the very last day parsed
        if current_day:
            current_day["description"] = current_day["description"].strip()
            days.append(current_day)
            
        itineraries[tour_id] = days

with open("lib/data/itineraries.json", "w", encoding="utf-8") as f:
    json.dump(itineraries, f, indent=2, ensure_ascii=False)

print(f"Generated lib/data/itineraries.json with {len(itineraries)} tours.")
