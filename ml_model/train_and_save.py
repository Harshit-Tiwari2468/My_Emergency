
from sklearn.ensemble import RandomForestClassifier
import joblib
import numpy as np
# features: [length, has_accident, has_medical, has_fire, has_police, has_injury, has_collapse]
X = []
y = []
data = [
    ("car accident on highway", "Accident"),
    ("person collapsed, needs medical", "Medical"),
    ("house on fire, urgent", "Fire"),
    ("call the police, robbery", "Police"),
    ("minor injury, bleeding", "Medical"),
    ("major accident, multiple injured", "Accident"),
    ("building collapse, many trapped", "Disaster")
]
for text,label in data:
    features = [len(text)]
    for kw in ['accident','medical','fire','police','injury','collapse']:
        features.append(1 if kw in text.lower() else 0)
    X.append(features)
    y.append(label)
X = np.array(X)
clf = RandomForestClassifier(n_estimators=20, random_state=42)
clf.fit(X,y)
joblib.dump(clf,'model.pkl')
print("Saved model.pkl")
