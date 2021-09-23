import os
import json

def unify():
    os.chdir('contributors')
    data = []
    for file in os.listdir():
        with open(file, 'r') as f:
            data.append(json.load(f)) 
    return data
                
if __name__ == "__main__":
    data = unify()
    os.chdir('../.data')
    print(os.getcwd())
    with open("complete-data.json", "w") as f:
        json.dump(data, f)
    print("Data obtained successfully")