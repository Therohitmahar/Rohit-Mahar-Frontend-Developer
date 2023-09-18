import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTitle";
import Pagination from "../Components/Pagination";
import { useData } from "../Context/Context";

export default function Cores() {
  const [coreCategory, setCoreCategory] = useState("all");
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [coresData, setCoresData] = useState([]);
  const [showFiltered, setShowFiltered] = useState(false);
  const { setShowNav } = useData();
  async function fetchCoresData() {
    try {
      const data = await fetch("https://api.spacexdata.com/v3/cores");
      const jsonData = await data.json();
      setCoresData(jsonData);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchCoresData();
    setShowNav(false);
  }, []);

  function handleCoreCategory(e) {
    setCoreCategory(e.target.value);
    setShowInput(e.target.value !== "all");
  }

  const filteredObject = coresData.filter(
    (item) => item[coreCategory] == inputValue
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = (currentPage - 1) * itemPerPage;
  const numberOfPages = Math.ceil(coresData.length / itemPerPage);
  const newCoreData = coresData.slice(firstIndex, lastIndex);
  const numbers = [...Array(numberOfPages + 1).keys()].slice(1);

  return (
    <div className="cores-page">
      <PageTitle
        heading="Cores"
        subHeading={"Core for the future of space"}
        titleClass="cores"
      />
      <h1 className="title">Cores</h1>
      <table>
        <thead>
          <tr>
            <td>Core Serial</td>
            <td>Status</td>
            <td>Water Landing</td>
            <td>Reuse Count</td>
            <td>Details</td>
          </tr>
        </thead>
        <tbody>
          {showFiltered
            ? filteredObject.map((core) => (
                <tr key={core.core_serial}>
                  <td>{core.core_serial}</td>
                  <td>{core.status}</td>
                  <td>{core.water_landing ? "Yes" : "No"}</td>
                  <td>{core.reuse_count}</td>
                  <td>{core.details}</td>
                </tr>
              ))
            : newCoreData.map((core) => (
                <tr key={core.core_serial}>
                  <td>{core.core_serial}</td>
                  <td>{core.status}</td>
                  <td>{core.water_landing ? "Yes" : "No"}</td>
                  <td>{core.reuse_count}</td>
                  <td>{core.details}</td>
                </tr>
              ))}
        </tbody>
      </table>
      {!showFiltered && (
        <Pagination
          {...{
            currentPage,
            numberOfPages,
            setCurrentPage,
            numbers,
          }}
        />
      )}
    </div>
  );
}
