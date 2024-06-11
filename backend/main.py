import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, jsonify, request
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Initialize Firebase Admin SDK
cred = credentials.Certificate('./mastersway-41dfe-firebase-adminsdk-sh9ch-0edf10b811.json')
firebase_admin.initialize_app(cred)

# Firestore database initialization
db = firestore.client()

# Define interest groups with associated terms
interest_groups = {
    "Artificial Intelligence": [
        "Machine Learning", "Deep Learning", "Artificial Intelligence", "Human-Centered AI",
        "Pattern Recognition", "Transfer Learning", "Tensors", "Deep Networks", "ML"
    ],
    "Data Science": [
        "Data Mining", "Information Extraction", "Web Mining", "Probabilistic Risk Assessment", 
        "QSAR", "QSPR modelling", "Computational Topology", "Text Summarization", "Ontology"
    ],
    "Computer Vision": [
        "Computer Vision", "Image Processing", "Multimedia Forensics", "Medical Image Processing & Analysis"
    ],
    "Networks and Systems": [
        "Internet of Things", "Edge Computing", "Network Reliability", "System Reliability Modeling", 
        "Peer-to-peer networks", "SDN", "WBANs", "DTNs", "Multimedia Systems", "Multimedia Networks",
        "Real-Time Systems", "Privacy Aware Surveillance"
    ],
    "Computational Sciences": [
        "Theoretical Chemistry", "Computational Biophysics", "Computational and Theoretical Polymer Physics", 
        "Molecular Modeling", "Finite Element Analysis", "Structural Optimization"
    ],
    "Health and Life Sciences": [
        "Drug discovery", "hematology", "HIV", "Thyroid Cancer", "Inflammation", "Endocrine Surgery", 
        "Adrenal Cancer", "Neurodegeneration", "Metabolism", "tissue engineering", "Plant Breeding"
    ],
    "Materials Science": [
        "Porous oxide materials", "Magnetic and Multiferroic materials"
    ],
    "Energy and Environment": [
        "Renewable Energy", "Energy & Power"
    ],
    "Mathematics and Physical Sciences": [
        "Differential Geom.", "Algebra", "Digital Geometry"
    ],
    "Software and Systems Engineering": [
        "Design Patterns", "Software Architecture", "Game Theory", "Scheduling", "OR", "Reliability Testing"
    ],
    "Miscellaneous": [
        "Manas Roga", "General Surgery", "Psychosomatic Disorders", "Optimization"
    ],
    # Add additional categories as needed
}



@app.route('/get_professors', methods=['GET'])
def get_professors():
    college_names = request.args.get('college_names')  # Expected to be comma-separated
    interest_group_name = request.args.get('interest_group')

    try:
        all_professors = []

        # Query Firestore for documents in specified college collections or all if not specified
        if college_names:
            college_names_list = [name.strip() for name in college_names.split(',')]
        else:
            college_names_list = [coll.id for coll in db.collections()]

        # Fetch professors from each specified college collection
        for college_name in college_names_list:
            professors = db.collection(college_name).stream()
            for doc in professors:
                professor_data = doc.to_dict()
                all_professors.append(professor_data)

        # If an interest group is specified, filter the professors by that interest group
        if interest_group_name:
            if interest_group_name not in interest_groups:
                return jsonify({"error": "Interest group not found"}), 404
            filtered_interests = interest_groups[interest_group_name]
            all_professors = [
                prof for prof in all_professors
                if set(filtered_interests) & set(prof.get('interests', []))  # Intersection of interests
            ]

        return jsonify(all_professors), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
