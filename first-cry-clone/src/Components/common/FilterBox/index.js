import React, { Fragment } from "react";
import MaterialInput from "../UI/MaterialInput";
import { Text, ButtonSolid } from "../../../components/styledConstants";
import IconRefresh from "../../../assets/images/IconRefresh";
const FilterBox = ({
  //searchText = " ",
  filterForm = [],
  onFilterChange = () => {},
  onFilterSubmit = () => {},
  className = "",
  buttonValue = "SEARCH",
  refreshPage,
}) => {
  return (
    <form className={`${className} flex flex-start gap10`} onSubmit={onFilterSubmit}>
      {/* <Text className="align-self-center search-by-label" size="md" fw="medium" color="color8">
        {searchText}
      </Text> */}
      {filterForm.map((item, i) => (
        <Fragment key={`filter-${i}`}>
          <MaterialInput {...item} onChange={(e) => onFilterChange(e, i)} />
        </Fragment>
      ))}
      <ButtonSolid primary xl type="submit">
        {buttonValue}
      </ButtonSolid>
      {refreshPage && (
        <ButtonSolid primary xl className="refresh-button" type="button" onClick={refreshPage}>
          <IconRefresh />
        </ButtonSolid>
      )}
    </form>
  );
};

export default React.memo(FilterBox);
