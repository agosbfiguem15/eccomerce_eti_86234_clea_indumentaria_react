export function formatDate(date) {
  if (!date) return "";

  const fecha = new Date(
    /^\d{4}-\d{2}-\d{2}$/.test(date)
      ? `${date}T12:00:00`
      : date
  );

  return fecha.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
}