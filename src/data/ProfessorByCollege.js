import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../auth/firebase";

const listOfColleges = [
  "IIT Bombay",
  "IIT Delhi",
  "IIT GandhiNagar",
  "IIT Bhuvaneshwar",
  "IIT Goa",
  "IIT Guwahati",
  "IIT Hyderabad",
  "IIT Indore",
  "IIT Jammu",
  "IIT Jodhpur",
  "IIT Kanpur",
  "IIT Kharagpur",
  "IIT Madras",
  "IIT Mandi",
  "IIT Patna",
  "IIT_Rookee",
  "IIT Ropar",
  "IIT Varanasi",
];

const getProfessorsFromAllColleges = async (count) => {
  try {
    const professorsData = [];

    for (const college of listOfColleges) {
      const teachersCollectionRef = collection(db, college);
      const teachersQuery = count
        ? query(teachersCollectionRef, limit(count))
        : teachersCollectionRef;
      const querySnapshot = await getDocs(teachersQuery);

      querySnapshot.forEach((doc) => {
        professorsData.push(doc.data());
      });
    }

    return professorsData;
  } catch (error) {
    console.error("Error fetching professors from all colleges:", error);
    throw error;
  }
};

const fetchPublications = async (colleges, countOfProfessor, countOfPaper) => {
  const publicationsData = [];

  for (const college of colleges) {
    try {
      const collegeCollectionRef = collection(db, college);
      const collegeQuerySnapshot = await getDocs(
        query(collegeCollectionRef, limit(countOfProfessor))
      );

      for (const doc of collegeQuerySnapshot.docs) {
        const publicationsCollectionRef = collection(doc.ref, "Publications");
        const publicationsQuerySnapshot = await getDocs(
          query(publicationsCollectionRef, limit(countOfPaper))
        );

        publicationsQuerySnapshot.forEach((pubDoc) => {
          publicationsData.push({
            ...pubDoc.data(),
            college: college, // Adding the college name to the publication data
          });
        });
      }
    } catch (error) {
      console.error(`Error fetching publications for ${college}:`, error);
    }
  }

  return publicationsData;
};

const fetchProfessorById = async (professorId) => {
  for (const college of listOfColleges) {
    try {
      // Iterate through each college in the list
      for (const college of listOfColleges) {
        const professorRef = doc(db, college, professorId); // Reference the professor document
        const professorSnapshot = await getDoc(professorRef); // Get the document snapshot

        if (professorSnapshot.exists()) {
          // If the document exists, return its data
          return professorSnapshot.data();
        }
      }

      // If no document is found, return null
      return null;
    } catch (error) {
      console.error(`Error fetching publications for ${college}:`, error);
    }
  }
};

const fetchProfessorsByNames = async (professorName) => {
  try {
    if (!professorName) {
      return [];
    }

    const professorData = [];
    let totalResults = 0;

    const lowercaseProfessorName = professorName.toLowerCase(); // Convert search query to lowercase

    for (const college of listOfColleges) {
      const collegeRef = collection(db, college);
      const q = query(collegeRef, limit(5 - totalResults));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const name = data.professor_name;

        // Check if the name includes the search query (case-insensitive)
        if (
          name.toLowerCase().includes(lowercaseProfessorName) &&
          totalResults < 5
        ) {
          professorData.push({
            college: college,
            id: doc.id,
            ...data,
          });
          totalResults++;
        }
      });

      if (totalResults >= 5) {
        break; // Stop searching if 5 results are collected
      }
    }

    if (professorData.length === 0) {
      return null;
    }

    return professorData;
  } catch (error) {
    console.error("Error fetching professors by name:", error);
    throw error;
  }
};

export default fetchProfessorsByNames;

const fetchProfessorPublications = async (professorId, college, count) => {
  try {
    // Initialize Firestore
    const publications = [];

    // Reference the professor document
    const professorRef = doc(db, college, professorId);

    // Reference the publications collection for the professor
    const publicationsCollectionRef = collection(professorRef, "Publications");

    // Fetch all publications
    // const publicationsQuerySnapshot = await getDocs(publicationsCollectionRef);

    const publicationsQuerySnapshot = await getDocs(
      query(publicationsCollectionRef, limit(count))
    );
    publicationsQuerySnapshot.forEach((doc) => {
      publications.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    // Return the fetched publications
    return publications;
  } catch (error) {
    console.error("Error fetching publications:", error);
    return null;
  }
};

export {
  fetchPublications,
  getProfessorsFromAllColleges,
  listOfColleges,
  fetchProfessorById,
  fetchProfessorPublications,
  fetchProfessorsByNames,
};
