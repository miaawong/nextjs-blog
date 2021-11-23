import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  if (date && dateString)
    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
