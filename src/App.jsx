import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Fintech from "./pages/Fintech";
import Customers from "./pages/ecommerce/Customers";
import Orders from "./pages/ecommerce/Orders";
import Invoices from "./pages/ecommerce/Invoices";
import Shop from "./pages/ecommerce/Shop";
import Shop2 from "./pages/ecommerce/Shop2";
import Product from "./pages/ecommerce/Product";
import Cart from "./pages/ecommerce/Cart";
import Cart2 from "./pages/ecommerce/Cart2";
import Cart3 from "./pages/ecommerce/Cart3";
import Pay from "./pages/ecommerce/Pay";
import Campaigns from "./pages/Campaigns";
import UsersTabs from "./pages/community/UsersTabs";
import UsersTiles from "./pages/community/UsersTiles";
import Profile from "./pages/community/Profile";
import Feed from "./pages/community/Feed";
import Forum from "./pages/community/Forum";
import ForumPost from "./pages/community/ForumPost";
import Meetups from "./pages/community/Meetups";
import MeetupsPost from "./pages/community/MeetupsPost";
import CreditCards from "./pages/finance/CreditCards";
import Transactions from "./pages/finance/Transactions";
import TransactionDetails from "./pages/finance/TransactionDetails";
import JobListing from "./pages/job/JobListing";
import JobPost from "./pages/job/JobPost";
import CompanyProfile from "./pages/job/CompanyProfile";
import Messages from "./pages/Messages";
import TasksKanban from "./pages/tasks/TasksKanban";
import TasksList from "./pages/tasks/TasksList";
import Inbox from "./pages/Inbox";
import Calendar from "./pages/Calendar";
import Account from "./pages/settings/Account";
import Notifications from "./pages/settings/Notifications";
import Apps from "./pages/settings/Apps";
import Plans from "./pages/settings/Plans";
import Billing from "./pages/settings/Billing";
import Feedback from "./pages/settings/Feedback";
import Changelog from "./pages/utility/Changelog";
import Roadmap from "./pages/utility/Roadmap";
import Faqs from "./pages/utility/Faqs";
import EmptyState from "./pages/utility/EmptyState";
import PageNotFound from "./pages/utility/PageNotFound";
import KnowledgeBase from "./pages/utility/KnowledgeBase";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Onboarding01 from "./pages/Onboarding01";
import Onboarding02 from "./pages/Onboarding02";
import Onboarding03 from "./pages/Onboarding03";
import Onboarding04 from "./pages/Onboarding04";
import ButtonPage from "./pages/component/ButtonPage";
import FormPage from "./pages/component/FormPage";
import DropdownPage from "./pages/component/DropdownPage";
import AlertPage from "./pages/component/AlertPage";
import ModalPage from "./pages/component/ModalPage";
import PaginationPage from "./pages/component/PaginationPage";
import TabsPage from "./pages/component/TabsPage";
import BreadcrumbPage from "./pages/component/BreadcrumbPage";
import BadgePage from "./pages/component/BadgePage";
import AvatarPage from "./pages/component/AvatarPage";
import TooltipPage from "./pages/component/TooltipPage";
import AccordionPage from "./pages/component/AccordionPage";
import IconsPage from "./pages/component/IconsPage";
import ChangePassword from "./pages/settings/ChangePassword";
import Commodities from "./pages/ecommerce/Commodities";
import Auction from "./pages/ecommerce/Auction";
import Transaction from "./pages/ecommerce/Transaction";
import BidHistory from "./pages/ecommerce/BidHistory";
import Royalty from "./pages/ecommerce/Royalty";
import RoyaltiesPaid from "./pages/ecommerce/RoyaltiesPaid";
import RoyaltiesStatistics from "./pages/ecommerce/RoyaltiesStatistics";
import OfficialProducts from "./pages/ecommerce/OfficialProducts";
import StartAuction from "./pages/ecommerce/StartAuction";
import AuctionRecords from "./pages/ecommerce/AuctionRecords";
import BidRecords from "./pages/ecommerce/BidRecords";
import AuctionTransaction from "./pages/ecommerce/AuctionTransaction";
import UserInformation from "./pages/community/UserInformation";
import CollectionRecords from "./pages/ecommerce/CollectionRecords";
import CommodityGrp from "./pages/ecommerce/CommodityGrp";
import InformationType from "./pages/ecommerce/InformationType";
import AddInformation from "./pages/ecommerce/AddInformation";
import ArticleTable from "./pages/ecommerce/ArticleTable";
import SupportType from "./pages/ecommerce/SupportType";
import AddSupport from "./pages/ecommerce/AddSupport";
import SupportRecords from "./pages/settings/SupportRecords";
import ContractTransaction from "./pages/ecommerce/ContractTransaction";
import ContractApplication from "./pages/ecommerce/ContractApplication";
import TransactionCurrency from "./pages/ecommerce/TransactionCurrency";
import LanguageManagement from "./pages/ecommerce/LanguageManagement";
import NotificationTypes from "./pages/ecommerce/NotificationTypes";
import SystemConfiguration from "./pages/ecommerce/SystemConfiguration";
import CarouselPictures from "./pages/ecommerce/CarouselPictures";
import MailConfiguration from "./pages/ecommerce/MailConfiguration";
import SupportWallet from "./pages/ecommerce/SupportWallet";
import Administrator from "./pages/ecommerce/Administrator";
import RoleManagement from "./pages/ecommerce/RoleManagement";
import MenuManagement from "./pages/ecommerce/MenuManagement";
import FileManagement from "./pages/ecommerce/FileManagement";
import ConfigurationManagement from "./pages/ecommerce/ConfigurationManagement";
import SupportRecordTable from "./pages/settings/SupportRecordTable";
import StatisticalDistribution from "./pages/component/StatisticalDistribution";
import AddArticle from "./pages/ecommerce/AddArticle";
import ERCTweenty from "./pages/ecommerce/ERCTweenty";
import ERCTweentyOne from "./pages/ecommerce/ERCTweentyOne";
import WalletRegContract from "./pages/ecommerce/WalletRegContract";
import MarketContractDep from "./pages/ecommerce/MarketContractDep";
import AddTransactionToken from "./pages/ecommerce/AddTransactionToken";
import AddCarousel from "./pages/ecommerce/AddCarousel";
import AddMailConfiguration from "./pages/ecommerce/AddMailConfiguration";
import AddMainChain from "./pages/ecommerce/AddMainChain";
import AddRole from "./pages/ecommerce/AddRole";
import ModifyMenu from "./pages/ecommerce/ModifyMenu";
import AddProduct from "./pages/ecommerce/AddProduct";
import NFTMarket from "./pages/ecommerce/NFTMarket";
import PictureConfig from "./pages/ecommerce/PictureConfig";
import Home from "./pages/ecommerce/Home";
import AddSupportWallet from "./pages/ecommerce/AddSupportWallet";
import MainChainInfo from "./pages/ecommerce/MainChainInfo";
import EditInformation from "./pages/ecommerce/EditInformation";
import EditArticle from "./pages/ecommerce/EditArticle";
import EditSupport from "./pages/ecommerce/EditSupport";
import AddAdmin from "./pages/ecommerce/AddAdmin";
import EditAdmin from "./pages/ecommerce/EditAdmin";
import EditRole from "./pages/ecommerce/EditRole";
import EditMailConfiguration from "./pages/ecommerce/EditMailConfiguration";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login/home" element={<Shop />} />
        <Route path="/login/account" element={<Account />} />
        <Route path="/login/changePassword" element={<ChangePassword />} />

        <Route path="/market/product-list" element={<Customers />} />
        <Route path="/market/nft-details" element={<Product />} />
        <Route path="/market/commodities" element={<Commodities />} />
        <Route path="/market/auction" element={<Auction />} />
        <Route path="/market/transaction" element={<Transaction />} />
        <Route path="/market/bid-history" element={<BidHistory />} />
        <Route path="/market/royalty-income" element={<Royalty />} />
        <Route path="/market/royaltyPaid" element={<RoyaltiesPaid />} />
        <Route
          path="/market/statistical-distribution"
          element={<StatisticalDistribution />}
        />
        <Route
          path="/market/royalty-statistics"
          element={<RoyaltiesStatistics />}
        />

        <Route
          path="/auction/official-products"
          element={<OfficialProducts />}
        />
        <Route path="/auction/auction-record" element={<AuctionRecords />} />
        <Route path="/auction/bid-record" element={<BidRecords />} />
        <Route
          path="/auction/auction-transaction"
          element={<AuctionTransaction />}
        />
        <Route path="/auction/add-product" element={<AddProduct />} />

        <Route path="/user/user-information" element={<UserInformation />} />

        <Route
          path="/user/collection-records"
          element={<CollectionRecords />}
        />
        <Route path="/user/commodity-grp" element={<CommodityGrp />} />
        <Route path="/user/notification-switch" element={<Notifications />} />

        <Route path="/content/information-type" element={<InformationType />} />
        <Route path="/content/add-info" element={<AddInformation />} />
        <Route path="/content/edit-info/:id" element={<EditInformation />} />
        <Route path="/content/article-management" element={<ArticleTable />} />
        <Route path="/content/add-article" element={<AddArticle />} />
        <Route path="/content/edit-article/:id" element={<EditArticle />} />
        <Route path="/content/support-type" element={<SupportType />} />
        <Route path="/content/support-records" element={<SupportRecords />} />
        <Route path="/content/add-support" element={<AddSupport />} />
        <Route path="/content/edit-support/:id" element={<EditSupport />} />

        <Route
          path="/contract/contract-transaction"
          element={<ContractTransaction />}
        />
        <Route path="/contract/erc20" element={<ERCTweenty />} />
        <Route path="/contract/erc21" element={<ERCTweentyOne />} />
        <Route
          path="/contract/wallet-reg-contract"
          element={<WalletRegContract />}
        />
        <Route
          path="/contract/market-contract"
          element={<MarketContractDep />}
        />
        <Route path="/contract/nft-market" element={<NFTMarket />} />
        <Route
          path="/contract/contract-application"
          element={<ContractApplication />}
        />
        <Route
          path="/system/transaction-currency"
          element={<TransactionCurrency />}
        />
        <Route
          path="/system/add-transaction"
          element={<AddTransactionToken />}
        />

        <Route
          path="/system/language-management"
          element={<LanguageManagement />}
        />
        <Route
          path="/system/notification-types"
          element={<NotificationTypes />}
        />
        <Route
          path="/system/system-configuration"
          element={<SystemConfiguration />}
        />
        <Route
          path="/system/carousel-pictures"
          element={<CarouselPictures />}
        />
        <Route path="/system/add-carousel" element={<AddCarousel />} />
        <Route path="/system/picture-config" element={<PictureConfig />} />
        <Route
          path="/system/mail-configuration"
          element={<MailConfiguration />}
        />
        <Route
          path="/system/add-mail-configuration"
          element={<AddMailConfiguration />}
        />
        <Route
          path="/system/edit-mail-configuration/:id"
          element={<EditMailConfiguration />}
        />
        <Route
          path="/system/configuration-management"
          element={<ConfigurationManagement />}
        />
        <Route path="/system/main-chain-info" element={<MainChainInfo />} />

        <Route path="/system/add-main-chain" element={<AddMainChain />} />
        <Route path="/system/add-role" element={<AddRole />} />
        <Route path="/system/edit-role/:id" element={<EditRole />} />

        <Route path="/system/modify-menu" element={<ModifyMenu />} />
        <Route path="/system/support-wallet" element={<SupportWallet />} />
        <Route
          path="/system/add-support-wallet"
          element={<AddSupportWallet />}
        />
        <Route path="/system/administrator" element={<Administrator />} />
        <Route
          path="/system/administrator/create-admin"
          element={<AddAdmin />}
        />
        <Route
          path="/system/administrator/edit-admin/:id"
          element={<EditAdmin />}
        />

        <Route path="/system/role-management" element={<RoleManagement />} />
        <Route path="/system/menu-management" element={<MenuManagement />} />
        <Route path="/system/file-management" element={<FileManagement />} />

        <Route exact path="/" element={<Dashboard />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/fintech" element={<Fintech />} />

        <Route path="/ecommerce/orders" element={<Orders />} />

        <Route path="/ecommerce/invoices" element={<Invoices />} />

        <Route path="/ecommerce/shop-2" element={<Shop2 />} />

        <Route path="/ecommerce/start-auction" element={<StartAuction />} />

        <Route path="/ecommerce/cart" element={<Cart />} />
        <Route path="/ecommerce/cart-2" element={<Cart2 />} />
        <Route path="/ecommerce/cart-3" element={<Cart3 />} />
        <Route path="/ecommerce/pay" element={<Pay />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/community/users-tabs" element={<UsersTabs />} />
        <Route path="/community/users-tiles" element={<UsersTiles />} />

        <Route path="/community/profile" element={<Profile />} />
        <Route path="/community/feed" element={<Feed />} />
        <Route path="/community/forum" element={<Forum />} />
        <Route path="/community/forum-post" element={<ForumPost />} />
        <Route path="/community/meetups" element={<Meetups />} />
        <Route path="/community/meetups-post" element={<MeetupsPost />} />
        <Route path="/finance/cards" element={<CreditCards />} />
        <Route path="/finance/transactions" element={<Transactions />} />
        <Route
          path="/finance/transaction-details"
          element={<TransactionDetails />}
        />
        <Route path="/job/job-listing" element={<JobListing />} />
        <Route path="/job/job-post" element={<JobPost />} />
        <Route path="/job/company-profile" element={<CompanyProfile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/tasks/kanban" element={<TasksKanban />} />
        <Route path="/tasks/list" element={<TasksList />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/calendar" element={<Calendar />} />

        <Route
          path="/settings/support-record-table"
          element={<SupportRecordTable />}
        />

        <Route path="/settings/apps" element={<Apps />} />
        <Route path="/settings/plans" element={<Plans />} />
        <Route path="/settings/billing" element={<Billing />} />
        <Route path="/settings/feedback" element={<Feedback />} />
        <Route path="/utility/changelog" element={<Changelog />} />
        <Route path="/utility/roadmap" element={<Roadmap />} />
        <Route path="/utility/faqs" element={<Faqs />} />
        <Route path="/utility/empty-state" element={<EmptyState />} />
        <Route path="/utility/404" element={<PageNotFound />} />
        <Route path="/utility/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/onboarding-01" element={<Onboarding01 />} />
        <Route path="/onboarding-02" element={<Onboarding02 />} />
        <Route path="/onboarding-03" element={<Onboarding03 />} />
        <Route path="/onboarding-04" element={<Onboarding04 />} />
        <Route path="/component/button" element={<ButtonPage />} />
        <Route path="/component/form" element={<FormPage />} />
        <Route path="/component/dropdown" element={<DropdownPage />} />
        <Route path="/component/alert" element={<AlertPage />} />
        <Route path="/component/modal" element={<ModalPage />} />
        <Route path="/component/pagination" element={<PaginationPage />} />
        <Route path="/component/tabs" element={<TabsPage />} />
        <Route path="/component/breadcrumb" element={<BreadcrumbPage />} />
        <Route path="/component/badge" element={<BadgePage />} />
        <Route path="/component/avatar" element={<AvatarPage />} />
        <Route path="/component/tooltip" element={<TooltipPage />} />
        <Route path="/component/accordion" element={<AccordionPage />} />
        <Route path="/component/icons" element={<IconsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
