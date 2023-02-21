import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Nav } from "./style";
import logo from "../../assets/images/logo.png";
import { Icon } from "../../styledConstants";
import NavList from "./NavList";
import { navData } from "./constants";
import { useEffect } from "react";
import Request from "../../utils/Request";
import Config from "../../utils/config";
import { useSelector } from "react-redux";

export default function Navigation() {
  const [navigationData, setNavigationData] = useState([...navData]);

  const toggleNavigation = (e, isExpanded, index) => {
    e.preventDefault();
    const temp = [...navigationData];
    temp.forEach((_, i) => {
      temp[i].expanded = false;
    });
    temp[index].expanded = !isExpanded;
    setNavigationData(temp);
  };
  const hideSubmenu = () => {
    const temp = [...navigationData];
    temp.forEach((_, i) => {
      temp[i].expanded = false;
    });
    setNavigationData(temp);
  };
  const obj = {
    code: "0000",
    message: "SUCCESS",
    data: {
      PAYMENT_API_BANK_DETAILS: [
        {
          permissionName: "BANK_LIST",
          permissionCode: "BANK_LIST",
          apiurl: "BANK_LIST",
        },
      ],
      PAYMENT_API_M2P_PREPAID_CARD: [
        {
          permissionName: "PREPAID_CARD_OTP",
          permissionCode: "PREPAID_CARD_OTP",
          apiurl: "PREPAID_CARD_OTP",
        },
        {
          permissionName: "PREPAID_CARD_REGISTRATION",
          permissionCode: "PREPAID_CARD_REGISTRATION",
          apiurl: "PREPAID_CARD_REGISTRATION",
        },
        {
          permissionName: "PREPAID_CARD_CUSTOMER_UPDATE",
          permissionCode: "PREPAID_CARD_CUSTOMER_UPDATE",
          apiurl: "PREPAID_CARD_CUSTOMER_UPDATE",
        },
        {
          permissionName: "PREPAID_CARD_ADD",
          permissionCode: "PREPAID_CARD_ADD",
          apiurl: "PREPAID_CARD_ADD",
        },
        {
          permissionName: "PREPAID_CARD_LOCK",
          permissionCode: "PREPAID_CARD_LOCK",
          apiurl: "PREPAID_CARD_LOCK",
        },
        {
          permissionName: "PREPAID_CARD_UNLOCK",
          permissionCode: "PREPAID_CARD_UNLOCK",
          apiurl: "PREPAID_CARD_UNLOCK",
        },
        {
          permissionName: "PREPAID_CARD_BLOCK",
          permissionCode: "PREPAID_CARD_BLOCK",
          apiurl: "PREPAID_CARD_BLOCK",
        },
        {
          permissionName: "PREPAID_CARD_REPLACE",
          permissionCode: "PREPAID_CARD_REPLACE",
          apiurl: "PREPAID_CARD_REPLACE",
        },
        {
          permissionName: "PREPAID_CARD_VIEW",
          permissionCode: "PREPAID_CARD_VIEW",
          apiurl: "PREPAID_CARD_VIEW",
        },
        {
          permissionName: "PREPAID_CARD_LIST",
          permissionCode: "PREPAID_CARD_LIST",
          apiurl: "PREPAID_CARD_LIST",
        },
        {
          permissionName: "PREPAID_CARD_SET_PIN",
          permissionCode: "PREPAID_CARD_SET_PIN",
          apiurl: "PREPAID_CARD_SET_PIN",
        },
        {
          permissionName: "PREPAID_CARD_SET_PREFERENCE",
          permissionCode: "PREPAID_CARD_SET_PREFERENCE",
          apiurl: "PREPAID_CARD_SET_PREFERENCE",
        },
        {
          permissionName: "PREPAID_CARD_UPDATE_PREFERENCE",
          permissionCode: "PREPAID_CARD_UPDATE_PREFERENCE",
          apiurl: "PREPAID_CARD_UPDATE_PREFERENCE",
        },
        {
          permissionName: "PREPAID_CARD_REQUEST",
          permissionCode: "PREPAID_CARD_REQUEST",
          apiurl: "PREPAID_CARD_REQUEST",
        },
      ],
      PAYMENT_API_PG_FEE_CONFIG: [
        {
          permissionName: "FEE_CONFIGURATION",
          permissionCode: "FEE_CONFIGURATION",
          apiurl: "FEE_CONFIGURATION",
        },
      ],
      PAYMENT_API_BILL: [
        {
          permissionName: "Bill Category",
          permissionCode: "BILL_CATEGORY",
          apiurl: "Bill Category",
        },
      ],
      USER_API_ADMIN_FAQ: [
        {
          permissionName: "Pg Config Add",
          permissionCode: "PG_CONFIG_ADD",
          apiurl: "Pg Config Add",
        },
        {
          permissionName: "Pg config fetch",
          permissionCode: "PG_CONFIG_FETCH",
          apiurl: "Pg config fetch",
        },
        {
          permissionName: "Pg config fetch User Type",
          permissionCode: "PG_CONFIG_FETCH_USERTYPE",
          apiurl: "Pg config fetch User Type",
        },
        {
          permissionName: "Pg Config Fetch Topic",
          permissionCode: "PG_CONFIG_FETCH_TOPIC",
          apiurl: "Pg Config Fetch Topic",
        },
        {
          permissionName: "Pg Config fetch Uuid",
          permissionCode: "PG_CONFIG_FETCH_UUID",
          apiurl: "Pg Config fetch Uuid",
        },
        {
          permissionName: "Pg Config Fetch Topics",
          permissionCode: "PG_CONFIG_FETCH_TOPICS",
          apiurl: "Pg Config Fetch Topics",
        },
        {
          permissionName: "Pg Config update",
          permissionCode: "PG_CONFIG_UPDATE",
          apiurl: "Pg Config update",
        },
        {
          permissionName: "Pg Config Delete Uuid",
          permissionCode: "PG_CONFIG_DELETE_UUID",
          apiurl: "Pg Config Delete Uuid",
        },
      ],
      USER_API_ADMIN: [
        {
          permissionName: "create user",
          permissionCode: "CREATE_USER",
          apiurl: "/admin/create-user",
        },
        {
          permissionName: "CREATE_USER",
          permissionCode: "CREATE_USER",
          apiurl: "CREATE_USER",
        },
        {
          permissionName: "USER_LISTING",
          permissionCode: "USER_LISTING",
          apiurl: "USER_LISTING",
        },
        {
          permissionName: "MERCHANT_LIST",
          permissionCode: "MERCHANT_LIST",
          apiurl: "MERCHANT_LIST",
        },
      ],
      USER_API: [
        {
          permissionName: "MERCHANT_DETAILS",
          permissionCode: "MERCHANT_DETAILS",
          apiurl: "MERCHANT_DETAILS",
        },
      ],
      FETCH_ACCOUNT_BALANCE: [
        {
          permissionName: "FETCH ACCOUNT BALANCE",
          permissionCode: "FETCH_ACCOUNT_BALANCE",
          apiurl: "",
        },
      ],
      USER_API_ADMIN_TICKET: [
        {
          permissionName: "Admin Ticket Create",
          permissionCode: "ADMIN_TICKET_CREATE",
          apiurl: "Admin Ticket Create",
        },
      ],
      PAYMENT_API_ADMIN_TRANSACTION_LISTING: [
        {
          permissionName: "TRANSACTION_LISTING",
          permissionCode: "TRANSACTION_LISTING",
          apiurl: "TRANSACTION_LISTING",
        },
      ],
      PAYMENT_API_ADMIN_M2P_PREPAID_CARD: [
        {
          permissionName: "user list",
          permissionCode: "USER_LIST",
          apiurl: "/admin/user-list",
        },
        {
          permissionName: "USER_LIST",
          permissionCode: "USER_LIST",
          apiurl: "USER_LIST",
        },
        {
          permissionName: "LOCK_CARD",
          permissionCode: "LOCK_CARD",
          apiurl: "LOCK_CARD",
        },
        {
          permissionName: "UN_LOCK_CARD",
          permissionCode: "UN_LOCK_CARD",
          apiurl: "UN_LOCK_CARD",
        },
        {
          permissionName: "BLOCK_CARD",
          permissionCode: "BLOCK_CARD",
          apiurl: "BLOCK_CARD",
        },
      ],
      GET_IFSC_DETAILS: [
        {
          permissionName: "GET IFSC DETAILS",
          permissionCode: "GET_IFSC_DETAILS",
          apiurl: "",
        },
      ],
      USER_API_MESSAGE: [
        {
          permissionName: "Get User Message",
          permissionCode: "GET_USER_MESSAGE",
          apiurl: "Get User Message",
        },
      ],
      PAYMENT_API_PAYMENTS: [
        {
          permissionName: "FETCH_ACCOUNT_BALANCE",
          permissionCode: "FETCH_ACCOUNT_BALANCE",
          apiurl: "FETCH_ACCOUNT_BALANCE",
        },
        {
          permissionName: "GET_IFSC_DETAILS",
          permissionCode: "GET_IFSC_DETAILS",
          apiurl: "GET_IFSC_DETAILS",
        },
        {
          permissionName: "ACCOUNT_BALANCE",
          permissionCode: "ACCOUNT_BALANCE",
          apiurl: "ACCOUNT_BALANCE",
        },
        {
          permissionName: "TXN_LISTING",
          permissionCode: "TXN_LISTING",
          apiurl: "TXN_LISTING",
        },
        {
          permissionName: "QR_DYNAMIC_CODE",
          permissionCode: "QR_DYNAMIC_CODE",
          apiurl: "QR_DYNAMIC_CODE",
        },
        {
          permissionName: "QR_TXN",
          permissionCode: "QR_TXN",
          apiurl: "QR_TXN",
        },
        {
          permissionName: "UPI_COLLECT_STATUS",
          permissionCode: "UPI_COLLECT_STATUS",
          apiurl: "UPI_COLLECT_STATUS",
        },
      ],
      PAYMENT_API_M2P_CALLBACK: [
        {
          permissionName: "Prepaid Card Authorize",
          permissionCode: "PREPAID_CARD_AUTHORIZE",
          apiurl: "Prepaid Card Authorize",
        },
        {
          permissionName: "Prepaid Card Reversal",
          permissionCode: "PREPAID_CARD_REVERSAL",
          apiurl: "Prepaid Card Reversal",
        },
        {
          permissionName: "Prepaid Card Credit",
          permissionCode: "PREPAID_CARD_CREDIT",
          apiurl: "Prepaid Card Credit",
        },
      ],
      HELP_SUPPORT: [
        {
          permissionName: "HELP_SUPPORT",
          permissionCode: "HELP_SUPPORT",
          apiurl: "HELP_SUPPORT",
        },
      ],
      REPORT: [
        {
          permissionName: "REPORT",
          permissionCode: "REPORT",
          apiurl: "REPORT",
        },
      ],
      PAYMENT_API_OPERATOR: [
        {
          permissionName: "Create Operator",
          permissionCode: "CREATE_OPERATOR",
          apiurl: "Create Operator",
        },
        {
          permissionName: "Operator Update",
          permissionCode: "OPERATOR_UPDATE",
          apiurl: "Operator Update",
        },
      ],
      NOTIFICATION: [
        {
          permissionName: "SEND_NOTIFICATION",
          permissionCode: "SEND_NOTIFICATION",
          apiurl: "SEND_NOTIFICATION",
        },
      ],
      PAYMENT_API_RECHARGE: [
        {
          permissionName: "Recharge",
          permissionCode: "RECHARGE_OPERATOR_MOBILE_NUMBER",
          apiurl: "Operator Delete Uuid",
        },
      ],
      WEB: [
        {
          permissionName: "Merchant Profile",
          permissionCode: "MERCHANT_PROFILE",
          apiurl: "Merchant Profile",
        },
        {
          permissionName: "Dashboard",
          permissionCode: "DASHBOARD",
          apiurl: "Dashboard",
        },
        {
          permissionName: "Individual Merchant",
          permissionCode: "INDIVIDUAL_MERCHANT",
          apiurl: "Individual Merchant",
        },
        {
          permissionName: "Business Merchant",
          permissionCode: "BUSINESS_MERCHANT",
          apiurl: "Business Merchant",
        },
        {
          permissionName: "Manage Admin",
          permissionCode: "MANAGE_ADMIN",
          apiurl: "Manage Admin",
        },
        {
          permissionName: "TNC",
          permissionCode: "TNC",
          apiurl: "/admin/tnc",
        },
        {
          permissionName: "ALL_ROLE",
          permissionCode: "ALL_ROLE",
          apiurl: "/manage/user/role",
        },
        {
          permissionName: "UPDATE_ROLE",
          permissionCode: "UPDATE_ROLE",
          apiurl: "/manage/user/role",
        },
        {
          permissionName: "search-permission",
          permissionCode: "SEARCH_PERMISSION",
          apiurl: "search-permission",
        },
      ],
      USER_API_DASHBOARD: [
        {
          permissionName: "DASHBOARD_DETAIL",
          permissionCode: "DASHBOARD_DETAIL",
          apiurl: "DASHBOARD_DETAIL",
        },
      ],
      PAYMENT_API: [
        {
          permissionName: "BANK",
          permissionCode: "BANK",
          apiurl: "BANK",
        },
        {
          permissionName: "PAYMENT_MATHODS",
          permissionCode: "PAYMENT_MATHODS",
          apiurl: "PAYMENT_MATHODS",
        },
        {
          permissionName: "LIMIT_FREQUENCY",
          permissionCode: "LIMIT_FREQUENCY",
          apiurl: "LIMIT_FREQUENCY",
        },
        {
          permissionName: "FEE_RATE",
          permissionCode: "FEE_RATE",
          apiurl: "FEE_RATE",
        },
        {
          permissionName: "ROLE_UPDATE",
          permissionCode: "ROLE_UPDATE",
          apiurl: "ROLE_UPDATE",
        },
        {
          permissionName: "VIRTUAL_ACCOUNT",
          permissionCode: "VIRTUAL_ACCOUNT",
          apiurl: "VIRTUAL_ACCOUNT",
        },
      ],
      PAYMENT_API_MANAGE_PAYIN_PAYOUT: [
        {
          permissionName: "MANAGE_USER_MAPPING",
          permissionCode: "MANAGE_USER_MAPPING",
          apiurl: "MANAGE_USER_MAPPING",
        },
      ],
      USER_API_MANAGE_USER: [
        {
          permissionName: "USER_PERMISSION",
          permissionCode: "USER_PERMISSION",
          apiurl: "/manage/user/permission",
        },
        {
          permissionName: "all-permission",
          permissionCode: "ALL_PERMISSION",
          apiurl: "all-permission",
        },
        {
          permissionName: "UPDATE_PERMISSION",
          permissionCode: "UPDATE_PERMISSION",
          apiurl: "UPDATE_PERMISSION",
        },
        {
          permissionName: "ALL_PERMISSION",
          permissionCode: "ALL_PERMISSION",
          apiurl: "ALL_PERMISSION",
        },
      ],
      PAYMENT_API_ADMIN_CONFIGURATION: [
        {
          permissionName: "ADD_CONFIG",
          permissionCode: "ADD_CONFIG",
          apiurl: "ADD_CONFIG",
        },
        {
          permissionName: "CONFIG_ROLE_INFO",
          permissionCode: "CONFIG_ROLE_INFO",
          apiurl: "CONFIG_ROLE_INFO",
        },
        {
          permissionName: "CONFIG_ROLE_LIST",
          permissionCode: "CONFIG_ROLE_LIST",
          apiurl: "CONFIG_ROLE_LIST",
        },
        {
          permissionName: "CONFIG_ALL_INFO",
          permissionCode: "CONFIG_ALL_INFO",
          apiurl: "CONFIG_ALL_INFO",
        },
        {
          permissionName: "CONFIG_LIST_LIMIT",
          permissionCode: "CONFIG_LIST_LIMIT",
          apiurl: "CONFIG_LIST_LIMIT",
        },
        {
          permissionName: "CONFIG_LIST_FEE",
          permissionCode: "CONFIG_LIST_FEE",
          apiurl: "CONFIG_LIST_FEE",
        },
        {
          permissionName: "Config List Pg",
          permissionCode: "CONFIG_LIST_PG",
          apiurl: "Config List Pg",
        },
        {
          permissionName: "Config All Info",
          permissionCode: "CONFIG_ALL_INFO",
          apiurl: "Config All Info",
        },
        {
          permissionName: "Find Transaction Type",
          permissionCode: "FIND_TRANSACTION_TYPE",
          apiurl: "Find Transaction Type",
        },
      ],
    },
  };
  let userType = "ROLE_MERCHANT_DISTRIBUTOR";
  useEffect(() => {
    let navigationDataCopy = [...navigationData];
    const permissionsCodesArr = [];
    if (obj.data) {
      {
        Object.keys(obj.data).forEach((key) => {
          const permissionArrayOfObject = obj.data[key];
          permissionArrayOfObject.forEach((item) => {
            permissionsCodesArr.push(item.permissionCode);
          });
        });
      }
    }
    navigationDataCopy.map(
      (item) => (item.active = permissionsCodesArr.includes(item.id))
    );
    setNavigationData(navigationDataCopy);
  }, []);

  // console.log("ax112", navigationData);

  return (
    <Wrapper>
      {/* <Link className="logo" to="/">
        <Icon src={logo} width="141px" alt="" />
      </Link> */}
      <Nav>
        <NavList
          navData={navigationData}
          toggleNavigation={toggleNavigation}
          hideSubmenu={hideSubmenu}
          className="navlist"
        />
      </Nav>
    </Wrapper>
  );
}
