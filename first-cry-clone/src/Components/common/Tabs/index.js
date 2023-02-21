import React from "react";
import PropTypes from "prop-types";
import { TabsWrapper } from "./style";
import { Text } from "../../styledConstants";

export default function Tabs({ tabData = [], activeTab = 0, setActiveTab }) {
  return (
    <TabsWrapper>
      {tabData.length >= 0 &&
        tabData.map((data, i) => (
          <Text
            size="md"
            fw="semiBold"
            as="button"
            key={data.id}
            className={`${data?.className ? data?.className : ""} ${activeTab === data.id ? "active" : ""}`}
            onClick={() => setActiveTab(data.id)}
          >
            {data.name}
          </Text>
          // <button key={data.id} className={activeTab === data.id ? "active" : ""} onClick={() => setActiveTab(data.id)}>
          //   {data.name}
          // </button>
        ))}
    </TabsWrapper>
  );
}

Tabs.propTypes = {
  activeTab: PropTypes.number,
  setActiveTab: PropTypes.func,
  tabData: PropTypes.String,
};
