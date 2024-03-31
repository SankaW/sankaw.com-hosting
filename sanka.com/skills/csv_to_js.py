import pandas as pd
import json

# Load the CSV file
file_path = 'sanka.com/skills/technology_tools.csv'
df = pd.read_csv(file_path)

# Replace NaN values with None for JSON compatibility
json_result = df.where(pd.notnull(df), None).to_dict(orient='records')

# Prepare the JavaScript content by assigning the JSON to a variable
js_content = f'var skillList = {json.dumps(json_result, indent=4)};'

# Specify the path where you want to save the JS file
js_output_path = 'sanka.com/skills/technology_tools.js'
with open(js_output_path, 'w') as js_file:
    js_file.write(js_content)

print(f'JS file saved at: {js_output_path}')