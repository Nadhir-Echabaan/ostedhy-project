// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import Filter from "../../components/Filter/Filter";
import Subject from "../../components/Subject/Subject";

import  { useGetSubjectsQuery } from "../../data/subjectsApi"; 
import { useUpdateSubjectMutation } from "../../data/subjectsApi";

import {subjectChapters } from "../../helpers/subjectChapters"; 

function Subjects() {
  const { data:subjects} = useGetSubjectsQuery(); 
  if(!subjects?.length) return;
  return (
    <>
      <Filter />
       <div className="subjects-grid">
        {subjects.map((subject) => <Subject subjectData={subject} />)}
      </div>
    </>
  );
}

export default Subjects;
