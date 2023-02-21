import React from "react";
import IconDashboard from "../../assets/images/IconDashboard";
import IconMerchant from "../../assets/images/IconMerchant";
import IconAddUser from "../../assets/images/IconAddUser";
import IconBusiness from "../../assets/images/IconBusiness";
import IconSettings from "../../assets/images/IconSettings";
import IconSendNotification from "../../assets/images/IconSendNotification";
import IconReport from "../../assets/images/IconReport";
import IconTicket from "../../assets/images/IconTicket";
// 0: "merchant profile"
// 1: "dashboard"
// 2: "individual merchant"
// 3: "business merchant"
// 4: "search-permission"
// 5: "all-permission"

export const navData = [
  {
    icon: <IconDashboard />,
    link: "/dashboard",
    title: "Dashboard",
    id: "DASHBOARD",
    expanded: false,
    active: false,
  },
  {
    icon: <IconMerchant />,
    link: "/merchant-profile",
    title: "Merchant",
    id: "MERCHANT_PROFILE",
    expanded: false,
    active: false,
    subNav: [
      {
        icon: "",
        link: "/merchant/individual/list",
        title: "Individual Merchant",
      },
      {
        icon: "",
        link: "/merchant/business/list",
        title: "Business Merchant",
      },
    ],
  },
  {
    icon: <IconAddUser />,
    link: "/manage-admin",
    title: "Manage Admin",
    id: "CREATE_USER",
    expanded: false,
    active: false,
    subNav: [
      {
        icon: "",
        link: "/admin-register",
        title: "Add Admin",
      },
      {
        icon: "",
        link: "/admin-list",
        title: "View Admin",
      },
    ],
  },
  {
    icon: <IconAddUser />,
    link: "/manage-distributor",
    title: "Manage Distributor",
    id: "CREATE_USER",
    expanded: false,
    active: false,
    subNav: [
      {
        icon: "",
        link: "/distributor-register",
        title: "Add Distributor",
      },
      {
        icon: "",
        link: "/distributor-list",
        title: "View Distributor",
      },
    ],
  },
  {
    icon: <IconAddUser />,
    link: "/manage-agent",
    title: "Manage Agent",
    id: "MANAGE_AGENT",
    expanded: false,
    active: false,
    subNav: [
      {
        icon: "",
        link: "/agent-register",
        title: "Add Agent",
      },
      {
        icon: "",
        link: "/agent-list",
        title: "View Agents",
      },
    ],
  },
  {
    icon: <IconBusiness />,
    link: "/role",
    title: "Role",
    id: "ROLE",
    expanded: false,
    active: false,
    subNav: [
      {
        icon: "",
        link: "/role/business-individual",
        title: "Business Individual",
      },
      {
        icon: "",
        link: "/role/business-merchant",
        title: "Business Merchant",
      },
    ],
  },
  {
    icon: <IconAddUser />,
    link: "/manage-permission",
    title: "Manage Permission",
    id: "UPDATE_PERMISSION",
    active: false,
    expanded: false,
  },

  // {
  //   icon: <IconAddUser />,
  //   link: "/manage-admin",
  //   title: "Manage Business",
  //   id: "MANAGE_ADMIN",
  //   expanded: false,
  //   active: false,
  //   subNav: [
  //     {
  //       icon: "",
  //       link: "/role/business-individual",
  //       title: "Add Business Data",
  //     },
  //     {
  //       icon: "",
  //       link: "/role/business-individual/list",
  //       title: "View Business Data",
  //     },
  //   ],
  // },
  {
    icon: <IconBusiness />,
    link: "/payment-settings",
    title: "Payment Settings",
    id: "ADD_CONFIG",
    expanded: false,
    active: false,
    subNav: [
      {
        icon: "",
        link: "/payment-settings/add",
        title: "Add New",
      },
      {
        icon: "",
        link: "/payment-settings/list",
        title: "List",
      },
      {
        icon: "",
        link: "/payment-settings/default",
        title: "Default",
      },
    ],
  },
  {
    icon: <IconBusiness />,
    link: "/manage-card",
    title: "Manage Card",
    id: "PREPAID_CARD_VIEW",
    expanded: false,
    active: false,
    subNav: [
      {
        icon: "",
        link: "/manage-card/list",
        title: "Assign Cards",
      },
      // {
      //   icon: "",
      //   link: "/manage-card/upload-Inventory",
      //   title: "Upload Inventory",
      // },
      // {
      //  icon: "",
      //  link: "/manage-card/reports",
      //  title: "Reports",
      // },
      // {
      //  icon: "",
      //  link: "/manage-card/replace-card",
      //   title: "Replace Card",
      // },
      {
        icon: "",
        link: "/manage-card/physical-card",
        title: "Manage Physical Card",
      },
      {
        icon: "",
        link: "/manage-card/virtual-card",
        title: "Manage Virtual Card",
      },
      {
        icon: "",
        link: "/manage-card/orders",
        title: "Manage Order List",
      },
    ],
  },

  {
    icon: <IconAddUser />,
    link: "/transactions",
    title: "Transactions",
    id: "TRANSACTION_LISTING",
    expanded: false,
    active: false,
  },
  {
    icon: <IconSettings />,
    link: "#",
    title: "Settings",
    active: false,
    expanded: false,
  },
  {
    icon: <IconSendNotification />,
    link: "/send-notification",
    title: "Send Notifications",
    id: "TNC",
    active: false,
    expanded: false,
  },
  {
    icon: <IconReport />,
    link: "/reports",
    title: "Manage Reports",
    id: "TNC",
    expanded: false,
    active: false,
    subNav: [
      {
        icon: "",
        link: "/reports",
        title: "Reports",
      },
      {
        icon: "",
        link: "/reports-by-transaction",
        title: "Reports By Transaction",
      },
      {
        icon: "",
        link: "/daily-reports",
        title: "Daily Reports",
      },
      {
        icon: "",
        link: "/escrow-transactions",
        title: "Live Escrow Statement",
      },
    ],
  },

  {
    icon: <IconReport />,
    link: "/support",
    title: "Help & Support",
    id: "TNC",
    expanded: false,
    active: false,
  },
  {
    icon: <IconReport />,
    link: "/manage-operators",
    title: "Manage Operator",
    id: "CREATE_OPERATOR",
    expanded: false,
    active: false,
  },
  {
    icon: <IconTicket />,
    link: "/manage-tickets",
    title: "Manage Tickets",
    id: "ADMIN_TICKET_CREATE",
    expanded: false,
    active: false,
  },
  {
    icon: <IconTicket />,
    link: "/change-password",
    title: "Change Password",
    id: "TNC",
    expanded: false,
    active: false,
  },
  {
    icon: <IconTicket />,
    link: "/qr-generate",
    title: "QR Generate",
    id: "TNC",
    expanded: false,
    active: false,
  },
  {
    icon: <IconTicket />,
    link: "/payback",
    title: "Manage Payback",
    id: "TNC",
    expanded: false,
    active: false,
    subNav: [
      {
        icon: "",
        link: "/payback",
        title: "Payback",
      },
      {
        icon: "",
        link: "/payback/approval-user-list",
        title: "Approval User List",
      },
      {
        icon: "",
        link: "/payback/request-list",
        title: "Request List",
      },
    ],
  },
  {
    icon: <IconTicket />,
    link: "/reconcile-collect",
    title: "Reconcile Collect",
    id: "TNC",
    expanded: false,
    active: false,
    subNav: [
      {
        icon: "",
        link: "/reconcile/approval-user-list",
        title: "Approval User List",
      },
      {
        icon: "",
        link: "/reconcile/request-list",
        title: "Request List",
      },
    ],
  },
  {
    icon: <IconMerchant />,
    link: "/login-history",
    title: "Login History",
    id: "TNC",
    expanded: false,
    active: false,
  },
];
