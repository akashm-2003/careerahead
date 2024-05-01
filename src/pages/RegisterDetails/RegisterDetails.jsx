import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../auth/firebase';

const CreateSponsorship = () => {
  const [page, setPage] = useState(0);

  const scholarshipCriteria = {
    academicAchievement: {
      minimumGPA: '',
      specificMajors: '',
      yearOfStudy: '',
    },
    financialNeed: {
      incomeStatus: '',
      requiresFAFSA: '',
    },
    demographicCriteria: {
      gender: '',
      ethnicity: '',
      nationality: '',
      firstGenerationCollege: '',
      underrepresentedBackground: '',
    },
    geographicalLocation: {
      residencyRequirements: '',
      urbanOrRural: '',
    },
    extracurricularActivities: {
      involvement: '',
      leadershipRoles: '',
    },
    essayOrPersonalStatement: {
      requiresEssay: '',
      essayQuality: '',
    },
    lettersOfRecommendation: {
      requiresRecommendation: '',
      numberOfRecommendations: 0,
    },
    careerGoalsAndAspirations: {
      specificCareerPaths: [],
      commitmentToField: '',
    },
    communityInvolvement: {
      volunteerWork: '',
      communityService: '',
      socialInitiatives: '',
    },
    specialCircumstances: {
      disabilitiesScholarship: '',
      veteransScholarship: '',
      singleParentsScholarship: ''
    },
    meritBased: {
      academicAchievementOnly: '',
    },
    enrollmentStatus: {
      fullTimeRequirement: '',
    },
    renewability: {
      renewable: '',
      academicPerformance: '',
    },
    applicationMaterials: {
      requiredDocuments: [],
    },
    deadline: {
      applicationDeadline: '',
      lateSubmissionPolicy: '',
    },
    selectionProcess: {
      selectionCommittee: '',
      selectionCriteria: '',
    },
    awardAmountAndFrequency: {
      scholarshipAmount: '',
      recurringAward: '',
    },
    termsAndConditions: {
      specificTerms: [],
    },
  };
  

  const [formData, setFormData] = useState(scholarshipCriteria);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleBack = () => {
    setPage(page - 1);
  };

  const handleChange = (e, category, subCategory = null) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (subCategory) {
        // Update a nested subcategory field
        return {
          ...prevData,
          [category]: {
            ...prevData[category],
            [subCategory]: {
              ...prevData[category][subCategory],
              [name]: value,
            },
          },
        };
      } else {
        // Update a top-level category field
        return {
          ...prevData,
          [category]: {
            ...prevData[category], // Make sure to copy the existing subcategories
            [name]: value,
          },
        };
      }
    });
  };
  
  

  const handleSubmit = () => {
    // Handle form submission here
    console.log(formData)

    const dbRef = collection(db, "PrivateSponsors")

    addDoc( dbRef, formData).then(alert("Your Data Have Been Updated")).catch((error) => {
        console.log(error)
        alert("Data is not saved")
      })
  };

  console.log(formData.academicAchievement.minimumGPA)

  const pages = [



    // Page 1
    <div className="flex flex-wrap items-start justify-around gap-16">
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Academic Achievements</h1>
            <TextField name="minimumGPA" label="MinimumCGPA" variant="outlined" value={formData.academicAchievement.minimumGPA} onChange={(e) => handleChange(e, 'academicAchievement')}/>
            <TextField name="specificMajors" label="specificMajors" variant="outlined" value={formData.academicAchievement.specificMajors} onChange={(e) => handleChange(e, 'academicAchievement')}/>
            <TextField name="yearOfStudy" label="yearOfStudy" variant="outlined" value={formData.academicAchievement.yearOfStudy} onChange={(e) => handleChange(e, 'academicAchievement')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Financial Needs</h1>
            <TextField name="incomeStatus" label="incomeStatus" variant="outlined" value={formData.financialNeed.incomeStatus} onChange={(e) => handleChange(e, 'financialNeed')}/>
            <TextField name="requiresFAFSA" label="requiresFAFSA" variant="outlined" value={formData.financialNeed.requiresFAFSA} onChange={(e) => handleChange(e, 'financialNeed')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Demographic Criteria</h1>
            <TextField name="gender" label="gender" variant="outlined" value={formData.demographicCriteria.gender} onChange={(e) => handleChange(e, 'demographicCriteria')}/>
            <TextField name="ethnicity" label="ethnicity" variant="outlined" value={formData.demographicCriteria.ethnicity} onChange={(e) => handleChange(e, 'demographicCriteria')}/>
            <TextField name="nationality" label="nationality" variant="outlined" value={formData.demographicCriteria.nationality} onChange={(e) => handleChange(e, 'demographicCriteria')}/>
            <TextField name="firstGenerationCollege" label="firstGenerationCollege" variant="outlined" value={formData.demographicCriteria.firstGenerationCollege} onChange={(e) => handleChange(e, 'demographicCriteria')}/>
            <TextField name="underrepresentedBackground" label="underrepresentedBackground" variant="outlined" value={formData.demographicCriteria.underrepresentedBackground} onChange={(e) => handleChange(e, 'demographicCriteria')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Geographical Allocation</h1>
            <TextField name="residencyRequirements" label="residencyRequirements" variant="outlined" value={formData.geographicalLocation.residencyRequirements} onChange={(e) => handleChange(e, 'geographicalLocation')}/>
            <TextField name="urbanOrRural" label="urbanOrRural" variant="outlined" value={formData.geographicalLocation.urbanOrRural} onChange={(e) => handleChange(e, 'geographicalLocation')}/>
        </div>

    </div>,

    // Page 2
    <div className="flex flex-wrap items-start justify-around gap-20">
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Extra-Curricular Activities</h1>
            <TextField name="involvement" label="involvement" variant="outlined" value={formData.extracurricularActivities.involvement} onChange={(e) => handleChange(e, 'extracurricularActivities')}/>
            <TextField name="leadershipRoles" label="leadershipRoles" variant="outlined" value={formData.extracurricularActivities.leadershipRoles} onChange={(e) => handleChange(e, 'extracurricularActivities')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Essay Or Personal Statement</h1>
            <TextField name="requiresEssay" label="requiresEssay" variant="outlined" value={formData.essayOrPersonalStatement.requiresEssay} onChange={(e) => handleChange(e, 'essayOrPersonalStatement')}/>
            <TextField name="essayQuality" label="essayQuality" variant="outlined" value={formData.essayOrPersonalStatement.essayQuality} onChange={(e) => handleChange(e, 'essayOrPersonalStatement')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Letters Of Recommendation</h1>
            <TextField name="requiresRecommendation" label="requiresRecommendation" variant="outlined" value={formData.lettersOfRecommendation.requiresRecommendation} onChange={(e) => handleChange(e, 'lettersOfRecommendation')}/>
            <TextField name="numberOfRecommendations" label="numberOfRecommendations" variant="outlined" value={formData.lettersOfRecommendation.numberOfRecommendations} onChange={(e) => handleChange(e, 'lettersOfRecommendation')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Career Goals And Aspirations</h1>
            <TextField name="specificCareerPaths" label="specificCareerPaths" variant="outlined" value={formData.careerGoalsAndAspirations.specificCareerPaths} onChange={(e) => handleChange(e, 'careerGoalsAndAspirations')}/>
            <TextField name="commitmentToField" label="commitmentToField" variant="outlined" value={formData.careerGoalsAndAspirations.commitmentToField} onChange={(e) => handleChange(e, 'careerGoalsAndAspirations')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Community Involvement</h1>
            <TextField name="volunteerWork" label="volunteerWork" variant="outlined" value={formData.communityInvolvement.volunteerWork} onChange={(e) => handleChange(e, 'communityInvolvement')}/>
            <TextField name="communityService" label="communityService" variant="outlined" value={formData.communityInvolvement.communityService} onChange={(e) => handleChange(e, 'communityInvolvement')}/>
            <TextField name="socialInitiatives" label="socialInitiatives" variant="outlined" value={formData.communityInvolvement.socialInitiatives} onChange={(e) => handleChange(e, 'communityInvolvement')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Special Circumstances</h1>
            <TextField name="disabilitiesScholarship" label="disabilitiesScholarship" variant="outlined" value={formData.specialCircumstances.disabilitiesScholarship} onChange={(e) => handleChange(e, 'specialCircumstances')}/>
            <TextField name="veteransScholarship" label="veteransScholarship" variant="outlined" value={formData.specialCircumstances.veteransScholarship} onChange={(e) => handleChange(e, 'specialCircumstances')}/>
            <TextField name="singleParentsScholarship" label="singleParentsScholarship" variant="outlined" value={formData.specialCircumstances.singleParentsScholarship} onChange={(e) => handleChange(e, 'specialCircumstances')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Merit Based</h1>
            <TextField name="academicAchievementOnly" label="academicAchievementOnly" variant="outlined" value={formData.meritBased.academicAchievementOnly} onChange={(e) => handleChange(e, 'meritBased')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Enrollment Status</h1>
            <TextField name="fullTimeRequirement" label="fullTimeRequirement" variant="outlined" value={formData.enrollmentStatus.fullTimeRequirement} onChange={(e) => handleChange(e, 'enrollmentStatus')}/>
        </div>

    </div>,

    // Page 3
    <div className="flex flex-wrap items-start justify-around gap-32">
      <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Renewability</h1>
            <TextField name="renewable" label="renewable" variant="outlined" value={formData.renewability.renewable} onChange={(e) => handleChange(e, 'renewability')}/>
            <TextField name="academicPerformance" label="academicPerformance" variant="outlined" value={formData.renewability.academicPerformance} onChange={(e) => handleChange(e, 'renewability')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Application Materials</h1>
            <TextField name="requiredDocuments" label="requiredDocuments" variant="outlined" value={formData.applicationMaterials.requiredDocuments} onChange={(e) => handleChange(e, 'applicationMaterials')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Deadline</h1>
            <TextField name="applicationDeadline" label="applicationDeadline" variant="outlined" value={formData.deadline.applicationDeadline} onChange={(e) => handleChange(e, 'deadline')}/>
            <TextField name="lateSubmissionPolicy" label="lateSubmissionPolicy" variant="outlined" value={formData.deadline.lateSubmissionPolicy} onChange={(e) => handleChange(e, 'deadline')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Selection Process</h1>
            <TextField name="selectionCommittee" label="selectionCommittee" variant="outlined" value={formData.selectionProcess.selectionCommittee} onChange={(e) => handleChange(e, 'selectionProcess')}/>
            <TextField name="selectionCriteria" label="selectionCriteria" variant="outlined" value={formData.selectionProcess.selectionCriteria} onChange={(e) => handleChange(e, 'selectionProcess')}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Award Amount And Frequency</h1>
            <TextField name="scholarshipAmount" label="scholarshipAmount" variant="outlined" value={formData.awardAmountAndFrequency.scholarshipAmount} onChange={(e) => handleChange(e, 'awardAmountAndFrequency')}/>
            <TextField name="recurringAward" label="recurringAward" variant="outlined" value={formData.awardAmountAndFrequency.recurringAward} onChange={(e) => handleChange(e, 'awardAmountAndFrequency')}/>
        </div>

        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl'>Terms And Conditions</h1>
            <TextField name="specificTerms" label="specificTerms" variant="outlined" value={formData.termsAndConditions.specificTerms} onChange={(e) => handleChange(e, 'termsAndConditions')}/>
        </div>
    </div>,

  ];

  return (
    <div className="px-10 flex flex-col items-center justify-around py-5">

        <h1 className='text-5xl mb-5'>Create Scholarship | Page {[page+1]}</h1>

      <div className="flex flex-col items-center justify-around gap-16">
        {pages[page]}
      </div>

      <div className='w-full my-10 flex items-center justify-around'>
        {page > 0 && (
            <Button variant="contained" onClick={handleBack}>
            Back
            </Button>
        )}

        {page < pages.length - 1 ? (
            <Button variant="contained" onClick={handleNext}>
            Next
            </Button>
        ) : (
            <Button variant="contained" onClick={handleSubmit}>
            Post
            </Button>
        )}
      </div>

    </div>
  );
};

export default CreateSponsorship;