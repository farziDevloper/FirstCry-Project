export default {
  API_BASEPATH_STAGING:
    "https://erfe9ybpn7.execute-api.ap-south-1.amazonaws.com/dev-server",
  API_BASEPATH_PROD:
    "https://x9fuaxn2f4.execute-api.ap-south-1.amazonaws.com/production",
  API_BASEPATH_PROD_2:
    "https://u41lwnnry6.execute-api.ap-south-1.amazonaws.com/production_2",
  //API_BASEPATH: "",
  apis: {
    admin: {
      LOGIN: "/user-service/admin/authenticate",
      VERIFY_OTP: "/user-service/admin/verify-otp",
      RESEND_OTP: "/user-service/admin/resend-otp",
      FORGET_PASSWORD_OTP: "/user-service/admin/forget-password/otp",
      STATE_LIST: "/user-service/admin/state/list",
      CITY_LIST: "/user-service/admin/city/list",
      MERCHANT_LIST: "/user-service/admin/merchant/listing",
      MERCHANT_LIST_VPA: "/user-service/admin/merchant/detail/listing",
      USER_LIST: "/user-service/admin/user-list",
      UPDATE_STATUS: "/user-service/admin/update/status",
      UPDATE_ADMIN_DETAILS: "/user-service/admin/update/details",
      FOGOT_PASSWORD: "/user-service/admin/reset-password",
      GET_PAYMENT_LISTS: "/reporting-service/admin/transaction/listing",
      GET_SETTLEMENT_LISTS: "/reporting-service/admin/settlement/reports",
      GET_REFUND_LISTS: "/payment-service/payment/get-payu-transaction-detail",
      INITIATE_REFUND: "/payment-service/payment/initiate-refund",
      GET_REFUND_STATUS: "/payment-service/payment/fetch-refund-status",
      SEND_NOTIFICATION: "/reporting-service/notification/upload",
      NOTIFICATION_LIST:
        "https://imoney-63b1b-default-rtdb.firebaseio.com/notifications.json",
      PAYMENT_MODES: "/payment-service/admin/configuration/transaction/type",
      BANK_LIST: "/payment-service/admin/types/bank",
      PAYMENT_MODE_LIST: "/payment-service/admin/types/payment/methods",
      SAVE_ROLE_AND_PAYMENT_MODE: "/payment-service/admin/configuration/role",
      UPDATE_ROLE_AND_PAYMENT_MODE:
        "/payment-service/admin/configuration/update/role",
      ROLE_INFO: "/payment-service/admin/configuration/role/info",
      ADD_LIMIT: "/payment-service/admin/configuration/limits",
      LIST_LIMIT: "/payment-service/admin/configuration/list/limit",
      DELETE_LIMIT: "/payment-service/admin/configuration/delete/limit",
      UPDATE_LIMIT: "/payment-service/admin/configuration/update/limit",
      LIST_LIMIT_FREQUENCY: "/payment-service/admin/types/limit/frequency",
      PAYMENT_SETTING_LIST: "/payment-service/admin/configuration/all/info",
      PAYMENT_SETTING_LIST_ROLE:
        "/payment-service/admin/configuration/list/role",
      FEES_RATE: "/payment-service/admin/types/fee/rate",
      SUBMIT_FEES: "/payment-service/admin/configuration/fee",
      LIST_FEES: "/payment-service/admin/configuration/list/fee",
      UPDATE_FEES: "/payment-service/admin/configuration/update/fee",
      DELETE_FEES: "/payment-service/admin/configuration/delete/fee",
      MANAGE_CARD_LIST: "/payment-service/admin/prepaid/card/user/list",
      MANAGE_CARD_LOCK: "/payment-service/admin/prepaid/card/lock",
      MANAGE_CARD_UNLOCK: "/payment-service/admin/prepaid/card/unlock",
      MANAGE_CARD_BLOCK: "/payment-service/admin/prepaid/card/block",
      MANAGE_CARD_REPLACE: "/payment-service/prepaid/card/replace",
      ADD_ADMIN_CONFIGURATION: "/payment-service/admin/configuration/add",
      DASHBOARD_DETAILS: "/reporting-service/admin/dashboard/details",
      DASHBOARD_GRAPH: "/reporting-service/admin/dashboard/graph",
      TRANSACTION_GRAPH:
        "/reporting-service/admin/dashboard/transaction/details",
      DASHBOARD_TNC_RECORD:
        "/reporting-service/admin/dashboard/transaction/record",
      GET_CONFIGURATION_INFO_LIMIT_LOG:
        "/payment-service/admin/configuration/info/limit/log",
      GET_CONFIGURATION_INFO_FEE_LOG:
        "/payment-service/admin/configuration/info/fee/log",
      GET_CONFIGURATION_INFO_PG_LOG:
        "/payment-service/admin/configuration/info/pg/log",
      GET_CONFIGURATION_INFO_CONFIG_LOG:
        "/payment-service/admin/configuration/info/config/log",
      GET_PREPAID_CARD_INFO_LOG:
        "/payment-service/admin/configuration/info/prepaid/log",
      SETTLEMENT_REPORT: "/reporting-service/report/settlement",
      EXPENSE_REPORT: "/reporting-service/report/expense",
      OUTSTANDING_WALLET_BALANCE_REPORT:
        "/reporting-service/report/wallet/outstandings",
      INCOME_REPORT: "/reporting-service/report/income",
      ESCROW_REPORT: "/reporting-service/report/escrow/balance",
      HIERARCHY_REPORTS: "/user-service/admin/merchant/detail/datalisting",
      CARD_ISSUE_REPORT: "/reporting-service/report/card/issue",
      RETRY_VA_ACCOUNT: "/payment-service/bank/retry-create-virtual-account",
      ADD_FAQ: "/user-service/admin/faq/add",
      UPDATE_FAQ: "/user-service/admin/faq/update",
      FETCH_FAQ: "/user-service/admin/faq/fetchAll",
      FETCH_FAQ_TOPICS: "/user-service/admin/faq/fetch/topics",
      ADD_FAQ_TOPICS: "/user-service/admin/faq/add/topics",
      FETCH_FAQ_BY_USER_TYPE: "/user-service/admin/faq/fetch/by",
      FETCH_FAQ_BY_TOPIC: "/user-service/admin/faq/fetchBy/topic",
      EDIT_FAQ: "/user-service/admin/faq/fetch",
      DELETE_FAQ: "/user-service/admin/faq/delete",
      PHYSICAL_UPLOAD_KIT:
        "/payment-service/admin/prepaid/card/upload/physical/kit",
      VIEW_PHYSICAL_KIT:
        "/payment-service/admin/prepaid/card/view/physical/kit",
      DISPATCH_PHYSICAL_KIT:
        "/payment-service/admin/prepaid/card/dispatch/physical/kit",
      VIRTUAL_UPLOAD_KIT:
        "/payment-service/admin/prepaid/card/upload/virtual/kit",
      VIEW_VIRTUAL_KIT: "/payment-service/admin/prepaid/card/view/virtual/kit",
      CREATE_OPERATOR: "/payment-service/api/operator/create",
      UPDATE_OPERATOR: "/payment-service/api/operator/update",
      FETCH_OPERATOR: "/payment-service/api/operator/fetchAll",
      FETCH_OPERATOR_DETAIL: "/payment-service/api/operator/fetch",
      DELETE_OPERATOR: "/payment-service/api/operator/delete",

      VIRTUAL_CARD_UPDATE:
        "/payment-service/admin/prepaid/card/virtual/change/status",
      PHYSICAL_CARD_UPDATE:
        "/payment-service/admin/prepaid/card/physical/change/status",
      PAY_BACK: "/payment-service/admin/transactions/payBack",
      PAY_BACK_LISTING: "/payment-service/admin/transactions/payBack/listing",
      PAY_BACK_CREATE_REQUEST: "/payment-service/payback/request/create",
      PAY_BACK_REQUEST_LIST: "/payment-service/payback/request/list",
      SEARCH_OPERATOR_BY_SERVICE_TYPE: "/payment-service/api/operator",
      GET_BALANCE: "/reporting-service/admin/dashboard/balance",

      CREATE_TICKET: "/user-service/admin/ticket/create",
      UPDATE_TICKET: "/user-service/admin/ticket/update",
      TICKET_LIST: "/user-service/admin/ticket/list",
      TICKET_CATEGORY_LIST: "/user-service/admin/ticket/category",
      TICKET_STATUS_LIST: "/user-service/admin/ticket/status",
      TICKET_PRIORITY_LIST: "/user-service/admin/ticket/priority",
      TICKET_REQUESR_TYPE_LIST: "/user-service/admin/ticket/request-type",
      USER_ACCOUNT_LIST: "/payment-service/admin/get-user/account/list",
      USER_VIRTUAL_ACCOUNT:
        "/payment-service/admin/get-user/virtual-account/details",
      CHANGE_PASSWORD: "/user-service/admin/account/change-password",
      BLOCK_USER: "/payment-service/admin/block/user",
      USER_CONFIG_PAYIN: "/user-service/user/config/payIn",
      USER_CONFIG_PAYOUT: "/user-service/user/config/payOut",
      USER_CONFIG_PAYIN_COUNT: "/user-service/user/config/payInCount",
      USER_CONFIG_PAYOUT_COUNT: "/user-service/user/config/payOutCount",
      USER_CONFIG_LIST: "/user-service/user/config",
      USER_CONFIG_DASHBOARD: "/user-service/user/config/dashboard",
      USER_CONFIG_PAYMENT_MODE: "/user-service/user/config/paymentMode",

      DEFAULT_USER_CONFIG_PAYIN: "/user-service/user/default/config/payIn",
      DEFAULT_USER_CONFIG_PAYOUT: "/user-service/user/default/config/payOut",
      DEFAULT_USER_CONFIG_PAYIN_COUNT:
        "/user-service/user/default/config/payInCount",
      DEFAULT_USER_CONFIG_PAYOUT_COUNT:
        "/user-service/user/default/config/payOutCount",
      DEFAULT_USER_CONFIG_LIST: "/user-service/user/default/config",
      DEFAULT_USER_CONFIG_DASHBOARD:
        "/user-service/user/default/config/dashboard",
      FETCH_PREPAID_CARD_DETAILS:
        "/payment-service/admin/get-user/prepaid/card/details",
      ISSUED_PREPAID_CARD: "/reporting-service/admin/view/issued/prepaid/card",
      MCC_CONFIGURATION_LIST:
        "/payment-service/admin/configuration/mcc/details/list",
      MCC_DETAIL_UPDATE:
        "/payment-service/admin/configuration/mcc/details/update",
      ADD_MCC_DETAIL: "/payment-service/admin/configuration/mcc/details/add",
      ORDER_LIST: "/payment-service/admin/prepaid/card/order/list",
      ORDER_STATUS_UPDATE:
        "/payment-service/admin/prepaid/card/order/update/status",
      FETCH_BBPS_BALANCE: "/reporting-service/admin/dashboard/bbps/balance",
      VPA_GENERATE: "/user-service/admin/generate/vpa",
      VPA_FETCH_LIST: "/user-service/admin/fetch/vpa/list",
      RETRY_VPA_ACCOUNT: "/user-service/admin/update/user/vpa/id",
      VPA_FETCH_DETAILS: "/user-service/admin/fetch/vpa/details",
      FETCH_USER_TICKET_LIST: "/user-service/admin/fetch/user/ticket",
      ADD_COMMISSION_SETTING:
        "/payment-service/user/payment/update/service/charge/configuration",
      COMMISSION_SETTING_LIST:
        "/payment-service/user/payment/fetch/all/service/charge/configuration",
      UPDATE_CARD_STATUS: "/payment-service/admin/prepaid/card/change/status",
      TRANSACTION_VALIDATE: "/payment-service/transaction/validate",
      REPORT_BY_TRANSACTION: "/reporting-service/report/by/transaction/type",
      DAILY_REPORT: "/reporting-service/merchant/daily/report",
      ESCROW_TRANSACTION_LIST: "/payment-service/transaction/statement/escrow",
      ADD_APPROVAL_USER: "/payment-service/admin/approval/user/add",
      APPROVAL_USER_LIST: "/payment-service/admin/approval/user/list",
      APPROVAL_USER_DETAIL: "/payment-service/admin/approval/user/by/id",
      APPROVAL_USER_UPDATE: "/payment-service/admin/approval/user/update",
      RECONCILE_COLLECT_LIST: "/payment-service/reconcile/collect/request/list",
      RECONCILE_COLLECT_ADD: "/payment-service/reconcile/collect/request/add",
      RECONCILE_COLLECT_APPROVED:
        "/payment-service/reconcile/collect/request/approve",
    },
    user: {
      GET_ROLES: "/user-service/manage/user/role",
      GET_PERMISSIONS: "/user-service/manage/user/permission",
      UPDATE_PERMISSIONS: "/user-service/manage/user/update-permission",
      ADD_USER: "/user-service/admin/create-user",
      All_PERMISSIONS: "/user-service/manage/user/all-permission",
      UPDATE_USER: "https://jsonplaceholder.typicode.com/users",
      LOGOUT_USER: "https://jsonplaceholder.typicode.com/users",
      GET_PROFILE: "/user-service/user/profile",
      FETCH_USER_DETAILS: "/user-service/admin/fetch/user",
      UPDATE_USER_DETAILS: "/user-service/admin/update/user/details",
      BLOCK_PAY_IN: "/user-service/user/config/blockPayIn",
      BLOCK_PAY_OUT: "/user-service/user/config/blockPayOut",
      DEFAULT_BLOCK_PAY_IN: "/user-service/user/default/config/blockPayIn",
      DEFAULT_BLOCK_PAY_OUT: "/user-service/user/default/config/blockPayOut",
      USER_BY_MOBILE: "/user-service/user/search/by-mobile",
      LOGIN_HISTORY: "/user-service/admin/login/logs/details",
    },
    distributer: {
      GET_AGENTS: "/user-service/distributor/get/agent/list",
      SUBMIT_AADHAR_OTP: "/user-service/agent/submit-aadhar-otp",
      GET_AADHAR_OTP: "/user-service/agent/get-aadhar-otp",
      VERIFY_PAN: "/user-service/agent/verify-pan",
      DISTRIBUTOR_DASHBOARD_DETAILS:
        "/user-service/distributor/dashboard/details",
      AGENT_DETAILS: "/reporting-service/distributor/agent/details",
      TRANSACTION_DETAILS:
        "/reporting-service/distributor/dashboard/transaction/details",
    },
  },
};