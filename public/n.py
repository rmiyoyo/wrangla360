import os

# Get all files and directories in current folder
items = os.listdir()

# Filter to show only files (not directories)
files = [item for item in items if os.path.isfile(item)]

# Print each file name
for file in files:
    print(file)