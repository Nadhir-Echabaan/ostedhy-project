// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// @ts-nocheck
import Filter from "../../components/Filter/Filter";
import Subject from "../../components/Subject/Subject";
import { useGetAllSubjectsQuery } from "../../data/subjects";

import { subjectChapters } from "../../helpers/subjectChapters";

function Subjects() {
  const { data:subjects, isLoading } = useGetAllSubjectsQuery();
  if (isLoading) return; 
  return (
    <>
      <Filter />
      <div className="subjects-grid">
        {subjects.map((subject) => (
          <Subject subjectData={subject} />
        ))}
      </div>
    </>
  );
}

export default Subjects;
