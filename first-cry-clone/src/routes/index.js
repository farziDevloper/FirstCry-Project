import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Payback from "../Pages/Payback";
import AddPayback from "../Pages/Payback/AddPayback";

import AddTopicForm from "../Pages/Support/AddTopicForm";
import lazyLoad from "./lazyLoad";
import RequireAuth from "./RequireAuth";

const DashboardPage = lazyLoad(lazy(() => import("../Pages/Dashboard")));
const LoginPage = lazyLoad(lazy(() => import("../Pages/Login")));
const AdminList = lazyLoad(lazy(() => import("../Pages/ManageAdmin/AdminList")));
const MerchantList = lazyLoad(lazy(() => import("../Pages/Merchants/List")));
const AddAdmin = lazyLoad(lazy(() => import("../Pages/ManageAdmin/AddAdmin")));
const Transactions = lazyLoad(lazy(() => import("../Pages/Transactions")));
const Merchants = lazyLoad(lazy(() => import("../Pages/Merchants")));
const RolePermission = lazyLoad(lazy(() => import("../Pages/RolePermission")));
const SendNotification = lazyLoad(lazy(() => import("../Pages/SendNotification")));
const AddQuestionForm = lazyLoad(lazy(() => import("../Pages/Support/AddQuestionForm")));
const AdminProfile = lazyLoad(lazy(() => import("../Pages/Admin_profile/AdminProfile")));

const PhysicalInventory = lazyLoad(lazy(() => import("../Pages/ManageCard/PhysicalInventory")));
const VirtualInventory = lazyLoad(lazy(() => import("../Pages/ManageCard/VirtualInventory")));
const BusinessIndividual = lazyLoad(lazy(() => import("../Pages/Role/BusinessIndividual")));
const BusinessIndividualList = lazyLoad(lazy(() => import("../Pages/Role/BusinessIndividualList")));
const ManageCardList = lazyLoad(lazy(() => import("../Pages/ManageCard/ManageCardList")));
const UploadInventory = lazyLoad(lazy(() => import("../Pages/ManageCard/UploadInventory")));
const GenerateCardReports = lazyLoad(lazy(() => import("../Pages/ManageCard/GenerateCardReports")));
const ManageReplaceCard = lazyLoad(lazy(() => import("../Pages/ManageCard/ReplaceCard")));
const Reports = lazyLoad(lazy(() => import("../Pages/Reports")));
const ReportByTransaction = lazyLoad(lazy(() => import("../Pages/Reports/ReportByTransaction")));
const DailyReports = lazyLoad(lazy(() => import("../Pages/Reports/DailyReports")));

const Support = lazyLoad(lazy(() => import("../Pages/Support")));
const ManageOperators = lazyLoad(lazy(() => import("../Pages/ManageOperators")));
const AddOperator = lazyLoad(lazy(() => import("../Pages/ManageOperators/add")));
const PhysicalCard = lazyLoad(lazy(() => import("../Pages/ManageCard/PhysicalCard")));
const VirtualCard = lazyLoad(lazy(() => import("../Pages/ManageCard/VirtualCard")));
const Tickets = lazyLoad(lazy(() => import("../Pages/Tickets")));
const CreateTickets = lazyLoad(lazy(() => import("../Pages/Tickets/add")));

const MerchantDetail = lazyLoad(lazy(() => import("../Pages/MerchantDetail")));
const ChangePassword = lazyLoad(lazy(() => import("../Pages/ChangePassword")));
const GenerateQR = lazyLoad(lazy(() => import("../Pages/QRCode/GenerateQR")));

const PaymentSettings = lazyLoad(lazy(() => import("../components/MerchantDetail/PaymentSettings")));
const IssuedPrepaidCardList = lazyLoad(lazy(() => import("../Pages/ManageCard/IssuedPrepaidCardList")));
const ManageOrderList = lazyLoad(lazy(() => import("../Pages/ManageCard/ManageOrderList")));
const GroupQRLists = lazyLoad(lazy(() => import("../Pages/QRCode/GroupQRLists")));
const ManageLoginHistory = lazyLoad(lazy(() => import("../Pages/ManageLoginHistory")));

const DistributorList = lazyLoad(lazy(() => import("../Pages/ManageDistributor/DistributorList")));
const AddDistributor = lazyLoad(lazy(() => import("../Pages/ManageDistributor/AddDistributor")));

const AgentList = lazyLoad(lazy(() => import("../Pages/ManageAgent/AgentList")));
const AddAgent = lazyLoad(lazy(() => import("../Pages/ManageAgent/AddAgent")));
const AgentMerchantList = lazyLoad(lazy(() => import("../Pages/ManageAgent/MerchantList")));
const AgentTransactionList = lazyLoad(lazy(() => import("../Pages/ManageAgent/TransactionList")));

const EscrowTransactions = lazyLoad(lazy(() => import("../Pages/EscrowTransactions")));

const PaybackRequestList = lazyLoad(lazy(() => import("../Pages/Payback/PaybackRequestList")));
const AddUserApproval = lazyLoad(lazy(() => import("../Pages/Payback/AddUserApproval")));
const EditUserApproval = lazyLoad(lazy(() => import("../Pages/Payback/EditUserApproval")));
const ApprovalUserList = lazyLoad(lazy(() => import("../Pages/Payback/ApprovalUserList")));

