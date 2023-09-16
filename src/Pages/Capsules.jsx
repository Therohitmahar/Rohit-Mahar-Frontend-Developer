import React, { useEffect, useState } from "react";
import SingleCapsule from "../Components/SingleCapsule";
import PageTitle from "../Components/PageTitle";

export default function Capsules() {
  //   const [capsuleData, setCapsuleData] = useState([]);
  //   async function fetchData() {
  //     const data = await fetch("https://api.spacexdata.com/v3/capsules");
  //     const jsonData = await data.json();
  //     setCapsuleData(jsonData);
  //   }
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  // console.los(capsuleData);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(null);
  const [selectedValue, setselectedValue] = useState(null);
  const numberOfItem = 3;
  const lastIndex = currentPage * numberOfItem;
  const firstIndex = (currentPage - 1) * numberOfItem;
  const capsuleData = [
    {
      capsule_serial: "C101",
      capsule_id: "dragon1",
      status: "retired",
      original_launch: "2010-12-08T15:43:00.000Z",
      original_launch_unix: 1291822980,
      missions: [
        {
          name: "COTS 1",
          flight: 7,
        },
      ],
      landings: 1,
      type: "Dragon 1.0",
      details: "Reentered after three weeks in orbit",
      reuse_count: 0,
    },
    {
      capsule_serial: "C102",
      capsule_id: "dragon1",
      status: "retired",
      original_launch: "2012-05-22T07:44:00.000Z",
      original_launch_unix: 1335944640,
      missions: [
        {
          name: "COTS 2",
          flight: 8,
        },
      ],
      landings: 1,
      type: "Dragon 1.0",
      details: "First Dragon spacecraft",
      reuse_count: 0,
    },
    {
      capsule_serial: "C103",
      capsule_id: "dragon1",
      status: "unknown",
      original_launch: "2012-10-08T00:35:00.000Z",
      original_launch_unix: 1349656500,
      missions: [
        {
          name: "CRS-1",
          flight: 9,
        },
      ],
      landings: 1,
      type: "Dragon 1.0",
      details: "First of twenty missions flown under the CRS1 contract",
      reuse_count: 0,
    },
    {
      capsule_serial: "C104",
      capsule_id: "dragon1",
      status: "unknown",
      original_launch: "2013-03-01T19:10:00.000Z",
      original_launch_unix: 1362165000,
      missions: [
        {
          name: "CRS-2",
          flight: 10,
        },
      ],
      landings: 1,
      type: "Dragon 1.0",
      details: null,
      reuse_count: 0,
    },
    {
      capsule_serial: "C202",
      capsule_id: "dragon2",
      status: "active",
      original_launch: null,
      original_launch_unix: null,
      missions: [],
      landings: 0,
      type: "Dragon 2.0",
      details:
        "Capsule used to qualify Dragon 2's environmental control and life support systems.",
      reuse_count: 0,
    },
    {
      capsule_serial: "C203",
      capsule_id: "dragon2",
      status: "active",
      original_launch: null,
      original_launch_unix: null,
      missions: [],
      landings: 0,
      type: "Dragon 2.0",
      details: "Rumored to be used for Inflight Abort Test after DM-1",
      reuse_count: 0,
    },
    {
      capsule_serial: "C204",
      capsule_id: "dragon2",
      status: "active",
      original_launch: null,
      original_launch_unix: null,
      missions: [],
      landings: 0,
      type: "Dragon 2.0",
      details: "Currently in construction for use in DM-2",
      reuse_count: 0,
    },
  ];
  const numberOfPages = Math.ceil(capsuleData.length / numberOfItem);
  const Data = capsuleData.slice(firstIndex, lastIndex);
  const numbers = [...Array(numberOfPages + 1).keys()].slice(1);
  const allCategory = [];
  for (let obj of capsuleData) {
    const keys = Object.keys(obj);
    allCategory.push(...keys);
  }
  const uniqueCategory = [...new Set(allCategory)];

  const arrayOfValue = [];
  for (const obj of capsuleData) {
    const value = obj[category];
    console.log("obj: ", obj);
    console.log("cate: ", category);
    arrayOfValue.push(value);
  }
  const uniqueValue = [...new Set(arrayOfValue)];

  // const newData = capsuleData.filter(
  // (item) => item[category[value]] === capsuleData[category[selectedValue]]
  // );
  console.log("array of value: ", arrayOfValue);
  console.log("array of unique value: ", uniqueValue);
  function jumpToPage(page) {
    setCurrentPage(page);
  }
  function handleCategory(e) {
    setCategory(e.target.value);
  }

  return (
    <>
      <div className="capsules">
        <PageTitle
          heading={"Capsules"}
          subHeading={"SERVICE TO EARTH ORBIT, MOON, MARS AND BEYOND"}
          titleClass={"capsule"}
        />
        <div>
          <select name="category" id="category" onChange={handleCategory}>
            {uniqueCategory.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
          <span>Select {category}:</span>
          <select name="value" id="value">
            {uniqueValue.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <table>
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
            {Data.map((item) => (
              <>
                <tr>
                  <td>{item.capsule_serial}</td>
                  <td>{item.status}</td>
                  <td>{item.landings}</td>
                  <td>{item.type}</td>
                  <td>{item.details}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
      <ul>
        {numbers.map((n, i) => (
          <li key={i} onClick={() => jumpToPage(n)}>
            {n}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        Next
      </button>
    </>
  );
}
