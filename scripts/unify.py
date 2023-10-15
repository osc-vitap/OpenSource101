import os
import json

def unify():
    # Using a context manager (with) for changing directories to ensure it's changed back.
    current_dir = os.getcwd()
    os.chdir('contributors')

    data = []
    for file in os.listdir():
        if file.endswith(".json"):  # Ensure only opening JSON files
            with open(file, 'r') as f:
                data.append(json.load(f))
    
    os.chdir(current_dir)  # Changing back to the original directory
    return data

if __name__ == "__main__":
    data = unify()
    target_directory = '../.data'  # Defining the target directory
    os.makedirs(target_directory, exist_ok=True)  # Creating the target directory if it doesn't exist

    with open(os.path.join(target_directory, "complete-data.json"), "w") as f:
        json.dump(data, f, indent=4)  # Indenting for a more human-readable JSON

    print("Data obtained successfully")
