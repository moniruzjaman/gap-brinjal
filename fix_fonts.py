import json
from unicodeconverter import convert_bijoy_to_unicode

def convert_json_file(input_path, output_path):
    with open(input_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    converted_data = []
    for item in data:
        header = item.get("title", "")
        content = item.get("body", "")
        
        # Convert header and body
        try:
            u_header = convert_bijoy_to_unicode(header)
            u_content = convert_bijoy_to_unicode(content)
        except Exception as e:
            print(f"Error converting item: {e}")
            u_header = header
            u_content = content
            
        converted_data.append({
            "title": u_header,
            "body": u_content
        })
        
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(converted_data, f, indent=4, ensure_ascii=False)
    
    print(f"Successfully converted {input_path} to {output_path}")

if __name__ == "__main__":
    convert_json_file("extracted_assets/lessons_refined.json", "extracted_assets/lessons_unicode.json")
