import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import ProfessorCard from "../../components/ProfessorCard/ProfessorCard";
import ProfessorCardSkeleton from "../../components/ProfessorCard/ProfessorCardSkeleton";
import SearchBar from "../../components/SearchBar";
import Sidebar from "../../components/Sidebar";
import {
  getProfessorsFromAllColleges,
  listOfColleges,
  interest_groups,
} from "../../data/ProfessorByCollege";
import "./Professor.css";
import axios from "axios";
const Professor = ({
  showSidebar,
  onSetShowSidebar,
  selected,
  setSelected,
}) => {
  const defaultColleges = [
    "IIT Bombay",
    "IIT Delhi",
    "IIT GandhiNagar",
    "IIT Goa",
  ];
  const [allProfessor, setAllProfessor] = useState([]);
  const [teacherLoading, setTeacherLoading] = useState(true);
  const getTeachers = async () => {
    setTeacherLoading(true);
    const data = await getProfessorsFromAllColleges(defaultColleges, 10);
    setAllProfessor(data);
    setTeacherLoading(false);
  };
  useEffect(() => {
    getTeachers();
  }, []);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const theme = useTheme();
  const [filterCollege, setFilterCollege] = React.useState([]);
  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setFilterCollege(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const allColleges = [...listOfColleges];

  // Domain Filter
 const [domainFilter, setDomainFilter] = React.useState("");

 const handleChange = (event) => {
   setDomainFilter(event.target.value);
 };


//  Filter Professor
const [filterProfessorData, setFilterProfessorData] = useState([])
const [filterDataLoading, setFilterDataLoading] = useState(true)
const filterProfessor  =  async (college, domain) => {
  // Construct the URL for the API request
  setFilterDataLoading(true);
  const url = `http://127.0.0.1:5000/get_professors?college_names=${filterCollege.join(
    ","
  )}&interest_group=${domainFilter}`;

  // Make the API request using Axios
  const response = await axios.get(url);
  console.log(response);
  setFilterDataLoading(false);
  return response
};
useEffect(() => {
  if(filterCollege.length || domainFilter){
  filterProfessor(filterCollege, domainFilter).then((response) => {
    setFilterProfessorData(response.data);
  });
}
},[filterCollege, domainFilter])
return (
    <>
      <Sidebar
        showSidebar={showSidebar}
        onSetShowSidebar={onSetShowSidebar}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="flex w-full">
        <div className="smallerDevice-container"></div>
        <div className="main-container">
          <SearchBar onSetShowSidebar={onSetShowSidebar} />
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <div className="collegeHeading">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  Select Filter
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <div>
                  <FormControl sx={{ m: 1, width: 400 }}>
                    <InputLabel id="demo-multiple-chip-label">
                      College
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={filterCollege}
                      onChange={handleChange1}
                      input={
                        <OutlinedInput
                          id="select-multiple-chip"
                          label="College"
                        />
                      }
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {allColleges.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, filterCollege, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <Box
                  sx={{
                    minWidth: 120,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <FormControl sx={{ m: 1, minWidth: 220 }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Domain
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={domainFilter}
                      label="Domain"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {interest_groups.map((domain) => (
                        <MenuItem value={domain}>{domain}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>

            {filterCollege.length || domainFilter ? (
              <div className="flex-col w-full lg:w-full p-2">
                <div className="collegeHeading">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                    {domainFilter} Professor{" "}
                    {filterCollege.length ? " from " : " "}
                    {filterCollege.join(", ")}
                  </p>
                </div>
                <div className="rounded-lg bg-card height30em professorContainerMainHome">
                  <div className="professorCardHomeContainer">
                    <div className="professorCardHomeInnerContainer">
                      {!filterDataLoading
                        ? filterProfessorData.map((teacher) => (
                            <ProfessorCard teacher={teacher} />
                          ))
                        : Array.from({ length: 6 }, () => (
                            <ProfessorCardSkeleton />
                          ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="collegesDashboardContainer w-full p-2">
                  <div className="collegeHeading">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                      Professors in Bombay
                    </p>
                  </div>

                  {/* <div className="rounded-lg bg-card sm:h-30 h-40"> */}
                  <div className="rounded-lg bg-card ">
                    <div className="professorContent">
                      <div className="professorScroll">
                        {/* {!teacherLoading && allProfessor["AI"]
                    ? allProfessor["AI"].map((teacher) => (
                        <ProfessorCard
                          key={teacher.id}
                          teacher={teacher}
                          domain={teacher.details}
                        />
                      ))
                    : Array.from({ length: 5 }, () => (
                        <ProfessorCardSkeleton />
                      ))} */}
                        {!teacherLoading
                          ? allProfessor
                              .slice(0, 10)
                              .map((teacher) => (
                                <ProfessorCard teacher={teacher} />
                              ))
                          : Array.from({ length: 8 }, () => (
                              <ProfessorCardSkeleton />
                            ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="collegesDashboardContainer w-full p-2">
                  <div className="collegeHeading">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                      Professors in Delhi
                    </p>
                  </div>

                  {/* <div className="rounded-lg bg-card sm:h-30 h-40"> */}
                  <div className="rounded-lg bg-card ">
                    <div className="professorContent">
                      <div className="professorScroll">
                        {/* {!teacherLoading && allProfessor["ML"]
                    ? allProfessor["ML"].map(
                        (teacher) => (
                          console.log(teacher),
                          (
                            <ProfessorCard
                              key={teacher.id}
                              teacher={teacher}
                              domain={teacher.details}
                            />
                          )
                        )
                      )
                    : Array.from({ length: 5 }, () => (
                        <ProfessorCardSkeleton />
                      ))} */}
                        {!teacherLoading
                          ? allProfessor
                              .slice(10, 20)
                              .map((teacher) => (
                                <ProfessorCard teacher={teacher} />
                              ))
                          : Array.from({ length: 8 }, () => (
                              <ProfessorCardSkeleton />
                            ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="collegesDashboardContainer w-full p-2">
                  <div className="collegeHeading">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                      Professors in GandhiNagar
                    </p>
                  </div>

                  {/* <div className="rounded-lg bg-card sm:h-30 h-40"> */}
                  <div className="rounded-lg bg-card ">
                    <div className="professorContent">
                      <div className="professorScroll">
                        {/* {!teacherLoading && allProfessor["NLP"]
                    ? allProfessor["NLP"].map((teacher) => (
                        <ProfessorCard
                          key={teacher.id}
                          teacher={teacher}
                          domain={teacher.details}
                        />
                      ))
                    : Array.from({ length: 5 }, () => (
                        <ProfessorCardSkeleton />
                      ))} */}
                        {!teacherLoading
                          ? allProfessor
                              .slice(20, 30)
                              .map((teacher) => (
                                <ProfessorCard teacher={teacher} />
                              ))
                          : Array.from({ length: 8 }, () => (
                              <ProfessorCardSkeleton />
                            ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="collegesDashboardContainer w-full p-2">
                  <div className="collegeHeading">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                      Professors in Goa
                    </p>
                  </div>

                  {/* <div className="rounded-lg bg-card sm:h-30 h-40"> */}
                  <div className="rounded-lg bg-card ">
                    <div className="professorContent">
                      <div className="professorScroll">
                        {/* {!teacherLoading && allProfessor["DB"]
                    ? allProfessor["DB"].map((teacher) => (
                        <ProfessorCard
                          key={teacher.id}
                          teacher={teacher}
                          domain={teacher.details}
                        />
                      ))
                    : Array.from({ length: 5 }, () => (
                        <ProfessorCardSkeleton />
                      ))} */}
                        {!teacherLoading
                          ? allProfessor
                              .slice(30, 40)
                              .map((teacher) => (
                                <ProfessorCard teacher={teacher} />
                              ))
                          : Array.from({ length: 8 }, () => (
                              <ProfessorCardSkeleton />
                            ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Professor;
