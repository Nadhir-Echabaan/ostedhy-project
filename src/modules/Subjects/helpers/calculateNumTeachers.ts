
export function calculateNumTeachers(chapters: any[]) {
  const uniqueTeachers = new Set(); 
  chapters.forEach(chapter => uniqueTeachers.add(chapter.teacher_id)); 
  return uniqueTeachers.size; 
}