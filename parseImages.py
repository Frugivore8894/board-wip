import os, json
from PIL import Image

list = []

for root, dir_names, file_names in os.walk("public/renders"):
  for f in file_names:
    im = Image.open(os.path.join(root, f))
    list.append({
      "url": os.path.join(root, f)[6:],
      "width": im.width,
      "height": im.height,
      "name": f
    })

with open("list.json", "w") as f:
  json.dump(list, f)