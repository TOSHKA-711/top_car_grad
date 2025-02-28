import React, { useContext } from "react";
import "./SearchResults.css";
import Hero from "../search/searchComponents/hero/Hero";
import SearchCard from "../../items/SearchCard";
import { MyContext } from "../../store/ContextApi";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SearchResults() {
  const { fetchedData} =
    useContext(MyContext);
  console.log(fetchedData);
  return (
    <>
      <Hero height={"25rem"} BannersImg={false} />
      <div className="search-results flex-col">
        <h1>Search Result</h1>
        <div className="results flex-row">
          {(fetchedData?.length ?? 0) !== 0 ? (
            fetchedData.map((item, index) => (
              <SearchCard
                key={item.id || `search-card-${index}`} // Ensure the key is unique
                price={item.price}
                brand={item.brand}
                condition={item.condition}
                image={item.image  } 
                color={item.color}
                model={item.model}
              />
            ))
          ) : (
            <div
              className="flex-row"
              style={{ justifyContent: "space-between", gap: "2rem" }}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <Stack key={index} spacing={1}>
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    aria-label="Loading content"
                  />
                  <Skeleton
                    variant="circular"
                    width={40}
                    height={40}
                    aria-label="Loading image"
                  />
                  <Skeleton
                    variant="rectangular"
                    width={210}
                    height={60}
                    aria-label="Loading content"
                  />
                  <Skeleton
                    variant="rounded"
                    width={210}
                    height={60}
                    aria-label="Loading content"
                  />
                </Stack>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
