import { useEffect, useState } from "react";
import supabase from "../supabase";
import Logout from "./logout";

function Todos() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("todos").select();
    setCountries(data);
  }

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
      <Logout/>
    </div>
  );
}

export default Todos;