import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTitle";
import Pagination from "../Components/Pagination";

export default function Cores() {
  const [coreCategory, setCoreCategory] = useState("all");
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [coresData, setCoresData] = useState([]);
  const [filterSearch, setFilterSearch] = useState([]);
  const [showFiltered, setShowFiltered] = useState(false);
  async function fetchCoresData(key) {
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
  }, []);

  function handleCoreCategory(e) {
    setCoreCategory(e.target.value);
    if (e.target.value === "all") {
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  }
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  useEffect(() => {
    if (coreCategory !== "all") {
      const returned = uniqueValue.filter((item) => {
        return item && item.toLowerCase().includes(inputValue.toLowerCase());
      });
      setFilterSearch(returned);
    }
    console.log("filterSearch1111", filterSearch);
  }, [inputValue, coreCategory]);
  const filteredObject = coresData.filter(
    (item) => item[coreCategory] == inputValue
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = (currentPage - 1) * itemPerPage;
  const numberOfPages = Math.ceil(coresData.length / itemPerPage);
  let newCoreData = coresData.slice(firstIndex, lastIndex);
  const numbers = [...Array(numberOfPages + 1).keys()].slice(1);
  const allPossible = [];
  for (let obj of coresData) {
    const value = obj[coreCategory];
    allPossible.push(value);
  }
  const uniqueValue = [...new Set(allPossible)];
  return (
    <div className="cores-page">
      <PageTitle
        heading="Cores"
        subHeading={"Core for future of space"}
        titleClass="cores"
      />
      <h1 className="title">Cores</h1>
      <div className="select-container">
        <label htmlFor="category">Select Category :</label>
        <select
          name="category"
          id="category"
          className="select-box"
          value={coreCategory}
          onChange={handleCoreCategory}
        >
          <option className="select-box" value="all">
            All
          </option>
          <option className="select-box" value={"core_serial"}>
            Core Serial
          </option>
          <option className="select-box" value={"status"}>
            Status
          </option>
          <option className="select-box" value={"details"}>
            Details
          </option>
        </select>
        {showInput && (
          <div className="cores-search-container">
            <label htmlFor="SearchCore">Search Core : </label>
            <input
              type="text"
              id="SearchCore"
              placeholder="Try Typing: active, dead"
              value={inputValue}
              onChange={handleInputChange}
            />
            {filterSearch &&
              filterSearch.slice(0, 3).map((item) => (
                <h5
                  onClick={() => {
                    setInputValue(item);
                    setShowFiltered(true);
                  }}
                >
                  {item}
                </h5>
              ))}
          </div>
        )}
      </div>
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
                <tr>
                  <td>{core.core_serial}</td>
                  <td>{core.status}</td>
                  <td>{core.water_landing ? "Yes" : "No"}</td>
                  <td>{core.reuse_count}</td>
                  <td>{core.details}</td>
                </tr>
              ))
            : newCoreData.map((core) => (
                <tr>
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
      )}{" "}
    </div>
  );
}
