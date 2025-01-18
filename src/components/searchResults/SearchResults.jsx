import React, { useContext } from "react";
import "./SearchResults.css";
import Hero from "../search/searchComponents/hero/Hero";
import SearchCard from "../../items/SearchCard";
import { MyContext } from "../../store/ContextApi";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SearchResults() {
  const { fetchedData, setFetchedData, detailsData, setDetailsData } =
    useContext(MyContext);
  console.log(fetchedData);
  return (
    <>
      <Hero height={"25rem"} BannersImg={false} />
      <div className="search-results flex-col">
        <h1>Search Result</h1>
        <div className="results flex-row">
          {fetchedData?.length != 0 ? (
            fetchedData.map((item) => {
              return (
                <SearchCard
                  key={item.index}
                  price={item.price}
                  brand={item.brand}
                  condition={item.condition}
                  image={item.image}
                />
              );
            })
          ) : (
            <div
              className="flex-row"
              style={{ justifyContent: "space-between", gap: "2rem" }}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <Stack key={index} spacing={1}>
                  {/* For variant="text", adjust the height via font-size */}
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  {/* For other variants, adjust the size with `width` and `height` */}
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton variant="rounded" width={210} height={60} />
                </Stack>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
