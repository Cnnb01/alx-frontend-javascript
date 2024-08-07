export default function getListStudentIds(argg) {
  if (Array.isArray(argg)) {
    const myMap = argg.map((obj) => obj.id);
    return myMap;
  }
  return [];
}
