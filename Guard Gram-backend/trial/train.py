import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score
from sklearn.preprocessing import StandardScaler
from joblib import dump

# Load data
real_accounts = pd.read_json('realAccountData.json')
fake_accounts = pd.read_json('fakeAccountData.json')

# Add the target variable
real_accounts['isFake'] = 0
fake_accounts['isFake'] = 1

# Combine datasets
data = pd.concat([real_accounts, fake_accounts], ignore_index=True)

# Shuffle the data
data = data.sample(frac=1, random_state=42).reset_index(drop=True)

# Feature matrix and target array
X = data.drop('isFake', axis=1)
y = data['isFake']

# Split into training and test set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Feature scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize and train the RandomForestClassifier
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# Make predictions
predictions = model.predict(X_test_scaled)

# Evaluate the model
print("Accuracy:", accuracy_score(y_test, predictions))
print("Classification Report:\n", classification_report(y_test, predictions))

# Save the model and scaler
dump(model, 'account_classifier.joblib')
dump(scaler, 'scaler.joblib')

print("Model and scaler saved successfully.")