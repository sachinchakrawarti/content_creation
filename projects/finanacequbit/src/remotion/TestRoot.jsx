// import { Composition } from "remotion";
// import { StockMarketGraph } from "./platforms/youtube/components/stockmarketgraph";
// import { CinematicHook } from "./platforms/youtube/components/CinematicHook";
// import { CandlestickChart } from "./platforms/youtube/components/CandlestickChart";
// import { CompoundGrowthVisualizer } from "./platforms/youtube/components/CompoundGrowthVisualizer";
// import { AssetAllocationPie } from "./platforms/youtube/components/AssetAllocationPie";
// import { DebtPayoffTimeline } from "./platforms/youtube/components/DebtPayoffTimeline";
// import { BullVsBearGauge } from "./platforms/youtube/components/BullVsBearGauge";

// // Mutual Fund Components Imports
// import { MutualFundBreakdown } from "./platforms/youtube/components/mutualfund/MutualFundBreakdown";
// import { ExpenseRatioImpact } from "./platforms/youtube/components/mutualfund/ExpenseRatioImpact";
// import { StepUpSipCalculator } from "./platforms/youtube/components/mutualfund/StepUpSipCalculator";
// import { TaxBreakdownCard } from "./platforms/youtube/components/mutualfund/TaxBreakdownCard";
// import { FundOverlapVisualizer } from "./platforms/youtube/components/mutualfund/FundOverlapVisualizer";
// import { RiskVsReturnMatrix } from "./platforms/youtube/components/mutualfund/RiskVsReturnMatrix";

// // --- Existing Wrappers ---
// const StockGraphWrapper = () => (
//   <div
//     style={{
//       flex: 1,
//       backgroundColor: "#0A0A0F",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       width: "100%",
//       height: "100%",
//     }}
//   >
//     <StockMarketGraph delay={0} />
//   </div>
// );

// const CinematicHookWrapper = () => (
//   <CinematicHook
//     mainText="₹1,000 LOST"
//     subText="THE MONEY TRAP"
//     accentColor="#EF4444"
//   />
// );

// const CandlestickWrapper = () => (
//   <CandlestickChart
//     title="INTRADAY PRICE ACTION"
//     data={[
//       { open: 120, high: 140, low: 110, close: 135, label: "09:30" },
//       { open: 135, high: 150, low: 130, close: 148, label: "10:30" },
//       { open: 148, high: 152, low: 115, close: 120, label: "11:30" },
//       { open: 120, high: 160, low: 118, close: 155, label: "12:30" },
//       { open: 155, high: 180, low: 150, close: 175, label: "13:30" },
//     ]}
//   />
// );

// const CompoundGrowthWrapper = () => (
//   <CompoundGrowthVisualizer
//     initialInvested={50000}
//     totalReturn={240000}
//     years={20}
//   />
// );

// const AssetAllocationWrapper = () => (
//   <AssetAllocationPie
//     allocations={[
//       { label: "US Equities", percentage: 50, color: "#00F0FF" },
//       { label: "Global Tech", percentage: 25, color: "#00E676" },
//       { label: "Gold & Commodities", percentage: 15, color: "#FFD700" },
//       { label: "Cash Reserves", percentage: 10, color: "#64748B" },
//     ]}
//   />
// );

// const DebtPayoffWrapper = () => (
//   <DebtPayoffTimeline initialDebt={45000} monthsCount={12} />
// );

// const BullVsBearWrapper = () => <BullVsBearGauge score={78} />;

// // --- New Mutual Fund Wrappers ---
// const MutualFundBreakdownWrapper = () => (
//   <MutualFundBreakdown
//     fundName="NIFTY 50 INDEX FUND"
//     category="LARGE CAP • DIRECT PLAN"
//     monthlySIP={10000}
//     cagr={14.5}
//     expenseRatio={0.2}
//     years={10}
//     currencySymbol="₹"
//   />
// );

// const ExpenseRatioImpactWrapper = () => (
//   <ExpenseRatioImpact
//     fundName="INDEX vs ACTIVE FUND"
//     years={20}
//     monthlySIP={10000}
//     directCorpus={9800000}
//     regularCorpus={7400000}
//     currencySymbol="₹"
//   />
// );

// const StepUpSipWrapper = () => (
//   <StepUpSipCalculator
//     initialSip={10000}
//     stepUpRate={10}
//     years={15}
//     regularTotal={6700000}
//     stepUpTotal={12400000}
//     currencySymbol="₹"
//   />
// );

// const TaxBreakdownWrapper = () => (
//   <TaxBreakdownCard
//     profitAmount={200000}
//     stcgRate={20}
//     ltcgRate={12.5}
//     ltcgExemption={125000}
//     currencySymbol="₹"
//   />
// );

// const FundOverlapWrapper = () => (
//   <FundOverlapVisualizer
//     fundA="NIFTY 50 INDEX FUND"
//     fundB="LARGE & MIDCAP FUND"
//     overlapPercentage={42}
//     sharedStocks={["RELIANCE", "TCS", "HDFC BANK", "ICICI BANK", "INFOSYS"]}
//   />
// );

// const RiskVsReturnWrapper = () => <RiskVsReturnMatrix />;

// export const RemotionRoot = () => {
//   return (
//     <>
//       {/* Existing General Compositions */}
//       <Composition
//         id="TestStockGraph"
//         component={StockGraphWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />
//       <Composition
//         id="TestCinematicHook"
//         component={CinematicHookWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />
//       <Composition
//         id="CandlestickChart"
//         component={CandlestickWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />
//       <Composition
//         id="CompoundGrowth"
//         component={CompoundGrowthWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />
//       <Composition
//         id="AssetAllocation"
//         component={AssetAllocationWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />
//       <Composition
//         id="DebtPayoff"
//         component={DebtPayoffWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />
//       <Composition
//         id="BullVsBearGauge"
//         component={BullVsBearWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />

//       {/* Mutual Fund Compositions */}
//       <Composition
//         id="MutualFundBreakdown"
//         component={MutualFundBreakdownWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />
//       <Composition
//         id="ExpenseRatioImpact"
//         component={ExpenseRatioImpactWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />
//       <Composition
//         id="StepUpSipCalculator"
//         component={StepUpSipWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />
//       <Composition
//         id="TaxBreakdownCard"
//         component={TaxBreakdownWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />
//       <Composition
//         id="FundOverlapVisualizer"
//         component={FundOverlapWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />
//       <Composition
//         id="RiskVsReturnMatrix"
//         component={RiskVsReturnWrapper}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />
//     </>
//   );
// };
import { Composition } from "remotion";
import { CodeSnippetHighlighter } from "./platforms/youtube/components/other/CodeSnippetHighlighter";
import { MetricKpiGrid } from "./platforms/youtube/components/other/MetricKpiGrid";
import { KineticTypographyHook } from "./platforms/youtube/components/other/KineticTypographyHook";
import { FeatureComparisonTable } from "./platforms/youtube/components/other/FeatureComparisonTable";
import { PodcastAudioWaveform } from "./platforms/youtube/components/other/PodcastAudioWaveform";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="CodeSnippetHighlighter"
        component={CodeSnippetHighlighter}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MetricKpiGrid"
        component={MetricKpiGrid}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="KineticTypographyHook"
        component={KineticTypographyHook}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FeatureComparisonTable"
        component={FeatureComparisonTable}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PodcastAudioWaveform"
        component={PodcastAudioWaveform}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
