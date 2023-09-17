import React, { useEffect, useState } from "react";
import SingleCapsule from "../Components/SingleCapsule";
import PageTitle from "../Components/PageTitle";
import Pagination from "../Components/Pagination";
import { useData } from "../Context/Context";
import "aos/dist/aos.css";
export default function Capsules() {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [selectedValue, setSelectedValue] = useState(null);
  const [showSelect, setShowSelect] = useState(false);
  const [capsuleData, setCapsuleData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  async function fetchCapsuleData(key) {
    try {
      setIsLoading(true);
      const data = await fetch("https://api.spacexdata.com/v3/capsules");
      const jsonData = await data.json();
      setCapsuleData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    fetchCapsuleData();
  }, []);
  const numberOfItem = 3;
  const lastIndex = currentPage * numberOfItem;
  const firstIndex = (currentPage - 1) * numberOfItem;

  const allCategory = [];
  for (let obj of capsuleData) {
    const keys = Object.keys(obj);
    allCategory.push(...keys);
  }
  const uniqueCategory = [...new Set(allCategory)];

  const arrayOfValue = [];
  for (const obj of capsuleData) {
    const value = obj[category];
    arrayOfValue.push(value);
  }
  const uniqueValue = [...new Set(arrayOfValue)];
  let data = [];
  if (category === "all" && selectedValue == null) {
    data = [...capsuleData];
  } else {
    data = capsuleData.filter((item) => item[category] == selectedValue);
  }
  const numberOfPages = Math.ceil(data.length / numberOfItem);
  const numbers = [...Array(numberOfPages + 1).keys()].slice(1);

  function handleCategory(e) {
    if (e.target.value === "all") {
      data = [...capsuleData];
      setCategory(e.target.value);
      setShowSelect(false);
      setSelectedValue(null);
    } else {
      setCategory(e.target.value);
      setShowSelect(true);
      setSelectedValue(null);
    }
  }
  function handleSelectedValue(e) {
    setSelectedValue(e.target.value);
    setShowSelect(true);
    setCurrentPage(1);
  }

  const newData = data.slice(firstIndex, lastIndex);
  const options = ["capsule_serial", "type", "status", "landing", "details"];
  return (
    <>
      <div className="capsules">
        <PageTitle
          heading={"Capsules"}
          subHeading={"SERVICE TO EARTH ORBIT, MOON, MARS AND BEYOND"}
          titleClass={"capsule"}
        />
        <h1 className="title" data-aos="fade-up" data-aos-duration="3000">
          Capsules
        </h1>
        <div
          className="select-container"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <label htmlFor="category">Select Category :</label>
          <select
            name="category"
            id="category"
            className="select-box"
            onChange={handleCategory}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <option
              className="select-box"
              value="all"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              All
            </option>
            {options.map((item, i) => (
              <option
                value={item}
                key={i}
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                {item}
              </option>
            ))}
          </select>
          {showSelect && (
            <>
              <label
                data-aos="fade-up"
                data-aos-duration="3000"
                htmlFor="value"
              >
                Select {category} :
              </label>
              <select
                name="value"
                id="value"
                className="select-box"
                onChange={handleSelectedValue}
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <option value={null}>Select</option>
                {uniqueValue.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
        {capsuleData.length === 0 ? (
          <h2>No Data Available</h2>
        ) : (
          <>
            <table data-aos="fade-up" data-aos-duration="3000">
              <thead>
                <tr>
                  <th>capsule_serial</th>
                  <th>status</th>
                  <th>landing</th>
                  <th>type</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {newData.map((item, i) => (
                  <tr key={i}>
                    <td>{item.capsule_serial}</td>
                    <td>{item.status}</td>
                    <td>{item.landings}</td>
                    <td>{item.type}</td>
                    <td>{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              {...{
                currentPage,
                numberOfPages,
                setCurrentPage,
                numbers,
              }}
            />
          </>
        )}
      </div>
    </>
  );
}
