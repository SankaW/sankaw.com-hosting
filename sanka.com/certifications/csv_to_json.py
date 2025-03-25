import pandas as pd
import json

# Load the CSV file
file_path = 'certifications/certifications.csv'
df = pd.read_csv(file_path)

# Replace NaN values with None for JSON compatibility
json_result = df.where(pd.notnull(df), None).to_dict(orient='records')

# Prepare the JavaScript content by assigning the JSON to a variable
js_content = f'var certificationsList = {json.dumps(json_result, indent=4)};'

# Specify the path where you want to save the JS file
js_output_path = 'certifications/certifications1.js'
with open(js_output_path, 'w') as js_file:
    js_file.write(js_content)

print(f'JS file saved at: {js_output_path}')



# JSON file Creating code
# import pandas as pd
# import json

# # Specify the path to your CSV file
# csv_file_path = 'sanka.com/certifications/certifications.csv'  

# # Read the CSV file
# df = pd.read_csv(csv_file_path)

# # Replace NaN values with None for JSON compatibility
# json_result = df.where(pd.notnull(df), None).to_dict(orient='records')

# # Specify the path where you want to save the JSON file
# json_output_path = 'certifications.json'
# with open(json_output_path, 'w') as json_file:
#     json.dump(json_result, json_file, indent=4)

# print(f'JSON file saved at: {json_output_path}')
