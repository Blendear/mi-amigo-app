import styles from "src/styles/sass/styles-all.module.scss";
import { CreateEventForm } from "../features/add-events-with-needs";

const EventManager = () => {
  return (
    <div>
      <h1>Event Manager</h1>
      <CreateEventForm />
    </div>
  );
};
export default EventManager;