const ReconcileCollect = lazyLoad(lazy(() => import("../Pages/ReconcileCollect")));
const ReconcileAddUserApproval = lazyLoad(lazy(() => import("../Pages/ReconcileCollect/AddUserApproval")));
const ReconcileEditUserApproval = lazyLoad(lazy(() => import("../Pages/ReconcileCollect/EditUserApproval")));
const ReconcileApprovalUserList = lazyLoad(lazy(() => import("../Pages/ReconcileCollect/ApprovalUserList")));

const AddPaymentCollect = lazyLoad(lazy(() => import("../Pages/ReconcileCollect/AddPayment")));

const PageNotFound = lazyLoad(lazy(() => import("../Pages/PageNotFound")));

function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <DashboardPage />
          </RequireAuth>
        }
      />
      <Route
        path="/admin-list"
        element={
          <RequireAuth>
            <AdminList />
          </RequireAuth>
        }
      />
      <Route
        path="/merchant/:usertype/list"
        element={
          <RequireAuth>
            <MerchantList />
          </RequireAuth>
        }
      />
      <Route
        path="/merchant/:usertype/list"
        element={
          <RequireAuth>
            <MerchantList />
          </RequireAuth>
        }
      />
      <Route
        path="merchant-detail/:id"
        element={
          <RequireAuth>
            <MerchantDetail />
          </RequireAuth>
        }
      />
      <Route
        path="/admin-register"
        element={
          <RequireAuth>
            <AddAdmin />
          </RequireAuth>
        }
      />
      <Route
        path="/admin-edit/:id"
        element={
          <RequireAuth>
            <AddAdmin />
          </RequireAuth>
        }
      />
      <Route
        path="/manage-permission"
        element={
          <RequireAuth>
            <RolePermission />
          </RequireAuth>
        }
      />
      <Route
        path="/transactions"
        element={
          <RequireAuth>
            <Transactions />
          </RequireAuth>
        }
      />

      <Route
        path="/admin-profile"
        element={
          <RequireAuth>
            <Merchants />
          </RequireAuth>
        }
      />

      <Route
        path="/adminprofile"
        element={
          <RequireAuth>
            <AdminProfile />
          </RequireAuth>
        }
      />

      <Route
        path="/send-notification"
        element={
          <RequireAuth>
            <SendNotification />
          </RequireAuth>
        }
      />
      <Route
        path="/payment-settings/add"
        element={
          <RequireAuth>
            <BusinessIndividual />
          </RequireAuth>
        }
      />
      <Route
        path="/payment-settings/edit/:id"
        element={
          <RequireAuth>
            <BusinessIndividual isUpdate={true} />
          </RequireAuth>
        }
      />
      <Route
        path="/payment-settings/list"
        element={
          <RequireAuth>
            <BusinessIndividualList />
          </RequireAuth>
        }
      />
      <Route
        path="/payment-settings/default"
        element={
          <RequireAuth>
            <PaymentSettings />
          </RequireAuth>
        }
      />

      <Route
        path="/manage-card/list"
        element={
          <RequireAuth>
            <ManageCardList />
          </RequireAuth>
        }
      />
      <Route
        path="/manage-card/upload-inventory"
        element={
          <RequireAuth>
            <UploadInventory />
          </RequireAuth>
        }
      />

      <Route
        path="/manage-card/virtual-inventory"
        element={
          <RequireAuth>
            <VirtualInventory />
          </RequireAuth>
        }
      />
      <Route
        path="/manage-card/physical-inventory"
        element={
          <RequireAuth>
            <PhysicalInventory />
          </RequireAuth>
        }
      />

      <Route
        path="/manage-card/physical-card"
        element={
          <RequireAuth>
            <PhysicalCard />
          </RequireAuth>
        }
      />
      <Route
        path="/manage-card/virtual-card"
        element={
          <RequireAuth>
            <VirtualCard />
          </RequireAuth>
        }
      />
      <Route
        path="/manage-card/reports"
        element={
          <RequireAuth>
            <GenerateCardReports />
          </RequireAuth>
        }
      />
      <Route
        path="/manage-card/replace-card"
        element={
          <RequireAuth>
            <ManageReplaceCard />
          </RequireAuth>
        }
      />
      <Route
        path="/manage-card/issued-prepaid-cards"
        element={
          <RequireAuth>
            <IssuedPrepaidCardList />
          </RequireAuth>
        }
      />
      <Route
        path="/manage-card/orders"
        element={
          <RequireAuth>
            <ManageOrderList />
          </RequireAuth>
        }
      />
      <Route
        path="/reports"
        element={
          <RequireAuth>
            <Reports />
          </RequireAuth>
        }
      />
      <Route
        path="/reports-by-transaction"
        element={
          <RequireAuth>
            <ReportByTransaction />
          </RequireAuth>
        }
      />
      <Route
        path="/daily-reports"
        element={
          <RequireAuth>
            <DailyReports />
          </RequireAuth>
        }
      />

      <Route
        path="/support"
        element={
          <RequireAuth>
            <Support />
          </RequireAuth>
        }
      />
      <Route
        path="/support/faq/add-question"
        element={
          <RequireAuth>
            <AddQuestionForm />
          </RequireAuth>
        }
      />
      <Route
        path="/support/faq/add-topic"
        element={
          <RequireAuth>
            <AddTopicForm />
          </RequireAuth>
        }
      />
      <Route
        path="/support/edit-question/:questionId"
        element={
          <RequireAuth>
            <AddQuestionForm />
          </RequireAuth>
        }
      />
      <Route
        path="/manage-operators"
        element={
          <RequireAuth>
            <ManageOperators />
          </RequireAuth>
        }
      />

      <Route
        path="/add-operator"
        element={
          <RequireAuth>
            <AddOperator />
          </RequireAuth>
        }
      />

      <Route
        path="/edit-operator/:operatorId"
        element={
          <RequireAuth>
            <AddOperator />
          </RequireAuth>
        }
      />
      <Route
        path="/manage-tickets"
        element={
          <RequireAuth>
            <Tickets />
          </RequireAuth>
        }
      />
      <Route
        path="/ticket/add"
        element={
          <RequireAuth>
            <CreateTickets />
          </RequireAuth>
        }
      />
      <Route
        path="/ticket/edit/:ticketId"
        element={
          <RequireAuth>
            <CreateTickets />
          </RequireAuth>
        }
      />

      <Route
        path="/change-password"
        element={
          <RequireAuth>
            <ChangePassword />
          </RequireAuth>
        }
      />
      <Route
        path="/qr-generate"
        element={
          <RequireAuth>
            <GenerateQR />
          </RequireAuth>
        }
      />
      <Route
        path="/group-qr-codes/:groupname"
        element={
          <RequireAuth>
            <GroupQRLists />
          </RequireAuth>
        }
      />
      <Route
        path="/payback"
        element={
          <RequireAuth>
            <Payback />
          </RequireAuth>
        }
      />
      <Route
        path="/add/payback"
        element={
          <RequireAuth>
            <AddPayback />
          </RequireAuth>
        }
      />
      <Route
        path="/payback/request-list"
        element={
          <RequireAuth>
            <PaybackRequestList />
          </RequireAuth>
        }
      />
      <Route
        path="/payback/add-approval-user"
        element={
          <RequireAuth>
            <AddUserApproval />
          </RequireAuth>
        }
      />

      <Route
        path="/payback/edit-approval-user/:id"
        element={
          <RequireAuth>
            <EditUserApproval />
          </RequireAuth>
        }
      />

      <Route
        path="/payback/approval-user-list"
        element={
          <RequireAuth>
            <ApprovalUserList />
          </RequireAuth>
        }
      />

      <Route
        path="/login-history"
        element={
          <RequireAuth>
            <ManageLoginHistory />
          </RequireAuth>
        }
      />
      <Route
        path="/distributor-list"
        element={
          <RequireAuth>
            <DistributorList />
          </RequireAuth>
        }
      />
      <Route
        path="/distributor-register"
        element={
          <RequireAuth>
            <AddDistributor />
          </RequireAuth>
        }
      />
      <Route
        path="/distributor-edit/:id"
        element={
          <RequireAuth>
            <AddDistributor />
          </RequireAuth>
        }
      />
      <Route
        path="/agent-list"
        element={
          <RequireAuth>
            <AgentList />
          </RequireAuth>
        }
      />
      <Route
        path="/agent/merchant-list/:agentId"
        element={
          <RequireAuth>
            <AgentMerchantList />
          </RequireAuth>
        }
      />
      <Route
        path="/agent/transaction-list/:mobile"
        element={
          <RequireAuth>
            <AgentTransactionList />
          </RequireAuth>
        }
      />
      <Route
        path="/agent-register"
        element={
          <RequireAuth>
            <AddAgent />
          </RequireAuth>
        }
      />
      <Route
        path="/agent-edit/:id"
        element={
          <RequireAuth>
            <AddAgent />
          </RequireAuth>
        }
      />
      <Route
        path="/escrow-transactions"
        element={
          <RequireAuth>
            <EscrowTransactions />
          </RequireAuth>
        }
      />
      <Route
        path="/reconcile/request-list"
        element={
          <RequireAuth>
            <ReconcileCollect />
          </RequireAuth>
        }
      />
      <Route
        path="/reconcile-collect/add"
        element={
          <RequireAuth>
            <AddPaymentCollect />
          </RequireAuth>
        }
      />
      <Route
        path="/reconcile/approval-user-list"
        element={
          <RequireAuth>
            <ReconcileApprovalUserList />
          </RequireAuth>
        }
      />

      <Route
        path="/reconcile/add-approval-user"
        element={
          <RequireAuth>
            <ReconcileAddUserApproval />
          </RequireAuth>
        }
      />

      <Route
        path="/reconcile/edit-approval-user/:id"
        element={
          <RequireAuth>
            <ReconcileEditUserApproval />
          </RequireAuth>
        }
      />

      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RouteComponent;
