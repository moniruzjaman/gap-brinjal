import fitz
import json
import os
from unicodeconverter import convert_bijoy_to_unicode

def is_bijoy_font(font_name):
    if not font_name: return False
    fn = font_name.lower()
    return "sutonny" in fn or "kongsho" in fn

def extract_unicode_content(pdf_path):
    doc = fitz.open(pdf_path)
    lessons = []
    current_lesson = None
    
    for page in doc:
        blocks = page.get_text("dict")["blocks"]
        for b in blocks:
            if "lines" not in b: continue
            for l in b["lines"]:
                line_text = ""
                for s in l["spans"]:
                    text = s["text"]
                    font = s["font"]
                    
                    if is_bijoy_font(font):
                        try:
                            converted = convert_bijoy_to_unicode(text)
                            line_text += converted
                        except:
                            line_text += text
                    else:
                        line_text += text
                
                line_text = line_text.strip()
                if not line_text: continue
                
                # Check for header pattern (e.g. 1.0, 3.1.2)
                # Note: The converter might have changed numbers to Bengali.
                # Standardizing: if it looks like a header (numbers and dots at start)
                temp_text = line_text.replace("।", ".").replace("০", "0").replace("১", "1").replace("২", "2").replace("৩", "3").replace("৪", "4").replace("৫", "5").replace("৬", "6").replace("৭", "7").replace("৮", "8").replace("৯", "9")
                
                is_header = False
                parts = temp_text.split('|')[0].split('.')
                if len(parts) >= 2 and all(p.strip().isdigit() for p in parts[:2]):
                    is_header = True
                elif "|" in line_text[:12] and any(c.isdigit() for c in line_text[:5]):
                    is_header = True

                if is_header:
                    if current_lesson:
                        lessons.append(current_lesson)
                    current_lesson = {
                        "title": line_text,
                        "body": ""
                    }
                elif current_lesson:
                    current_lesson["body"] += line_text + " "
    
    if current_lesson:
        lessons.append(current_lesson)
        
    doc.close()
    return lessons

if __name__ == "__main__":
    pdf_path = "Brinjal .pdf"
    if os.path.exists(pdf_path):
        unicode_lessons = extract_unicode_content(pdf_path)
        with open("extracted_assets/lessons_unicode_v2.json", "w", encoding="utf-8") as f:
            json.dump(unicode_lessons, f, indent=4, ensure_ascii=False)
        print(f"Extracted {len(unicode_lessons)} lessons with font-aware Unicode conversion.")
