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

const interest_groups = [
  "Artificial Intelligence",
  "Data Science",
  "Computer Vision",
  "Networks and Systems",
  "Computational Sciences",
  "Health and Life Sciences",
  "Materials Science",
  "Energy and Environment",
  "Mathematics and Physical Sciences",
  "Software and Systems Engineering",
  "Miscellaneous"
];
const getProfessorsFromAllColleges = async (
  allColleges = listOfColleges,
  count
) => {
  try {
    const professorsData = [];

    for (const college of allColleges) {
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

// Fetch all publications for a list of colleges and a count of professors and papers to fetch
const fetchPublications = async (colleges, countOfProfessor, countOfPaper) => {
  const publicationsData = [];

  for (const college of colleges) {
    try {
      const collegeCollectionRef = collection(db, college);
      const collegeQuerySnapshot = await getDocs(
        query(collegeCollectionRef, limit(countOfProfessor))
      );
      for (const doc of collegeQuerySnapshot.docs) {
        const scholar_id = doc.id;
        const publicationsCollectionRef = collection(doc.ref, "Publications");
        const publicationsQuerySnapshot = await getDocs(
          query(publicationsCollectionRef, limit(countOfPaper))
        );

        publicationsQuerySnapshot.forEach((pubDoc) => {
          // console.log(pubDoc);
          publicationsData.push({
            ...pubDoc.data(),
            pub_id: pubDoc.id,
            scholar_id: scholar_id,
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

// Fetch the all publications for a single professor
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
        pub_id: doc.id,
        scholar_id: professorId,
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

//Get one publication by scholar_id and pub_id and college(db name)
const getOnePublication = async (
  ProfessorId = "14JlaZsAAAAJ",
  PublicationId = "0bimXTCmMdzuYbx8MilD",
  college = "IIT Bombay"
) => {
  const publication = {};
  try {
    const professorRef = doc(db, college, ProfessorId);
    const publicationsRef = collection(professorRef, "Publications");
    const publicationSnapShot = await getDoc(
      doc(publicationsRef, PublicationId)
    );
    if (!publicationSnapShot.exists()) return publication;
    publication.data = publicationSnapShot.data();
    return publication.data;
  } catch (error) {
    console.log(error);
  }
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

export {
  getOnePublication,
  fetchPublications,
  getProfessorsFromAllColleges,
  listOfColleges,
  fetchProfessorById,
  fetchProfessorPublications,
  fetchProfessorsByNames,
  interest_groups
};
