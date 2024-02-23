import {
  collection,
  getDocs,
  limit,
  query,
  getDoc,
  doc,
  where,
} from "firebase/firestore";
import { db } from "../auth/firebase";

const listOfColleges = [
  "IIT Bombay",
  "IIT Delhi",
  "IIT GandhiNagar",
  "IIT Bhuvaneshwar",
];

const getProfessorsByCollege = async (college, count) => {
  let data = null;
  const teachersCollectionRef = collection(db, college);
  if (count) {
    const teachersQuery = query(teachersCollectionRef, limit(count));
    data = await getDocs(teachersQuery);
  } else {
    data = await getDocs(teachersCollectionRef);
  }
  return data.docs.map((doc) => doc.data());
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
          // console.log(pubDoc);
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

export {
  getProfessorsByCollege,
  listOfColleges,
  fetchPublications,
  getOnePublication,
};
